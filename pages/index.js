import dynamic from "next/dynamic";
import { Header } from "../components/Header";


// This is the page that will be rendered at the root of your site.
export default function Home() {
  return (
    <main>
      <Header />
      <a href="/api/auth/login">Login</a>
    </main>
  );
}
