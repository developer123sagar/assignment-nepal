import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { db } from "../../config/firebase";
import Message from "../../chat/Message";

const ChatContainer = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages: any = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a: any, b: any) => a?.createdAt - b?.createdAt
      );
      setMessages(sortedMessages);
    });

    return () => unsubscribe();
  }, []);

  console.log(messages);

  return (
    <div className="h-[80vh]  py-3 px-4 w-full flex-grow overflow-auto custom-scrollbar relative">
      <div className="flex w-full">
        <div
          className="flex flex-col text-white-1 justify-end w-full gap-1 overflow-auto z-0"
          ref={chatRef}
        >
          {messages &&
            messages?.map((msg, id) => <Message key={id} message={msg} />)}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;
