import requests from "@/lib/api";
import { PostType } from "@/models/post.interface";
import MarkdownIt from "markdown-it";
import Head from "next/head";

interface PostProps {
  post: PostType;
}

export default function Post({ post }: PostProps) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);
  return (
    <>
      <Head>
        <title>{post.attributes.title}</title>
        <meta name="description" content={post.attributes.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="py-12">
        <div className="container">
          <h1 className="mb-4 text-3xl">{post.attributes.title}</h1>
          <h3 className="mb-6 text-2xl">{post.attributes.description}</h3>

          <article
            className="prose-white prose lg:prose-xl prose-headings:text-white prose-p:text-white prose-a:text-blue-600 prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></article>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ params }: any) {
  const postsRes = await requests.get(`posts/${params.slug}`);

  return {
    props: {
      post: postsRes.data,
    },
  };
}
