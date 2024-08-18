import { Heading, PageHeader } from "@/components/page-header";
import { posts } from "#site/content";
import {
  getAllTags,
  getPostsWithTag,
  sortPosts,
  sortTagsByCount,
} from "@/lib/utils";
import PostItem from "@/components/post-item";

export default function TagsPage() {
  const publishedPosts = posts.filter((post) => post.published);
  const tags = getAllTags(publishedPosts);
  const displayTags = sortTagsByCount(tags);
  return (
    <main>
      <PageHeader>
        <Heading>Tags</Heading>
      </PageHeader>
      <section>
        {displayTags.length ? (
          displayTags.map((tag) => (
            <div
              key={tag}
              className='p-1 rounded-xl border border-zinc-300/40 dark:border-zinc-800/80 mb-5 bg-zinc-100/10 dark:bg-zinc-800/30'
            >
              <div className='flex justify-between relative items-center dark:text-zinc-200 text-sm mb-1'>
                <h2 className='px-1 rounded-tl-lg'>{tag}</h2>
                <p className='px-1'>
                  Found {tags[tag]} post{tags[tag] > 1 ? "s" : ""}
                </p>
              </div>
              <ul className='grid grid-cols-1 gap-1 md:[&:has(li:nth-last-child(n+2))]:grid-cols-2'>
                {getPostsWithTag(sortPosts(publishedPosts), tag).map((post) => (
                  <li
                    key={post.slugAsParams}
                    className='[&:nth-child(3n)]:col-span-full'
                  >
                    <PostItem post={post} variant={"secondary"} />
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No tags</p>
        )}
      </section>
    </main>
  );
}
