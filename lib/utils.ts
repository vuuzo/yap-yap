import { Post } from "#site/content";
import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortPosts(posts: Post[]) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function formatDate(d: string | number) {
  return new Date(d).toLocaleDateString("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function getAllTags(posts: Post[]) {
  const tags: Record<string, number> = {};

  for (const post of posts) {
    if (post.tags) {
      for (const tag of post.tags) {
        tags[tag] = (tags[tag] ?? 0) + 1;
      }
    }
  }

  return tags;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
}

export function getPostsWithTag(posts: Post[], tag: string) {
  return posts.filter((post) => {
    if (!post.tags) return false;
    const tags = new Set(post.tags);
    return tags.has(tag);
  });
}
