import React from "react";

interface DocumentProps {
  title: string;
  author: string;
  date: string;
  body: string;
}

const Document: React.FC<DocumentProps> = ({ title, author, date, body }) => {
  return (
    <div
      className="bg-white text-gray-800 w-full mx-auto my-8 p-8 rounded-lg shadow-lg"
      style={{ maxWidth: "95%" }} // Adjust width to your preference
    >
      <div className="border-2 border-gray-800 p-6 rounded">
        <div className="text-center mb-4">
          <h1 className="text-xl font-bold mb-2">{title}</h1>{" "}
          {/* Adjusted font size */}
          {/* Removed subtitle */}
          <p className="text-md mb-4">
            {author} - {date}
          </p>
        </div>
        <div className="text-left">
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Document;
