import { FeaturedPosts } from "../sections/index";
import { PostCard, Categories, PostWidget } from "../components";
import { getPosts } from "../services";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home({ posts }) {
  return (
    <main className="container mx-auto px-2 md:px-2 mb-8">
      <Head>
        <title>Hacemos su Pagina Web Diseño de sitios web a la medida</title>
        <meta
          name="description"
          content="Esta es una pagina web para la creacion y diseño de pagias web y aplicaciones."
        ></meta>
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
            <Footer />
    </main>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
