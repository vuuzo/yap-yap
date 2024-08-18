import { cn } from "@/lib/utils";

export function PageHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("min-h-36 py-10", className)}>{children}</header>
  );
}

export function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h1 className='text-3xl text-zinc-900 dark:text-zinc-100 font-medium mb-2'>
      {children}
    </h1>
  );
}

export function Subheading({ children }: { children: React.ReactNode }) {
  return <h3 className='text-zinc-700 dark:text-zinc-300'>{children}</h3>;
}
