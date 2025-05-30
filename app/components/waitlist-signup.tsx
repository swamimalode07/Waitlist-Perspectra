"use client";

import { useState, useEffect } from 'react';

import { WaitlistForm } from "./waitlist-form";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { supabase } from '@/lib/supabaseClient';

function WaitlistCounter() {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        console.log('[Debug] Fetching waitlist count from Supabase...');
        
        const { count, error } = await supabase
          .from('waitlist') // Make sure this matches your table name exactly
          .select('*', { count: 'exact', head: true });

        console.log('[Debug] Supabase response:', { count, error });

        if (error) {
          throw error;
        }
        
        setUserCount(count);
        setError(null);
      } catch (err) {
        console.error('[Error] Failed to fetch waitlist count:', err);
        setError('Failed to load waitlist count');
        setUserCount(null);
      }
    };

    fetchCount();

    const subscription = supabase
      .channel('realtime-waitlist')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'waitlist', // Must match your table name
        },
        () => {
          console.log('[Debug] Waitlist change detected, refreshing count...');
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      console.log('[Debug] Cleaning up Supabase subscription');
      supabase.removeChannel(subscription);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <p className="text-foreground font-semibold">
        {userCount !== null ? `${userCount.toLocaleString()}+ people already joined` : 'Loading waitlist...'}
      </p>
      {error && (
        <p className="text-red-500 text-xs mt-1 max-w-xs text-center">
          Note: {error} - Check console for details
        </p>
      )}
    </div>
  );
}

export function WaitlistSignup() {
  return (
    <div className="w-full max-w-8xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <img
          src="/image.png"
          alt="Hero"
          className="mb-6 w-28 h-28 object-contain"
        />
        <h1 className="text-6xl sm:text-5xl font-normal mb-4 text-[40px] sm:text-4xl md:text-5xl lg:text-7xl dark:text-white text-center leading-tight">
          Unlock Perspectives with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A51AE5] to-[#fff] animate-gradient">
            Perspectra
          </span>
        </h1>
        <div>
          <p className="mb-4 text-gray-400 text-center text-[13px] sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-2">
            Get diverse insights, explore different angles, and make smarter decisions with collective AI thinking.
          </p>
        </div>
        <div className="w-full">
          <WaitlistForm />
        </div>
        <div>
          <div className="flex items-center justify-center mt-8">
            <div className="flex -space-x-3 mr-4">
              <Avatar className="size-10">
                <AvatarImage src="/pfp/image.png" />
              </Avatar>
              <Avatar className="size-10">
                <AvatarImage src="/pfp/one.png" />
              </Avatar>
              <Avatar className="size-10">
                <AvatarImage src="/pfp/ani.png" />
              </Avatar>
              <Avatar className="size-10">
                <AvatarImage src="/pfp/nizzy.png" />
              </Avatar>
            </div>
            <WaitlistCounter />
          </div>
        </div>
      </div>
     
    </div>
  );
}