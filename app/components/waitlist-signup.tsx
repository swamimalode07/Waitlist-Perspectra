"use client";

import { XIcon } from "@/components/icons/x-icon";
import { DiscordIcon } from "@/components/icons/discord-icon";
import { FacebookIcon } from "@/components/icons/facebook-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { WaitlistForm } from "./waitlist-form";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { SocialIcon } from "@/components/social-icon";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function WaitlistSignup() {
  return (
    <div className="w-full max-w-xl mx-auto p-8 flex flex-col justify-between min-h-screen">
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        <h1 className="leading-18 text-4xl sm:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
          Join Our Waiting List
        </h1>
        <div>
          <p className="text-lg sm:text-xl mb-8 text-muted-foreground">
            Be part of something truly extraordinary. Join thousands of others
            already gaining early access to our revolutionary new product.
          </p>
        </div>
        <div className="w-full">
          <WaitlistForm />
        </div>
        <div>
          <div className="flex items-center justify-center mt-8">
            <div className="flex -space-x-3 mr-4">
              <Avatar className="size-10">
                <AvatarImage src="https://bundui-images.netlify.app/avatars/01.png" />
              </Avatar>
              <Avatar className="size-10">
                <AvatarImage src="https://bundui-images.netlify.app/avatars/02.png" />
              </Avatar>
              <Avatar className="size-10">
                <AvatarImage src="https://bundui-images.netlify.app/avatars/03.png" />
              </Avatar>
              <Avatar className="size-10">
                <AvatarImage src="https://bundui-images.netlify.app/avatars/04.png" />
              </Avatar>
            </div>
            <p className="text-foreground font-semibold">
              200+ people on the waitlist
            </p>
          </div>
        </div>
      </div>
      <div className="pt-8 flex justify-center space-x-6">
        <SocialIcon
          href="https://x.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (formerly Twitter)"
          icon={<XIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          icon={<InstagramIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
          icon={<DiscordIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          icon={<FacebookIcon className="w-6 h-6" />}
        />
        <SocialIcon
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<LinkedInIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  );
}
