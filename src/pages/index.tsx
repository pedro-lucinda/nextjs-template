import type { NextPage } from 'next'
import Head from 'next/head'
import HomeView from '@/views/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <HomeView />
    </>
  )
}

export default Home
