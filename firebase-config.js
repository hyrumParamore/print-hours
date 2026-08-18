// Firebase web config for Print Hours.
// These values are public identifiers, not secrets — access is controlled by
// firestore.rules (each signed-in user can only touch users/{their uid}/...).
// Get them from: Firebase Console -> Project settings -> Your apps -> Web app -> SDK setup (Config).
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
