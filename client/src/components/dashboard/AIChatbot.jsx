import "./AIChatbot.css";

import { useState } from "react";

function AIChatbot() {

  const [open, setOpen] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const sendMessage = async () => {

    if(!message) return;

    const updatedMessages = [

      ...messages,

      {
        role: "user",
        text: message,
      },

    ];

    setMessages(updatedMessages);

    setLoading(true);

    try {

      const response =
        await fetch(

          `${import.meta.env.VITE_API_URL}/api/ai/chat`,

          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              message,
            }),
          }
        );

      const data =
        await response.json();

      setMessages([

        ...updatedMessages,

        {
          role: "ai",
          text: data.reply,
        },

      ]);

    } catch (error) {

      console.log(error);

    }

    setLoading(false);

    setMessage("");
  };

  return (

    <>

      <div
        className="ai-chat-toggle"

        onClick={() =>
          setOpen(!open)
        }
      >
        🤖
      </div>

      {open && (

        <div className="ai-chatbox">

          <div className="ai-header">

            ScoloraX AI

          </div>

          <div className="ai-messages">

            {messages.map(
              (msg, index) => (

                <div
                  key={index}

                  className={
                    msg.role === "user"
                      ? "user-msg"
                      : "ai-msg"
                  }
                >

                  {msg.text}

                </div>

              )
            )}

            {loading && (

              <div className="ai-msg">
                Thinking...
              </div>

            )}

          </div>

          <div className="ai-input-area">

            <input

              type="text"

              placeholder="Ask about careers, scholarships..."

              value={message}

              onChange={(e) =>
                setMessage(
                  e.target.value
                )
              }
            />

            <button
              onClick={sendMessage}
            >
              Send
            </button>

          </div>

        </div>

      )}

    </>

  );
}

export default AIChatbot;