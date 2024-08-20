'use server'

import { adminDb } from "@/lib/firebase-admin"
import { auth } from "@clerk/nextjs/server"

export async function createNewDocument() {
  // protect this route
  auth().protect()

  const { sessionClaims } = await auth()

  console.log('====> sessionClaims:', sessionClaims)

  // create new document
  const docCollectionRef = adminDb.collection("documents")
  const newDocRef = await docCollectionRef.add({
    title: "Untitled Document",
  })

  await adminDb.collection('users').doc(sessionClaims?.email!).collection('rooms').doc(newDocRef.id).set({
    userId: sessionClaims?.email,
    role: 'owner',
    createdAt: new Date(),
    roomId: newDocRef.id
  }, { merge: true })

  return { docId: newDocRef.id }
}
