"use client";
import React, { useEffect, useTransition } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { useOwner } from "@/lib/useOwner";

export function Document({ id }: { id: string }) {
  const [data, loading, error ] = useDocumentData(doc(db, "documents", id));

  const [input, setInput] = React.useState<string>("");
  const [isUpdating, startTransition] = useTransition();

  const isOwner = useOwner()

  useEffect(() => {
    if (data) {
      setInput(data.title);
    }
  }, [data])

  const updateTitle = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      startTransition(async () => {
      // update title
        await updateDoc(doc(db, "documents", id), {
          title: input?.trim(),
        })
    });
  }
  }


  return (
    <div>
      <div className="flex mx-auto justify-between pb5 max-w-6xl">
        <form onSubmit={updateTitle} className="flex flex-1 space-x-2">
          {/* update title */}
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <Button type='submit' disabled={isUpdating}>{isUpdating ? 'Updating' : 'Update'}</Button>

          {/* if is owner invite user and delete document */}
        </form>
      </div>
      <div>
        {/* Managed users */}
        {/* Avatars */}
      </div>
      <div>{/* Collaborative edtior */}</div>
    </div>
  );
}
