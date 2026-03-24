// firebase-config.js
// ⚠️ REPLACE THESE VALUES with your actual Firebase project config
// Go to: Firebase Console → Project Settings → Your apps → Config

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBVfEKf_KOC0tzSmr8SNyiE2mA-hC-ITuA",
  authDomain: "yuki-319cc.firebaseapp.com",
  projectId: "yuki-319cc",
  storageBucket: "yuki-319cc.firebasestorage.app",
  messagingSenderId: "659472078386",
  appId: "1:659472078386:web:e8ec7d8c4aa7f3e9820e2b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

