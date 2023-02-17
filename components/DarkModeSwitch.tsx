import { useThemeProvider } from '../contexts'
import { DarkMode, LightMode } from './Icons'

export default function DarkModeSwitch() {
  const { darkMode, setDarkMode } = useThemeProvider()
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-black dark:text-white absolute top-6 left-6 z-50"
    >
      {darkMode ? (
        <LightMode width={26} height={26} />
      ) : (
        <DarkMode width={26} height={26} />
      )}
    </button>
  )
}
