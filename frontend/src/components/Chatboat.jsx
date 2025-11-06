import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "नमस्ते! मैं आपका चैटबोट हूँ 🤖, कैसे मदद कर सकता हूँ?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // User message
    const newMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    // Bot reply (simple demo logic)
    setTimeout(() => {
      let reply = "माफ करें, मैं अभी सीख रहा हूँ 🙂";
      if (input.toLowerCase().includes("hello") || input.includes("नमस्ते")) {
        reply = "नमस्ते 🙏! आपका दिन शुभ हो!";
      } else if (input.toLowerCase().includes("kaise ho")) {
        reply = "मैं बढ़िया हूँ 😄, आप कैसे हैं?";
      } else if (input.toLowerCase().includes("thanks") || input.includes("धन्यवाद")) {
        reply = "आपका स्वागत है 🙌";
      }

      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-2xl rounded-2xl border border-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-[#008585] text-white px-4 py-3 rounded-t-2xl font-semibold text-center">
        🤖 Simple Chatbot
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2 h-64 bg-gray-50">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg text-sm max-w-[80%] ${
              msg.from === "user"
                ? "bg-[#008585] text-white self-end ml-auto"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type message..."
          className="flex-1 px-3 py-2 text-sm outline-none rounded-bl-2xl"
        />
        <button
          onClick={handleSend}
          className="bg-[#008585] text-white px-4 py-2 rounded-br-2xl hover:bg-[#007272] transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
