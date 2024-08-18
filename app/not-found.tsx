import { Heading, PageHeader, Subheading } from "@/components/page-header";

export default function NotFound() {
  return (
    <main>
      <PageHeader>
        <Heading>{`{not_found}`}</Heading>
        <Subheading>Oh no! This page doesn't exist</Subheading>
      </PageHeader>
    </main>
  );
}
