import { posts } from "#site/content";
import { PageHeader, Heading, Subheading } from "@/components/page-header";
import PostItem from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

export default function Home() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts.slice(0, 4);
  return (
    <main>
      <PageHeader className='mb-20 flex-col items-start gap-5'>
        <Heading>Yap Yap</Heading>
        <Subheading>
          Hey You! This is a good place to introduce yourself.
        </Subheading>
      </PageHeader>
      <section>
        <h2 className='mb-5'>Latest posts</h2>
        <ul>
          {displayPosts.map((post) => (
            <li key={post.slugAsParams} className='mb-2'>
              <PostItem post={post} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
