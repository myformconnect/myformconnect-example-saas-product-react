# Avorio — Desktop Utility App Website

A fast, lightweight, and modern website for **Avorio**, a fictional desktop utility application designed to organize shortcuts, workflows, search, and repetitive tasks. Built with React, Vite, and Tailwind CSS, and pre-wired with working forms powered by [MyFormCapture](https://myformcapture.com) / [MyFormConnect](https://myformconnect.com).

## Running Locally

1. **Clone & install dependencies**
   ```bash
   git clone https://github.com/myformconnect/myformconnect-example-saas-product-react.git
   cd myformconnect-example-saas-product-react
   npm install
   ```

2. **Set up your environment**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   *(Windows: `copy .env.example .env`)*

   The `.env` file comes pre-filled with working demo form URLs (`https://myformcapture.com/f/7db4d175-ba9c-4fd7-974b-3c9e4601247e`), so forms work out of the box. You can swap in your own form URLs (`MFC_CONTACT_FORM_URL`, `MFC_NEWSLETTER_FORM_URL`, `MFC_KEEP_INFORMED_FORM_URL`, etc.) from your MyFormCapture dashboard whenever you're ready.

3. **Start the app**
   ```bash
   npm run dev
   ```
   Visit **http://localhost:5173** to see it live.

## Built With

- **React 19** & **Vite**
- **Tailwind CSS v4**
- **React Router**
- **Lucide Icons**
- **MyFormCapture** (form submission infrastructure)
