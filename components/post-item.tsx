import { Post } from "#site/content";
import Link from "next/link";
import Tag from "./tag";
import { formatDate } from "@/lib/utils";

export default function PostItem({ post }: { post: Post }) {
  return (
    <Link href={`/${post.slug}`} className='group flex h-full flex-col'>
      <div className='mt-auto pt-2'>
        <time dateTime={post.date} className='text-sm text-zinc-400'>
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className='line-clamp-1 text-2xl font-bold group-hover:underline mb-1'>
        {post.title}
      </h3>

      {post.description && <p className='line-clamp-1'>{post.description}</p>}

      <div className='flex gap-1 flex-wrap pt-3'>
        {post.tags?.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </Link>
  );
}
