import { initializeApp, getApps, App, getApp, cert } from 'firebase-admin/app'
import {getFirestore} from 'firebase-admin/firestore'

const serviceKey = require('@/serviceKey.json')

let adminApp: App

if (getApps().length === 0) {
  adminApp = initializeApp({
    credential: cert(serviceKey),
  })
} else {
  adminApp = getApp()
}

const adminDb = getFirestore(adminApp)

export { adminDb, adminApp }
