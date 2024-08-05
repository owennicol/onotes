"use client";

import {
  useUser,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Breadcrumbs } from "../breadcrumbs/Breadcrumbs";

export function Header() {
  const { user } = useUser();

  console.log('====> user:', user)
  return (
    <div className="flex items-center justify-between p-5">
      {user && (
        <h1 className="text-2xl">
          <Link href='/'>
            {user?.firstName}
            {`'`}s Space
          </Link>
        </h1>
      )}
      {/* Breadcrumbs */}
      <Breadcrumbs />

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
