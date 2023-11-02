import { Navbar } from "@/components/navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
