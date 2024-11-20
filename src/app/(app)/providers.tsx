import { SanityLive } from "@/sanity/lib/live";

export function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="w-full grid grid-row-[auto_1fr_auto]">
      <header className="w-full bg-slate-900 h-auto flex items-center justify-start py-[20px] px-[40px] shadow-2xl">
        <h1 className="text-2xl font-normal text-white">Weird Sanity Next</h1>
      </header>
      <section className="w-full h-full flex flex-col items-center justify-start bg-white">
        {children}
      </section>
      <footer className="w-full bg-slate-900 h-auto py-[20px] px-[40px] flex items-center justify-center">
        <h4 className="text-md font-normal text-white">
          Sanity Live Content Lake
        </h4>
      </footer>
      <SanityLive />
    </main>
  );
}
