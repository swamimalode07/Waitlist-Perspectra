"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export function WaitlistForm() {
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsPending(true);

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setIsPending(false);

    if (!response.ok) {
      const data = await response.json();
      toast.error(data.error || "Could not join waitlist.");
    } else {
      toast.success("Thank you for signing up!");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4 mb-8">
      <div className="flex overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-black/10 dark:ring-white/20 focus-within:ring-2 focus-within:ring-blue-500!">
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-describedby="email-error"
          className="w-full border-0 bg-transparent placeholder:text-muted-foreground focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            "Get Notified"
          )}
        </Button>
      </div>
    </form>
  );
}
