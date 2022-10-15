import Login, { LoginProps } from '../Login'
import Logo from '../Logo'

export default function LoginView({ setData }: LoginProps) {
  return (
    <div className="flex flex-col h-screen w-screen -mt-10 justify-center items-center">
      <Logo />
      <Login setData={(data) => setData(data)} />
    </div>
  )
}
