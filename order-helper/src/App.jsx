import Login from "./component/login"
import { ProtectedRoute } from "./component/ProtectedRoute"
import { Rigister } from "./component/Rigister"
import { AdminDashBoard } from "./pages/AdminDashBoard"
import { AuthLayout } from "./pages/AuthLayout"
import { Routes, Route } from "react-router"




function App() {
  

  return (
    <>
    <Routes>
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
