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
   <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4 mb-8 mt-4 mx-auto">
 <div className="flex overflow-hidden rounded-xl bg-gradient-to-t from-gray-900/80 to-gray-500 p-1 sm:p-2 ring-1 ring-black/10 dark:ring-white/20 focus-within:ring-2 focus-within:ring-blue-500">
    <Input
      id="email"
      name="email"
      type="email"
      placeholder="Enter your email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      aria-describedby="email-error"
      className="w-full border-0 !bg-white text-black px-3 sm:px-4 py-4 sm:py-6 placeholder:text-gray-500 focus:ring-0 focus:outline-none text-sm sm:text-base"
    />
    <Button 
      type="submit" 
      disabled={isPending}
      className="ml-2 bg-[#212121] text-white rounded-[18px] relative overflow-hidden hover:bg-black/90 transition-all duration-200 
                before:content-[''] before:absolute before:inset-1 before:rounded-[14px] before:border-2 before:border-white/50 
                before:pointer-events-none before:transition-all before:duration-200 hover:before:border-white/80 
                flex items-center justify-center h-10 sm:h-12 min-h-10 sm:min-h-12 w-[120px] sm:w-[140px] min-w-[120px] sm:min-w-[140px] text-sm 
                disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
      ) : (
        "Get Notified"
      )}
    </Button>
</div>
</form>
  );
}