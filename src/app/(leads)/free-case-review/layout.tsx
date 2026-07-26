import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function LeadLandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="border-b border-white/10 bg-royal text-white">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 md:h-[72px] md:px-8">
          <div className="flex flex-col leading-none">
            <span className="font-headline text-[15px] font-semibold tracking-[0.08em] uppercase">
              Ageitos
            </span>
            <span className="mt-0.5 font-headline text-[11px] font-light tracking-[0.28em] text-seafoam uppercase">
              Advertising
            </span>
          </div>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="font-headline text-sm text-seafoam transition-colors hover:text-white md:text-base"
          >
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-hairline bg-surface py-6 text-sm text-muted">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. This is an advertising
            service connecting accident victims with attorneys.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ink">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
