import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <head>
        <title>Animated Navbar</title>
        <description>
          Building a animated navbar with tailwindcss, framer-motion and nextjs
        </description>
      </head>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
