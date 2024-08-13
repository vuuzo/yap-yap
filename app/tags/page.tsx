import { Heading, PageHeader, Subheading } from "@/components/page-header";
import { posts } from "#site/content";
import { getAllTags, getPostsWithTag, sortTagsByCount } from "@/lib/utils";
import PostItem from "@/components/post-item";

export default function TagsPage() {
  const publishedPosts = posts.filter((post) => post.published);
  const tags = getAllTags(publishedPosts);
  const displayTags = sortTagsByCount(tags);
  return (
    <main className='col-span-1 col-start-3'>
      <PageHeader>
        <Heading>{`{tags}`}</Heading>
        <Subheading>under construction 👷🏼‍♂️</Subheading>
      </PageHeader>
      <section>
        {displayTags.map((tag) => (
          <div
            key={tag}
            className='p-1 rounded-xl border dark:border-zinc-800 mb-5'
          >
            <div className='flex justify-between items-center dark:text-zinc-200 text-sm mb-1'>
              <h2 className='px-1 rounded-tl-lg'>{tag}</h2>
              <p className='px-1'>
                Found {tags[tag]} post{tags[tag] > 1 ? "s" : ""}
              </p>
            </div>
            <ul>
              {getPostsWithTag(publishedPosts, tag).map((post) => (
                <li key={post.slugAsParams} className='mb-1 last-of-type:mb-0'>
                  <PostItem
                    post={post}
                    className='bg-zinc-100 dark:bg-zinc-900 p-8 rounded-lg'
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
