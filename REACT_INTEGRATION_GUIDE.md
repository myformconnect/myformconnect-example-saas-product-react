# React Form Integration Guide — MyFormConnect (MFC)

> A complete, beginner-friendly guide to adding working forms to any React application/website in under 10 minutes. No backend, no server routes, and no email services required.

---

## Overview

[MyFormConnect](https://myformconnect.io) lets you collect form submissions directly from your React application/website without setting up a backend, managing a database, or configuring email services. You simply create a form in your dashboard, copy your unique Form Action URL, and paste it into your component — MyFormConnect takes care of submission routing, spam filtering, and honeypot protection automatically.

When a user submits:
1. The submission is captured instantly, with built-in spam and honeypot checks filtering out automated bots.
2. Responses are saved securely in your dashboard, and an email notification is sent to you immediately.
3. Your React page displays a smooth, inline confirmation message without reloading or redirecting away.

---

## Prerequisites

Before starting, make sure you have:
- A **MyFormConnect account** — [Sign up here (Free)](https://myformconnect.io/users/sign_up)
- A form created in your [MyFormConnect Dashboard](https://myformconnect.io/account/)
- Your unique **FORM ACTION URL** (e.g. `https://myformconnect.io/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e`)
- Any existing React project (Vite, Next.js, Create React App, etc.)

---

## 3-Step Quick Start

### Step 1: Copy Your Form URL from MyFormConnect

1. Log in to your **[MyFormConnect Dashboard](https://myformconnect.io/account/)**.
2. Click on **Forms** in the top menu bar.
3. Click **Add New Form** (or click on an existing form to edit).
4. Copy the **FORM_ACTION_URL** provided for your form. It looks like this:
   ```text
   https://myformconnect.io/f/YOUR_FORM_UUID
   ```
   *(Example: `https://myformconnect.io/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e`)*

---

### Step 2: Create Your React Form Component

Create a new file in your project, for example `src/components/ContactForm.jsx`.

Paste the following code, and simply replace `YOUR_FORM_ACTION_URL` with the URL you copied in Step 1:

```jsx
import React, { useState } from 'react';

// 1. Paste your MyFormConnect FORM_ACTION_URL here:
const CONTACT_FORM_ACTION_URL = 'https://myformconnect.io/f/YOUR_FORM_UUID';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(CONTACT_FORM_ACTION_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(form),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      // Success! Show confirmation and reset the form fields
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage('Unable to submit your message. Please try again.');
    }
  };

  // Reusable input styles — customize as needed to match your product design (boxSizing prevents overflow)
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '14px',
    fontFamily: 'inherit',
  };

  // Inline Success Screen
  if (status === 'success') {
    return (
      <div style={{ textAlign: 'center', padding: '24px', background: '#f0fdf4', borderRadius: '8px', color: '#166534' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Thank You!</h3>
        <p style={{ margin: 0 }}>Your message has been sent successfully. We will get back to you soon.</p>
        <button 
          type="button" 
          onClick={() => setStatus('idle')}
          style={{ marginTop: '16px', padding: '8px 16px', cursor: 'pointer', borderRadius: '6px', border: '1px solid #bbf7d0', background: '#ffffff' }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxWidth: '480px', width: '100%', boxSizing: 'border-box' }}>
      {status === 'error' && (
        <div style={{ color: '#b91c1c', background: '#fef2f2', padding: '10px 12px', borderRadius: '6px', fontSize: '13px' }}>
          {errorMessage}
        </div>
      )}

      <div>
        <label htmlFor="name" style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Jane Doe"
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email" style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>
          Email Address *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message" style={{ display: 'block', fontWeight: 600, fontSize: '13px', marginBottom: '6px' }}>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="How can we help you?"
          required
          style={{ ...inputStyle, resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          padding: '12px',
          background: '#2D5DEA',
          color: '#ffffff',
          fontWeight: 600,
          fontSize: '14px',
          border: 'none',
          borderRadius: '6px',
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          opacity: status === 'submitting' ? 0.7 : 1,
        }}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      <p style={{ fontSize: '11px', color: '#64748b', textAlign: 'center', margin: '4px 0 0 0' }}>
        Powered by{' '}
        <a 
          href="https://myformconnect.io" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#2D5DEA', fontWeight: 600, textDecoration: 'none' }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          MFC
        </a>
      </p>
    </form>
  );
}
```

---

### Step 3: Run & Verify

1. Import your `ContactForm` into any page (e.g. `App.jsx`, `ContactPage.jsx`):
   ```jsx
   import ContactForm from './components/ContactForm';

   export default function App() {
     return (
       <div style={{ padding: '40px' }}>
         <h1>Contact Us</h1>
         <ContactForm />
       </div>
     );
   }
   ```
2. Start your development server:
   ```bash
   npm run dev
   ```
3. Fill out the form in your browser and click **Send Message**.
4. Open your **MyFormConnect Dashboard** under **Responses / Leads** — your new submission will be right there in real time!

---

## Ready-to-Use Form Examples

### 1. Career / Job Application Form (with File & Resume Upload)

MyFormConnect natively handles file uploads up to ~100MB across common document formats (PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, CSV) out of the box — no backend code, file hosting, or extra setup required.

Simply use an `<input type="file" name="resume" />`, and `new FormData(form)` handles the rest:

```jsx
import React, { useState } from 'react';

// Replace with your actual FORM ACTION URL from dashboard
const CAREERS_FORM_ACTION_URL = 'https://myformconnect.io/f/YOUR_FORM_UUID';

export default function CareerForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch(CAREERS_FORM_ACTION_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
        },
        body: new FormData(e.currentTarget),
      });

      if (!res.ok) throw new Error('Submission error');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p>Application submitted! Our hiring team will review your profile.</p>;
  }

  // Reusable input styles — customize as needed to match your product design (boxSizing prevents overflow)
  const inputStyle = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '9px 12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '13px',
    fontFamily: 'inherit',
    marginBottom: '12px',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '480px', width: '100%', boxSizing: 'border-box' }}>
      {/* 1. Position Selection Dropdown */}
      <label htmlFor="position" style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>
        Position Applied For *
      </label>
      <select id="position" name="position" required style={inputStyle}>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Full Stack Engineer">Full Stack Engineer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="General Application">General Application</option>
      </select>

      {/* 2. Applicant Details */}
      <label htmlFor="name" style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>
        Full Name *
      </label>
      <input id="name" name="name" type="text" required style={inputStyle} />

      <label htmlFor="email" style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>
        Email Address *
      </label>
      <input id="email" name="email" type="email" required style={inputStyle} />

      <label htmlFor="portfolio" style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>
        Portfolio / GitHub / LinkedIn
      </label>
      <input id="portfolio" name="portfolio" type="url" placeholder="https://..." style={inputStyle} />

      {/* 3. Resume File Upload */}
      <label htmlFor="resume" style={{ fontWeight: 600, fontSize: '13px', marginBottom: '4px' }}>
        Resume / CV (PDF or DOCX) *
      </label>
      <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required style={inputStyle} />

      <button
        type="submit"
        disabled={status === 'submitting'}
        style={{
          padding: '12px',
          background: '#2D5DEA',
          color: '#ffffff',
          fontWeight: 600,
          border: 'none',
          borderRadius: '6px',
          cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
          fontSize: '14px',
        }}
      >
        {status === 'submitting' ? 'Uploading…' : 'Submit Application'}
      </button>

      <p style={{ fontSize: '11px', color: '#64748b', textAlign: 'center', marginTop: '8px' }}>
        Powered by{' '}
        <a
          href="https://myformconnect.io"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#2D5DEA', fontWeight: 600, textDecoration: 'none' }}
          onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
          onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
        >
          MFC
        </a>
      </p>
    </form>
  );
}
```

---

### 2. Quick Newsletter / Email Subscription Form

Perfect for a footer or landing page lead magnet:

```jsx
import React, { useState } from 'react';

const NEWSLETTER_FORM_ACTION_URL = 'https://myformconnect.io/f/YOUR_FORM_UUID';

export default function NewsletterForm() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch(NEWSLETTER_FORM_ACTION_URL, {
        method: 'POST',
        headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p style={{ color: '#16a34a', fontSize: '13px' }}>✓ Subscribed successfully!</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px', maxWidth: '400px', width: '100%', boxSizing: 'border-box' }}>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
        style={{
          flex: 1,
          boxSizing: 'border-box',
          padding: '9px 12px',
          borderRadius: '6px',
          border: '1px solid #cbd5e1',
          fontSize: '13px',
        }}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        style={{
          padding: '9px 16px',
          background: '#2D5DEA',
          color: '#ffffff',
          fontWeight: 600,
          border: 'none',
          borderRadius: '6px',
          cursor: status === 'loading' ? 'not-allowed' : 'pointer',
          fontSize: '13px',
          whiteSpace: 'nowrap',
        }}
      >
        {status === 'loading' ? 'Joining…' : 'Subscribe'}
      </button>
    </form>
  );
}
```

---

## 3 Golden Rules for Beginners

### 1. Always give each `<input>` a `name` attribute
MyFormConnect uses the `name` attribute of each input as the field label in your dashboard.
```jsx
// CORRECT: MyFormConnect will record this as "email"
<input name="email" type="email" />

// INCORRECT: Missing name attribute; field data will be lost
<input type="email" />
```

### 2. Do NOT set a `Content-Type` header
When sending `FormData`, the browser automatically computes and attaches the correct `multipart/form-data; boundary=...` header.
```javascript
// CORRECT
headers: {
  Accept: 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
}

// DO NOT DO THIS
headers: {
  'Content-Type': 'multipart/form-data', // BREAKS form submission!
}
```

### 3. Do NOT use `JSON.stringify()`
Always pass the raw `new FormData(form)` directly into the `body`:
```javascript
// CORRECT
body: new FormData(form)

// DO NOT DO THIS
body: JSON.stringify(formData)
```

---

## Troubleshooting & Common Questions

### Common Network Tab Status Codes (Press F12 → Network)

When testing your form, open your browser's Developer Tools (**F12** or right-click → **Inspect**), switch to the **Network** tab, click your form's submit button, and inspect the status code of the `POST` request to `myformconnect.io`:

| Status Code | Meaning | Immediate Fix |
| :--- | :--- | :--- |
| **`403 Forbidden`** | Domain not authorized | Add your local URL (`http://localhost:3000` or `http://localhost:5173`) or live domain to allowed domains in MFC dashboard, or disable domain restriction. |
| **`404 Not Found`** | Invalid Form Action URL | Make sure your `FORM_ENDPOINT` URL is correct and contains your real UUID from the dashboard. |
| **`422 Unprocessable`** | Invalid Payload Format | Do NOT use `JSON.stringify()`. Send raw `new FormData(e.currentTarget)` instead. |
| **`302 Found` / CORS error** | Missing AJAX Headers | Add `Accept: 'application/json'` and `'X-Requested-With': 'XMLHttpRequest'` to request headers. |

---

#### 1. `403 Forbidden`
- **Why this happens:** MyFormConnect has **Domain Restriction** enabled to prevent unauthorized sites from spamming your endpoint, and your current domain (or local development port like `http://localhost:5173` / `http://localhost:3000`) is not on the whitelist yet.
- **How to fix:**
  1. Open your form in the **[MyFormConnect Dashboard](https://myformconnect.io/account/)**.
  2. Go to **Form Settings** → **Domain Restrictions / Allowed Domains**.
  3. Either:
     - Add your local development URL (e.g. `http://localhost:5173` or `http://localhost:3000`) and your production domain.
     - Or temporarily turn **Restrict Domain** toggle **OFF** while developing locally.

---

#### 2. `404 Not Found`
- **Why this happens:** The URL provided in your `fetch()` call does not exist on MyFormConnect's servers.
- **How to fix:**
  - Verify that your `FORM_ENDPOINT` constant is copied accurately from your dashboard.
  - Correct format: `https://myformconnect.io/f/YOUR_FORM_UUID` (e.g. `https://myformconnect.io/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e`).
  - Watch out for accidental spaces before/after the URL or leaving the placeholder string `YOUR_FORM_UUID`.

---

#### 3. `422 Unprocessable Entity / Assets`
- **Why this happens:** The server received the request, but cannot parse the data because it was submitted in an unexpected format (such as a stringified JSON object).
- **How to fix:**
  - MyFormConnect expects native multipart form data. Never send form data using `JSON.stringify()`.
  - Always pass `new FormData(e.currentTarget)` directly:
    ```javascript
    // INCORRECT: Causes 422 error
    body: JSON.stringify(formData)

    // CORRECT: Accepted automatically by MFC
    body: new FormData(e.currentTarget)
    ```

---

#### 4. `302 Found / 302 Moved Temporarily` (or CORS Error)
- **Why this happens:** By default, traditional HTML forms perform a full browser redirect (HTTP 302) to a thank-you page after submitting. In a React single-page app, frontend `fetch()` cannot follow cross-origin redirects, causing the browser to throw a **CORS error** or report a failed redirect.
- **How to fix:**
  - Tell MyFormConnect you are sending an AJAX request from React by adding these two headers:
    ```javascript
    headers: {
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
    }
    ```
  - When MyFormConnect sees these headers, it returns a clean JSON `200 OK` response instead of a 302 redirect, preventing any CORS errors.

---

### Other Common Questions & Fixes

#### Q: Form is not submitting after clicking the submit button (Nothing happens or request fails)
If clicking your submit button does nothing or triggers an error, check these points:

1. **Check your Request Headers in `fetch()`**:
   Do **not** add `'Content-Type': 'multipart/form-data'` or `'application/json'`. Setting manual Content-Type headers corrupts the browser's multipart boundary. Your headers must look **exactly** like this:
   ```javascript
   headers: {
     Accept: 'application/json',
     'X-Requested-With': 'XMLHttpRequest',
   }
   ```

2. **Check your Form Action URL (`FORM_ACTION_URL`)**:
   Verify that your form action URL is copied accurately from your MyFormConnect dashboard:
   - It should be in the format: `https://myformconnect.io/f/YOUR_FORM_UUID`
   - Example: `https://myformconnect.io/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e`
   - Ensure there are no accidental spaces, missing `https://`, or placeholder text (`YOUR_FORM_UUID`).

3. **Check the Submit Button**:
   Inside your `<form>`, make sure the submit button has `type="submit"` (or omit `type` since `submit` is the default). If your button has `type="button"`, it will not fire the form's `onSubmit` event:
   ```jsx
   // CORRECT
   <button type="submit">Send Message</button>
   ```

4. **Inspect the Browser Console (F12)**:
   Press **F12** in your browser, switch to the **Console** and **Network** tabs, and submit the form again:
   - Look for red errors in the Console tab.
   - In the Network tab, check the status code of the `POST` request to `myformconnect.io` (e.g. `200 OK` vs `403 Forbidden` / `404 Not Found`).

---

#### Q: Form submitted successfully, but no data appears on MFC dashboard (or empty fields show up)
If your form displays a success message but submissions are not showing up:

1. **Wait a few seconds to 1 minute**:
   Submission processing can take a brief moment. **Wait a few seconds** (up to a minute) and refresh your dashboard page.

2. **If still not appearing — Check the `name` attribute (Most Common!)**:
   The browser's native `new FormData(form)` **only captures inputs that have a `name` attribute**. An `id` or `placeholder` alone is NOT sent:
   ```jsx
   // WRONG: Browser ignores this input; dashboard receives nothing!
   <input id="email" placeholder="jane@example.com" />

   // CORRECT: Dashboard receives { email: "jane@example.com" }
   <input id="email" name="email" placeholder="jane@example.com" />
   ```


---

#### Q: The browser redirects or refreshes the whole page on submit
Make sure `e.preventDefault()` is the very first line of your `handleSubmit` function:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault(); // Prevents page reload/redirect
  // ... rest of submit logic
};
```
Without `e.preventDefault()`, the browser triggers its default HTML form submit behavior and navigates away from your React application.

---

#### Q: How do I receive email alerts when someone fills out my form?
In your [MyFormConnect Dashboard](https://myformconnect.io/account/):
1. Open your form.
2. In **Form Details** section click on **Edit** button.
3. Scroll to the last
4. Check the **Notify on Email** checkbox.
5. Click on **Update Form** button.
6. Now, whenever a visitor submits your form, MyFormConnect sends an instant email alert to your registered email address.

---

## Still Having Issues?

If your form is still not working or you're encountering an error not covered in this guide:

- **Contact Support**: Reach out directly via the **[MyFormConnect Support Center](https://myformconnect.io/support)** or email us at **[support@myformconnect.io](mailto:support@myformconnect.io)**.

> 💡 **Tip for Faster Support:**
> When reaching out, including a **screenshot of the problem**, your `FORM_ACTION_URL`, and any error messages from your browser's **Console** (F12) or **Network** tabs will help diagnose and resolve the issue much faster.

---

## Official Documentation & Links

- **MyFormConnect Dashboard**: [https://myformconnect.io/account/](https://myformconnect.io/account/)
- **Account Sign Up**: [https://myformconnect.io/users/sign_up](https://myformconnect.io/users/sign_up)
- **Documentation**: [https://myformconnect.io/docs/getting-started](https://myformconnect.io/docs/getting-started)