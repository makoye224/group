// firebaseFunctions.js

import { doc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const postData = async (data) => {
  try {
    const postId = uuidv4(); // Generate a unique ID for the post

    // Add the current date and time to the data object
    const currentDate = new Date().toISOString(); // This will give you the current date and time in ISO format
    data.postedAt = currentDate;

    // Check if there are images to upload
    if (data.images && data.images.length > 0) {
      const imageUrls = await Promise.all(
        data.images.map((imageUri, index) => uploadImageToFirebase(imageUri, data.category, postId, index))
      );

      const user = {
        userId: auth.currentUser.uid,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
      }

      

      const likes = 0;
      const comments = [];
      const shares = [];

      data.user = user;
      data.likes = likes;
      data.comments = comments;
      data.shares = shares;

      // Once you have URLs, remove the images property from the data object
      delete data.images;
      
      // Attach the array of image URLs to your data object
      data.imageUrls = imageUrls;
    }
    
    const postDocRef = doc(db, 'posts', postId);
    
    await setDoc(postDocRef, data);
    
    alert('posted');
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
}


// Function to retrieve data from Firestore
export const getData = async () => {
  try {
    const collectionRef = db.collection('posts'); // Replace 'yourCollectionName' with your actual collection name
    const snapshot = await collectionRef.get();
    const dataList = [];
    
    snapshot.forEach((doc) => {
      const data = doc.data();
      dataList.push({
        id: doc.id,
        ...data
      });
    });

    return dataList;

  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw error;
  }
};


export const uploadImageToFirebase = async (imageUri, cat, postId, index) => {
  try {
    const response = await fetch(imageUri);
    const blob = await response.blob();

    // Define a unique storage path for each image based on its index
    const storageRef = ref(storage, `images/${cat}/${postId}_${index}.jpg`);

    const uploadTask = uploadBytesResumable(storageRef, blob);
    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Handle progress, if needed
        }, 
        (error) => {
          console.error("Error uploading image: ", error);
          reject(error);
        }, 
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            
            // Return an object containing the image index and download URL
            resolve({ index, url: downloadURL });
          } catch (error) {
            console.error("Error getting download URL: ", error);
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error("Error processing image: ", error);
    throw error;
  }
};

