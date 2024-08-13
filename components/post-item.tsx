import { Post } from "#site/content";
import Link from "next/link";
import Tag from "./tag";
import { formatDate } from "@/lib/utils";

export default function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/${post.slug}`} className='group flex h-full flex-col'>
      <div className='mb-1'>
        <time
          dateTime={post.date}
          className='text-xs text-zinc-400 dark:text-zinc-500'
        >
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className='line-clamp-1 text-xl text-zinc-800 dark:text-zinc-300 group-hover:underline mb-1'>
        {post.title}
      </h3>

      {post.description && (
        <p className='line-clamp-1 text-zinc-500 dark:text-zinc-400'>
          {post.description}
        </p>
      )}

      {/* <div className='flex gap-1 flex-wrap pt-3'>
        {post.tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div> */}
    </Link>
  );
}
