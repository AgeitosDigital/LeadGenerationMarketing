import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "seafoam" | "outlined" | "navy" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "seafoam",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3.5 font-headline text-base font-medium transition-colors duration-300";

  const styles = {
    seafoam: "bg-seafoam text-royal hover:bg-seafoam-deep",
    outlined:
      "border-[3px] border-current bg-transparent text-inherit hover:bg-white/10",
    navy: "bg-navy text-white hover:bg-navy-light",
    ghost: "bg-transparent text-inherit underline-offset-4 hover:underline",
  }[variant];

  const classes = `${base} ${styles} ${className}`;
  const external = href.startsWith("tel:") || href.startsWith("mailto:");

  if (external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
