import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { defineConfig, s } from "velite";

export default defineConfig({
  output: {
    clean: true,
  },
  collections: {
    posts: {
      name: "Post",
      pattern: "blog/**/*.mdx",
      schema: s
        .object({
          slug: s.path(),
          title: s.string().max(99),
          description: s.string().max(999).optional(),
          tags: s.string().array().optional(),
          date: s.isodate(),
          content: s.mdx(),
          published: s.boolean().default(true),
        })
        .transform((postSchema) => ({
          // transforms post's path to slug (eg. blog/example-post => example-post)
          ...postSchema,
          slugAsParams: postSchema.slug.split("/").slice(1).join("/"),
        })),
    },
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: { className: ["subheading-anchor"] },
        },
      ],
      [
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light",
          },
          keepBackground: false,
        },
      ],
    ],
    remarkPlugins: [],
  },
});
