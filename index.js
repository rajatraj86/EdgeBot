
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const sampleItinerary = {
  location: "Paris, France",
  experience: "Eiffel Tower at sunset with a Seine river cruise",
  hotel: "Hotel Le Meurice",
  image: "https://upload.wikimedia.org/wikipedia/commons/a/af/Tour_Eiffel_Wikimedia_Commons.jpg"
};

export default function EdgeBot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Dear Axis Bank customer, how can I help you plan your next travel adventure today?"
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: `Here is a suggested itinerary for you:`,
        itinerary: sampleItinerary
      }
    ];

    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-[#952D2D] p-6 text-white">
      <div className="flex items-center space-x-4 mb-6">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/1/1e/Axis_Bank_logo.png"
          alt="Axis Bank Logo"
          width={60}
          height={60}
        />
        <h1 className="text-3xl font-bold">EdgeBot</h1>
      </div>

      <div className="bg-white text-black rounded-2xl shadow-lg p-4 max-w-2xl mx-auto mb-4 h-[60vh] overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}
          >
            <p className="font-semibold">
              {msg.sender === "user" ? "You" : "EdgeBot"}
            </p>
            <p>{msg.text}</p>
            {msg.itinerary && (
              <Card className="mt-2">
                <CardContent className="p-4">
                  <p className="font-bold">Location: {msg.itinerary.location}</p>
                  <p>Experience: {msg.itinerary.experience}</p>
                  <p>Hotel: {msg.itinerary.hotel}</p>
                  <div className="mt-2">
                    <img
                      src={msg.itinerary.image}
                      alt="Itinerary Visual"
                      width={400}
                      height={250}
                      className="rounded-xl"
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>

      <div className="flex space-x-2 max-w-2xl mx-auto">
        <Input
          className="flex-1"
          placeholder="Ask for an itinerary..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  );
}
