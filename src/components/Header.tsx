"use client";

import {
  useUser,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Header() {
  const { user } = useUser();
  return (
    <>
      <div className="flex items-center justify-between p-5">
        {user && (
          <h1 className="text-2xl">
            {user?.firstName}
            {`'`}s Space
          </h1>
        )}
        {/* Breadcrumbs */}

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </>
  );
}
