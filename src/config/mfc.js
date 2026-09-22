/**
 * MyFormCapture (MFC) Setup
 *
 * This file connects all forms on the website to MyFormCapture.
 * It first checks your .env file for your custom form ID (VITE_MFC_FORM_UUID).
 * If none is found, it uses your default form ID so forms keep working seamlessly.
 */
export const MFC_FORM_UUID =
  import.meta.env.VITE_MFC_FORM_UUID ||
  import.meta.env.VITE_FORM_UUID ||
  '7db4d175-ba9c-4fd7-974b-3c9e4601247e';

// The full URL where all forms post their submission data
export const MFC_ENDPOINT = `https://myformcapture.com/f/${MFC_FORM_UUID}`;
