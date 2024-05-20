import React, { useEffect, useRef, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import Card from "../components/Card";
import SearchBar from '../components/SearchBar';
import FeedButtons from '../components/FeedButtons';
import { db } from '../firebase/firebase';

const ListingsScreen = ({ navigation }) => {
  const listRef = useRef(null);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const chatsCollection = collection(db, 'posts');
    const q = query(chatsCollection, orderBy('postedAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDataList(fetchedPosts);
    });
    return () => unsubscribe();
  }, []);

  const handleScroll = (event) => {
    // const currentScrollY = event.target.scrollTop;
    // setScrollY(currentScrollY);
  };

  const handleSearch = (query) => {
    alert(`You searched for: ${query}`);
  };

  return (
    <>
      <div className="flex flex-col items-center bg-white min-h-screen">
        <div className="w-full px-4">
          <SearchBar handleSearch={handleSearch} />
        </div>
        <div className="h-1 bg-gray-200 w-full my-2"></div>
        <div
          className="w-full overflow-y-auto"
          style={{ height: 'calc(100vh - 80px)' }}
          onScroll={handleScroll}
          ref={listRef}
        >
          {/* Adjust grid layout for larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {dataList.map(item => (
              <Card
                key={item.id}
                title={item.title}
                displayName={item.user.displayName}
                location={item.location}
                description={item.description}
                subTitle={"$" + item.price}
                imageUrl={item.imageUrls[0]?.url}
                onClick={() => console.log("clicked card")}
                thumbnailUrl={item.imageUrls[0]?.url}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingsScreen;
