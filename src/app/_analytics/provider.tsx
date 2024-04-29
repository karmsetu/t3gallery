// app/providers.js
"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

if (typeof window !== "undefined") {
  if (process.env.NEXT_PUBLIC_POSTHOG_KEY)
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    });
}
export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
  return (
    <PostHogProvider client={posthog}>
      <PostHogAuthWrapper>{children}</PostHogAuthWrapper>
    </PostHogProvider>
  );
}

function PostHogAuthWrapper({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const userInfo = useUser();
  useEffect(() => {
    if (userInfo.user) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
      });
    } else if (!auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth]);
  return children;
  // return (
  //   <PostHogProvider client={posthog}>
  //     <div className="flex h-full w-full items-center justify-center ">
  //       {children}
  //     </div>
  //   </PostHogProvider>
  // );
}
