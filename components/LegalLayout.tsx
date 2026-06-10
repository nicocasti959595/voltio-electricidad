import Link from "next/link";
import { site } from "@/lib/site";
import { SnowLogo, IconArrow } from "./Icons";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-line bg-night/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto max-w-3xl px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid place-items-center h-9 w-9 rounded-lg bg-gradient-to-br from-ice-bright to-ice-deep text-ink">
              <SnowLogo className="h-5 w-5" />
            </span>
            <span className="font-display font-extrabold text-white">{site.name}</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-mist hover:text-white transition"
          >
            <IconArrow className="h-4 w-4 rotate-180" /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-white">{title}</h1>
          <p className="mt-2 text-sm text-mist">Última actualización: {updated}</p>
          <div className="mt-10 space-y-6 text-mist leading-relaxed [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-8 [&_a]:text-ice [&_a]:underline [&_a]:underline-offset-2">
            {children}
          </div>
        </div>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-mist">
        © {new Date().getFullYear()} {site.brandFull} ·{" "}
        <a href="https://ideawebx.com" rel="dofollow" className="text-ice underline underline-offset-2">
          IdeaWebX
        </a>
      </footer>
    </div>
  );
}
