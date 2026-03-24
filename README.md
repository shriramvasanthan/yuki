# Yuki Website — Firebase Setup Guide

## 📋 Files in this project

```
index.html       - Home page
products.html    - All products with category filter
product.html     - Individual product detail page
cart.html        - Shopping cart
checkout.html    - Checkout with QR payment
orders.html      - Customer order history
login.html       - Login page
signup.html      - Create account page
about.html       - About page
admin.html       - Admin panel (access via /admin.html)
style.css        - All styles
firebase-config.js  - Firebase configuration
auth.js          - Shared auth utilities
cart-utils.js    - Cart localStorage utilities
products-data.js - Product catalogue data
home.js          - Home page scripts
```

---

## 🔥 Firebase Setup (Step by Step)

### 1. Create Firebase Project
1. Go to [console.firebase.google.com](https://console.firebase.google.com)
2. Click "Add Project" → Name it "yuki-store" → Continue
3. Disable Google Analytics (optional) → Create Project

### 2. Enable Authentication
1. In Firebase console → Authentication → Get Started
2. Enable **Email/Password** provider
3. Enable **Google** provider
   - Set Support email → Save

### 3. Enable Firestore Database
1. Firestore Database → Create Database
2. Select **Production mode** → Start
3. Choose your region → Done

### 4. Enable Storage
1. Storage → Get Started
2. Start in production mode → Done

### 5. Get Your Config
1. Project Settings (gear icon) → General tab
2. Scroll to "Your apps" → Click `</>` (Web)
3. Register app name "yuki-web" → Register
4. Copy the firebaseConfig object

### 6. Update firebase-config.js
Replace the placeholder values in `firebase-config.js`:
```js
const firebaseConfig = {
  apiKey: "AIza...",           // ← Your actual key
  authDomain: "yuki-xxx.firebaseapp.com",
  projectId: "yuki-xxx",
  storageBucket: "yuki-xxx.appspot.com",
  messagingSenderId: "123...",
  appId: "1:123..."
};
```

---

## 🔒 Firestore Security Rules

In Firebase Console → Firestore → Rules, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can read/write only their own user doc
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Orders: users can create and read their own orders
    match /orders/{orderId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null &&
        (resource.data.userId == request.auth.uid || isAdmin());
      allow update: if isAdmin();
    }

    // Settings (QR code): only admins can write
    match /settings/{doc} {
      allow read: if true;
      allow write: if isAdmin();
    }

    function isAdmin() {
      return request.auth != null &&
        request.auth.token.email in [
          'admin@yuki.com',
          'yukiadmin@gmail.com'
        ];
    }
  }
}
```

---

## 🗄️ Storage Rules

In Firebase Console → Storage → Rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /settings/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

---

## 👤 Create Admin Account

1. Go to Firebase Console → Authentication
2. Add User → Enter `admin@yuki.com` + a strong password
3. In `admin.html`, update the `ADMIN_EMAILS` array:
   ```js
   const ADMIN_EMAILS = ["admin@yuki.com", "your-email@domain.com"];
   ```

---

## 💳 Setting Up QR Payment

1. Log in to `/admin.html` with admin credentials
2. Go to **Payment QR** section
3. Upload your UPI QR code image
4. The QR will automatically appear on the checkout page

---

## 🌐 Deploying

### Option 1: Firebase Hosting (Free)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Set public dir to current folder
firebase deploy
```

### Option 2: Netlify / Vercel
- Drag and drop all files to netlify.com/drop
- Your site will be live instantly

### Option 3: Any Web Host
- Upload all files via FTP to your hosting provider

---

## ⚙️ Customization

### Change Products
Edit `products-data.js` to add/remove/modify products.

### Change Admin Email
Update `ADMIN_EMAILS` array in `admin.html`.

### Change Shipping Price
In `cart.html` and `checkout.html`, find `const shipping = subtotal >= 999 ? 0 : 99;`
- Change `999` to your free-shipping threshold (orders at or above this get free shipping)
- Change `99` to your flat shipping charge in rupees

---

## 🗃️ Required Firestore Index

The orders page queries orders by `userId` + sorted by `createdAt`. Firestore requires a **composite index** for this. When you first open the orders page you will see a console error with a direct link to create it — just click that link. Or create it manually:

1. Firebase Console → Firestore → Indexes → Composite → Add index
2. Collection: `orders`
3. Fields: `userId` (Ascending) + `createdAt` (Descending)
4. Query scope: Collection → Save

---

## 🗂️ Firestore Collections Structure

```
orders/
  {orderId}/
    userId, userEmail, customerName, phone
    address: { line1, line2, city, state, pincode, country }
    items: [{ id, name, price, qty, sub }]
    subtotal, shipping, total
    utr (payment transaction ID)
    status: pending | confirmed | shipped | delivered | cancelled
    createdAt

users/
  {userId}/
    uid, name, email, role, createdAt

settings/
  payment/
    qrUrl (Storage download URL)
    updatedAt
```
