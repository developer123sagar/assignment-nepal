import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import React from "react";
import { RootState, useAppSelector } from "../../redux/store";

const ChatHeader = () => {
  const [currentChatUser] = useState(true);
  const { role } = useAppSelector((state: RootState) => state.task);

  return (
    <>
      {currentChatUser && (
        <header className="h-[10vh] px-4 py-1 flex justify-between items-center bg-gray-900 text-white-1">
          <li className="flex items-center justify-center gap-6">
            <img
              src={`https://jiffychat.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdxn4puhh7%2Fimage%2Fupload%2Fv1710084826%2Fimage%2FSagar%2520thakuri%2Fbqbovqoucziwmkw2jjah.jpg&w=128&q=75`}
              alt={"user"}
              width={100}
              height={100}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex flex-col">
              <span className="text-gray-200 text-lg capitalize">{role}</span>
            </div>
          </li>
          <li className="flex gap-2">
            <BiSearchAlt2 title="Search" size={20} className="cursor-pointer" />
            <BsThreeDotsVertical
              size={20}
              title="Contact info"
              className="cursor-pointer"
            />
          </li>
        </header>
      )}
    </>
  );
};

export default ChatHeader;
