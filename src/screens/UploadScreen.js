import React from "react";

const UploadScreen = ({ progress, visible, onDone }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-4 rounded shadow-md text-center">
        <div className="text-lg mb-4">Uploading...</div>
        <div className="w-full bg-gray-200 rounded-full">
          <div
            className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
        {progress === 100 && (
          <button
            onClick={onDone}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Done
          </button>
        )}
      </div>
    </div>
  );
};

export default UploadScreen;
