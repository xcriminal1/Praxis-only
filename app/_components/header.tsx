"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const { user } = useUser();
  const [signinRedirectDelay, setSigninRedirectDelay] = useState(false);
  const router = useRouter();

  const handleRedirectSignin = () => {
    setSigninRedirectDelay(true);
    setTimeout(() => {
      router.push(`/sign-in`);
      setSigninRedirectDelay(false);
    }, 1400);
  };

  // Updated routes: note that the How It Works route now points to /how-it-works.
  const routes = [
    { index: 1, label: "Dashboard", href: "/dashboard" },
    { index: 2, label: "Upgrade", href: "/upgrade" },
    { index: 3, label: "How it Works", href: "/how-it-works" },
  ];

  return (
    <div className="flex z-50 px-10 pt-2 pb-2.5 bg-gray-700/20 shadow-sm backdrop-blur-sm items-center justify-between">
      <Link href="/" className="flex items-center justify-center gap-1">
        {/* Uncomment and adjust logo as needed */}
        {/* <Image src="/logo.png" width={40} height={40} alt="logo" className="mt-2" /> */}
        <h1
          className={cn(
            GeistMono.variable,
            "font-mono text-5xl font-bold pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#2e3779] to-[#000] bg-clip-text text-center leading-none tracking-tighter text-transparent select-none"
          )}
        >
          InterviewAID
        </h1>
      </Link>
      <div className="hidden lg:block">
        <ul className="flex items-center justify-between gap-9 text-md text-gray-500 font-bold cursor-pointer">
          {routes.map((route, index) => {
            const active =
              pathname === route.href || pathname.includes(route.href);
            return (
              <Link
                href={route.href}
                key={index}
                className={cn(
                  "transition-all hover:text-black duration-200",
                  active && "text-black"
                )}
              >
                {route.label}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-6">
        {user ? (
          <>
            <ClerkLoading>
              <Skeleton className="h-9 w-9 bg-gray-700/40 rounded-full" />
            </ClerkLoading>
            <ClerkLoaded>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
              />
            </ClerkLoaded>
          </>
        ) : (
          <>
            <ClerkLoading>
              <Skeleton className="h-9 w-9 bg-gray-700/40 rounded-full" />
            </ClerkLoading>
            <ClerkLoaded>
              <Button
                onClick={handleRedirectSignin}
                isLoading={signinRedirectDelay}
                loadingText="Logging in"
                size={"sm"}
              >
                Log In
              </Button>
            </ClerkLoaded>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
