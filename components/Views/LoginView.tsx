import Login, { LoginProps } from '../Login'
import Logo from '../Logo'

export default function LoginView({
  setAbsencesData,
  setGradesData,
}: LoginProps) {
  return (
    <div className="flex flex-col h-screen w-screen sm:w-full -mt-10 justify-center items-center">
      <Logo />
      <Login
        setAbsencesData={(data) => setAbsencesData(data)}
        setGradesData={(data) => setGradesData(data)}
      />
    </div>
  )
}
