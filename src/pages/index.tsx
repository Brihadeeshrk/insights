import Auth from "@/components/Auth";
import Hero from "@/components/Hero";
import { auth } from "@/lib/firebase.config";
import Head from "next/head";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const [user] = useAuthState(auth);

  console.log(user);

  if (!user) {
    return <Auth />;
  }

  return (
    <>
      <Head>
        <title>insights</title>
        <meta name="description" content="insights by brihadeesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon-512x512.png" />
      </Head>
      <main className="h-[100vh] w-[100vw]">
        <Hero />
      </main>
    </>
  );
}
