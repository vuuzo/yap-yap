export default function Prose({ children }: { children: React.ReactNode }) {
  return (
    <article className='prose prose-zinc dark:prose-invert prose-a:decoration-violet-300 prose-a:underline-offset-2 hover:prose-a:decoration-2'>
      {children}
    </article>
  );
}
