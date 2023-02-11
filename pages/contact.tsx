import Head from "next/head"
import { Layout } from "@/components/global/layout"
import Contact from "@/components/contact/Contact"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Company name</title>
        <meta
          name="description"
          content="company content"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact/>
    </Layout>
  )
}
