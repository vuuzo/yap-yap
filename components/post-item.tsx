import { Post } from "#site/content";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";

export default function PostItem({
  post,
  className,
}: {
  post: Post;
  className?: string;
}) {
  return (
    <Link
      href={`/${post.slug}`}
      className={cn("group block relative h-full rounded-xl", className)}
    >
      <div className='absolute inset-[2px] pointer-events-none'>
        <svg
          fill='none'
          width='100%'
          height='100%'
          xmlns='http://www.w3.org/2000/svg'
          className='group-hover:opacity-100 group-focus-visible:opacity-100 opacity-0 transition-opacity'
        >
          <rect
            x={1.5}
            y={1.5}
            rx='9'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeDasharray='8 8'
            width='100%'
            height='100%'
            className=' w-[calc(100%-3px)] h-[calc(100%-3px)] dark:stroke-zinc-700 stroke-zinc-400 custom-border'
          />
        </svg>
      </div>

      <div className='mb-1'>
        <time
          dateTime={post.date}
          className='text-xs text-zinc-400 dark:text-zinc-500 leading-none'
        >
          {formatDate(post.date)}
        </time>
      </div>
      <h3 className='line-clamp-1 text-zinc-800 dark:text-zinc-300 group-hover:underline'>
        {post.title}
      </h3>

      {post.description && (
        <p className='line-clamp-1 text-zinc-500 dark:text-zinc-400'>
          {post.description}
        </p>
      )}
    </Link>
  );
}
