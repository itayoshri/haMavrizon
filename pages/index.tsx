import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import LoginView from '../components/Views/LoginView'
import DashboardView from '../components/Views/DashboardView'
import { IFrontStudyGroup } from '../Interfaces'
import Footer from '../components/Footer'
import DarkModeSwitch from '../components/DarkModeSwitch'

const TITLE = 'המבריזון 2000'
const DESCRIPTION = 'המבריזון 2000, נוצר על ידי איתי אושרי'

const Home: NextPage = () => {
  const [data, setData] = useState<IFrontStudyGroup[]>([])

  return (
    <div
      className={`flex flex-col ${
        data.length
          ? 'h-full'
          : 'h-mobile max-h-screen absolute dark:bg-[#424242]'
      } w-screen sm:w-full m-0 p-0 justify-center items-center`}
    >
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DarkModeSwitch />
      {data.length ? (
        <>
          <DashboardView subjects={data} />
          <Footer />
        </>
      ) : (
        <LoginView setData={(data) => setData(data)} />
      )}
    </div>
  )
}

export default Home
