import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import LoginView from '../components/Views/LoginView'
import DashboardView from '../components/Views/DashboardView'
import { IFrontAbsencesStudyGroup } from '../Interfaces'
import Footer from '../components/Footer'
import DarkModeSwitch from '../components/DarkModeSwitch'
import { dataSample } from './test'
import { useGradesProvider } from '../contexts'

const TITLE = 'המבריזון 2000'
const DESCRIPTION = 'המבריזון 2000, נוצר על ידי איתי אושרי'
export type Modes = 'absences' | 'grades'

const Home: NextPage = () => {
  const {
    gradesStudyGroups,
    setGradesStudyGroups,
    absencesStudyGroups,
    setAbsencesStudyGroups,
  } = useGradesProvider()

  useEffect(() => {
    setGradesStudyGroups(dataSample)
  }, [])

  const [mode, setMode] = useState<Modes>('grades')
  const [showed, _setShowed] = useState('true')
  useEffect(() => {
    const value = localStorage.getItem('showed')
    if (!value) localStorage.setItem('showed', 'false')
    _setShowed(localStorage.getItem('showed'))
  }, [])

  const setShowed = useCallback((value: string) => {
    localStorage.setItem('showed', value)
  }, [])

  const setSelected = useCallback(
    (index: number) => {
      gradesStudyGroups[index].selected = !gradesStudyGroups[index].selected
      setGradesStudyGroups((prev) => {
        return [...prev]
      })
    },
    [gradesStudyGroups, setGradesStudyGroups]
  )

  return (
    <div
      className={`flex flex-col ${
        absencesStudyGroups.length
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
      {absencesStudyGroups.length ? (
        <>
          <DashboardView
            setSelected={setSelected}
            absencesStudyGroups={absencesStudyGroups}
            gradesStudyGroups={gradesStudyGroups}
            showed={showed == 'true'}
            setShowed={setShowed}
            mode={mode}
          />
          <Footer />
        </>
      ) : (
        <LoginView
          setAbsencesData={(data) => setAbsencesStudyGroups(data)}
          setGradesData={(data) => setGradesStudyGroups(data)}
        />
      )}
    </div>
  )
}

export default Home
