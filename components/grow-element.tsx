export default function GrowElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='min-h-7 lg:-mx-40'>{children}</div>;
}
