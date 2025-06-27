'use client';

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button"; 

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "sent" : "error");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 dark:bg-gray-800">
      <Input
      className="dark:bg-gray-900 dark:border-gray-100"
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <Input
       className="dark:bg-gray-900 dark:border-gray-100"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <Textarea
       className="dark:bg-gray-900 dark:border-gray-100"
        name="message"
        placeholder="Type your message here."
        value={form.message}
        onChange={handleChange}
        required
      />

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </Button>

      {status === "sent" && <p className="text-green-500">Message sent!</p>}
      {status === "error" && <p className="text-red-500">Something went wrong.</p>}
    </form>
  );
}