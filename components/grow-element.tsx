export default function GrowElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='min-h-7 bg-red-500/10 lg:-mx-40'>{children}</div>;
}
