import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Image from 'next/image'

const name = 'Edible Wild World'
const tagline = 'Food is everywhere'
export const siteTitle = 'Edible Wild World'

export default function Layout({ children, home }) {
  return (
    <div className="body-font antialiased text-lg text-black bg-gray-300">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta
          name="description"
          content="How to identify and work with some of the world's most common edible wild plants. Food is everywhere!"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="text-indigo-500 border-b border-t border-indigo-500">
      <div className="flex justify-between py-2 px-4">

        <h1 className="font-bold text-xl tracking-tight">
          {name}
        </h1> 
      <div>
        <Nav />
      </div>
      </div>
      {home ? (
          <>
      <div className="bg-gradient-to-b
                      from-indigo-700
                      to-indigo-500
                      h-68
                      pb-4
                      ">
            <Image
                src="/images/hero.jpg"
                layout="intrinsic"
                width={2000}
                height={1500}
                />               
        <h2 className="
                       header-font tracking-tight text-center text-6xl text-white font-black
                       py-10 
                       ">
        {tagline}
        </h2>
      </div> 

      </>
        ) : null }
      </header>



      <main className="">{children}</main>

      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
