import React, { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, input]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index} className="bg-blue-100 p-2 rounded mb-2">
            {msg}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded p-2"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className="ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
