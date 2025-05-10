import { useState } from "react";

function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("User Message:", message); // Replace with your API call logic
      setMessage("");
    }
  };

  return (
    <div className="flex items-center border rounded-xl p-2 mt-4 shadow">
      <input
        type="text"
        placeholder="Ask your health question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow px-4 py-2 rounded-l-xl outline-none"
      />
      <button
        onClick={handleSend}
        className="bg-pink-500 text-white px-4 py-2 rounded-r-xl hover:bg-pink-600"
      >
        Send
      </button>
    </div>
  );
}
export default ChatInput;
