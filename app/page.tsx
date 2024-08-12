import { PageHeader, Heading } from "@/components/page-header";

export default function Home() {
  return (
    <main className='col-span-1 col-start-3'>
      <PageHeader>
        <Heading>{`{homepage}`}</Heading>
      </PageHeader>
    </main>
  );
}
