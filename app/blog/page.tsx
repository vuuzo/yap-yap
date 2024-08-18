import { posts } from "#site/content";
import { Heading, PageHeader } from "@/components/page-header";
import PostItem from "@/components/post-item";
import { PostsPagination } from "@/components/posts-pagination";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 10;

export default function Blog({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const currentPage = Number(searchParams.page) || 1;
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );
  return (
    <main className='flex flex-col'>
      <PageHeader>
        <Heading>Blog posts</Heading>
      </PageHeader>
      <ul>
        {displayPosts.map((post) => (
          <li key={post.slugAsParams} className='mb-2'>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
      <PostsPagination
        className='mt-auto pt-10'
        pages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}
