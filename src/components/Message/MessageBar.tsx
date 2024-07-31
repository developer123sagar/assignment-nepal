import { MdSend } from "react-icons/md";
import { Button } from "../../Common";
import React, { FormEvent, useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase";

const MessageBar = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await addDoc(collection(db, "messages"), {
        text: message,
        name: "sagar",
        avatar: "sagar.png",
        createdAt: serverTimestamp(),
        // uid,
      });
      console.log(res)
      setMessage("");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <>
      <ul className="h-[10vh] relative px-4 overflow-hidden flex items-center gap-6 bg-gray-900">
        <li className="flex gap-6 z-[9999] bg-opacity-95 opacity-95"></li>
        <form
          onSubmit={handleSendMessage}
          className="w-full rounded-lg h-10 flex gap-10 items-center"
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Type a message"
            className="bg-gray-600 text-sm focus:outline-none text-white-1 placeholder:text-white-1 h-10 rounded px-5 py-4 w-full"
          />

          <Button
            disabled={message?.length === 0}
            type="submit"
            className="bg-[#2aa19b] hidden sm:block"
          >
            <MdSend
              className="text-gray-200  cursor-pointer text-xl"
              title="Send message"
            />
          </Button>
        </form>
      </ul>
    </>
  );
};

export default MessageBar;
