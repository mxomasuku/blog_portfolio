import { ReactNode } from "react"

interface MainPageProps {
    children: ReactNode
}

const MainPage: React.FC<MainPageProps> = ({children}) => {
  return (
    <div className="m-10">
{children}
        </div>
  )
}

export default MainPage