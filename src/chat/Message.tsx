import React from "react";

const Message = ({ message }: any) => {
  return (
    <div className={`mb-4`}>
      <div className="flex items-center gap-1">
        <img
          className="w-8 h-8 rounded-full"
          src="https://jiffychat.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdxn4puhh7%2Fimage%2Fupload%2Fv1710084826%2Fimage%2FSagar%2520thakuri%2Fbqbovqoucziwmkw2jjah.jpg&w=128&q=75"
          alt="user avatar"
        />
        <p className="user-name">{message.name}</p>
      </div>

      <p className="user-message">{message.text}</p>
    </div>
  );
};

export default Message;
