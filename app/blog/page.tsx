import { posts } from "#site/content";
import { Heading, PageHeader } from "@/components/page-header";
import PostItem from "@/components/post-item";
import { PostsPagination } from "@/components/posts-pagination";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 4;

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
    <main>
      <PageHeader>
        <Heading>{`{blog}`}</Heading>
      </PageHeader>
      <ul>
        {displayPosts.map((post) => (
          <li key={post.slug} className='mb-6'>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
      <PostsPagination
        className='mt-auto'
        pages={totalPages}
        currentPage={currentPage}
      />
    </main>
  );
}
