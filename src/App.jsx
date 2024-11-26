import { useState } from "react"
import AdminDashboard from "./Admin/admin"
import Navbar from "./Dashboard/Navbar"
import Footer from "./Dashboard/footer"
function App() {
 const [logOut,setLogOut]=useState()
 console.log(logOut);
 
  return <div className="bg-white">
    <Navbar logOut={setLogOut}/>
   <AdminDashboard logout={logOut}/>
   <Footer/>
  </div>
 
}

export default App
