import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import LoginView from '../components/Views/LoginView'
import DashboardView from '../components/Views/DashboardView'
import { IFrontAbsencesStudyGroup } from '../Interfaces'
import Footer from '../components/Footer'
import DarkModeSwitch from '../components/DarkModeSwitch'

const TITLE = 'המבריזון 2000'
const DESCRIPTION = 'המבריזון 2000, נוצר על ידי איתי אושרי'

const Home: NextPage = () => {
  const [data, setData] = useState<IFrontAbsencesStudyGroup[]>([])
  const [showed, _setShowed] = useState('true')
  useEffect(() => {
    const value = localStorage.getItem('showed')
    if (!value) localStorage.setItem('showed', 'false')
    _setShowed(localStorage.getItem('showed'))
  }, [])

  const setShowed = useCallback((value: string) => {
    localStorage.setItem('showed', value)
  }, [])

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
          <DashboardView
            subjects={data}
            showed={showed == 'true'}
            setShowed={setShowed}
          />
          <Footer />
        </>
      ) : (
        <LoginView setData={(data) => setData(data)} />
      )}
    </div>
  )
}

export default Home
