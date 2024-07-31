import React from "react";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import MessageBar from "./MessageBar";
import ViewAssignmentCard from "../ViewAssignmentCard";

const Chat = () => {
  return (
    <div className="w-full h-full">
      <ChatHeader />
      <div className="w-full flex">
        <div className="bg-black-1 w-1/2 flex flex-col justify-between">
          <ChatContainer />
          <MessageBar />
        </div>
        <div className="w-1/2 mt-2">
          <ViewAssignmentCard />
        </div>
      </div>
    </div>
  );
};

export default Chat;
