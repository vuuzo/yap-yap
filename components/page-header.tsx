import { cn } from "@/lib/utils";

export function PageHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex items-center justify-center flex-col min-h-52",
        className
      )}
    >
      {children}
    </header>
  );
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className='text-4xl dark:text-zinc-200 font-bold mb-2'>{children}</h1>
  );
}

export function Subheading({ children }: { children: React.ReactNode }) {
  return <h3 className='text-zinc-600 dark:text-zinc-400'>{children}</h3>;
}
