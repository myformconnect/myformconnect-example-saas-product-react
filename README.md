# Vantage — SaaS Product Demo

A clean, responsive B2B SaaS website built with React and Tailwind CSS. It comes pre-wired with working forms powered by [MyFormCapture](https://myformcapture.com).

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

   The `.env` file comes pre-filled with a working demo form ID, so forms work right away. You can swap in your own form ID from your MyFormCapture dashboard whenever you're ready.

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
- **MyFormCapture** (form handling)
