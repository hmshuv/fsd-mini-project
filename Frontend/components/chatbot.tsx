"use client"

import * as React from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [messages, setMessages] = React.useState([{ role: "bot", content: "Hello! How can I help you today?" }])
  const [input, setInput] = React.useState("")

  const handleSend = () => {
    if (!input.trim()) return

    setMessages([...messages, { role: "user", content: input }])
    setInput("")

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Thank you for your message. Our support team will assist you shortly.",
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg medical-gradient hover:shadow-xl transition-all z-50"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <div className="medical-gradient p-4 rounded-t-lg">
            <h3 className="font-semibold text-white">AI Medical Assistant</h3>
            <p className="text-sm text-white/80">We're here to help</p>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.role === "user" ? "bg-primary text-white" : "bg-muted text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button onClick={handleSend} size="icon" className="medical-gradient">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      )}
    </>
  )
}
