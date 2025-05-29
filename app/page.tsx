"use client";

import { Toaster } from "@/components/ui/sonner";
import { WaitlistSignup } from "./components/waitlist-signup";
import { AuroraBackground } from "./components/ui/aurora-background";
import Describe from "@/components/Describe"

export default function Page() {
  return (
    <div>
    <AuroraBackground className="min-h-screen flex items-center justify-center ">
      <div className="content relative z-10 w-full">
        <WaitlistSignup />
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: "rgb(23 23 23)",
            color: "white",
            border: "1px solid rgb(63 63 70)",
          },
          className: "rounded-xl",
          duration: 5000,
        }}
      />
    </AuroraBackground>
    <div className="bg-[#1A0538]">
        <Describe
          description="Perspectra is a collective AI decision engine that empowers users with diverse perspectives and unbiased insights. By aggregating multiple AI viewpoints, it helps you explore all angles before making decisions—whether you're brainstorming, planning, or problem-solving. Join the waitlist to be among the first to shape the future of collective thinking."
        />
      </div>
    </div>
  );
}
