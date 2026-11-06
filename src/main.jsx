import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.jsx";

// <Analytics /> reports page views to Vercel Web Analytics. The numbers only
// show up in the Vercel dashboard, nothing is rendered on the site itself.
createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Analytics />
  </>
);
