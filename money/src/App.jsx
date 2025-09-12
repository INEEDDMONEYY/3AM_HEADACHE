import Logo from './assets/Logo.png'
import './index.css'
import { ArrowRightFromLine} from 'lucide-react'
import { Link } from 'react-router'

function App() {
  

  return (
    <>
      <main>
        <div className="app-bg">
          <div className="m-10 flex justify-between">
            <div className="absolute left-70 rounded-lg w-[700px]">
              <img src={Logo} alt="Company logo" className="lp-logo" />
              <div className="absolute bottom-10 rounded-md app-content">
                <h1 className="text-center text-[2rem]">Is your vacation too short because of how expensive it is? Here at Traverse, find the best deals on hotels & flights !</h1>
              </div>
            </div>
            <div className="text-center absolute top-200 right-70">
              <button className="text-[1.4rem] rounded-md lp-btn">Travel with us <Link to="/booking"><ArrowRightFromLine className="inline-block ml-2 mb-1 lp-btn-icon" /></Link></button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
