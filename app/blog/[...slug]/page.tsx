import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { Heading, PageHeader, Subheading } from "@/components/page-header";
import Prose from "@/components/prose";
import { formatDate } from "@/lib/utils";
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
    <main className='pb-16'>
      <PageHeader className='items-start'>
        <div className='text-zinc-500 mb-4'>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </div>
        <Heading>{post.title}</Heading>
        {post.description && <Subheading>{post.description}</Subheading>}
      </PageHeader>
      <Prose>
        <MDXContent code={post.content} />
      </Prose>
    </main>
  );
}
