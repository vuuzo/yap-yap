import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { Heading, PageHeader, Subheading } from "@/components/page-header";
import { Metadata } from "next";
import { notFound } from "next/navigation";

function getPostFromSlug(s: string[]) {
  const slug = s.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> {
  const post = getPostFromSlug(params.slug);
  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.tags,
  };
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default function PostPage({ params }: { params: { slug: string[] } }) {
  const post = getPostFromSlug(params.slug);
  if (!post || !post.published) notFound();

  return (
    <main>
      <PageHeader className='items-start'>
        <Heading>{post.title}</Heading>
        {post.description && <Subheading>{post.description}</Subheading>}
      </PageHeader>
      <article className='prose prose-zinc dark:prose-invert'>
        <MDXContent code={post.content} />
      </article>
    </main>
  );
}
