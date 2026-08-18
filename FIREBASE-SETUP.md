# Firebase setup (one time, ~5 minutes)

Do this signed in to Google as **hyrumparamore@gmail.com**.

1. https://console.firebase.google.com → **Add project** → name it `print-hours` → Analytics off → Create.
2. **Build → Authentication → Get started → Sign-in method → Google → Enable** (pick a support email) → Save.
   Then **Authentication → Settings → Authorized domains → Add domain** → `hyrumparamore.github.io`.
3. **Build → Firestore Database → Create database** → production mode → pick a US region → Enable.
   Then **Rules** tab → replace with the contents of `firestore.rules` → **Publish**.
4. **Project settings (gear) → General → Your apps → Web (`</>`)** → nickname `print-hours` (no hosting) → Register.
   Copy the `firebaseConfig` object it shows into `firebase-config.js`, replacing the PASTE_ placeholders.
5. Commit + push. Open https://hyrumparamore.github.io/print-hours/ → Sign in with Google.
   If this browser had local-only data, it will offer to upload it.
