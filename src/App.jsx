import { useState } from "react"
import Navbar from "./Dashboard/Navbar"
import Footer from "./Dashboard/footer"
import HomeDashboard from "./Admin/HomeDashboard"
function App() {
 const [logOut,setLogOut]=useState()
 console.log(logOut);
 
  return <div className="bg-white">
    <Navbar logOut={setLogOut}/>
   <HomeDashboard logout={logOut}/>
   <Footer/>
  </div>
 
}

export default App
