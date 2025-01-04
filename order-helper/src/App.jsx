import Login from "./component/login"
import { ProtectedRoute } from "./component/ProtectedRoute"
import { Rigister } from "./component/Rigister"
import { AdminDashBoard } from "./pages/AdminDashBoard"
import { AuthLayout } from "./pages/AuthLayout"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import BestSellerPage from "./pages/BestSellerPage"




function App() {
  

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/BestSellerPage" element={<BestSellerPage/>} />
    <Route path="/H" element={<Home/>} />
      <Route element={<AuthLayout/>}>
       <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Rigister/>} />
       
      
       <Route path="/admin/dashboard" element={ <ProtectedRoute > <AdminDashBoard/> </ProtectedRoute> } />
       </Route>
    </Routes>
      
    </>
  )
}

export default App
