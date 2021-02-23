import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { client } from "../prismic-configuration";


export default function Home(props) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    <div>
      <img src={props.home.data.image.url} alt="avatar image" height="140px" />
      <h1>{RichText.asText(props.home.data.headline)}</h1>
      <p>{RichText.asText(props.home.data.description)}</p>

      <ul>
        {props.posts.results.map((post) => (
          <Link href="posts/[id]" as={`/posts/${post.uid}`}>
          <li key={post.uid}>
            {RichText.render(post.data.title)}
          </li>
          </Link>
        ))}
      </ul>
    </div>


      
    </Layout>
  )
}



export async function getStaticProps() {
  const home = await client.getSingle("blog_home")
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.date desc]" }
  )
  return {
    props: {
      home,
      posts,
    },
  }
}
