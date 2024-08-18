export default function GrowElement({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='lg:-mx-40 sm:-mx-10'>{children}</div>;
}
