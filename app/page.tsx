import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 w-full min-h-screen max-w-4xl px-2 m-auto items-center justify-center font-montserrat text-darkGrey">
      <Hero />
    </main>
  );
}
