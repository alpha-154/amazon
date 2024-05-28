import React, { useEffect } from "react"
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./Components/Home/Home"
import Checkout from "./Components/Checkout/Checkout"
import NotFound from "./Components/NotFound/NotFound"
import Login from "./Components/Login/Login"
import { auth } from "./storage"
import { useStateValue } from "./contextAPI/StateProvider"



function App() {

  const [{}, dispatch] = useStateValue();

  useEffect( ()=> {

    auth.onAuthStateChanged( authUser => {
      console.log('The User Is >>>', authUser);

      if(authUser){
        //the user just logged in/ the user was logged out
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
    
  }, [])

  return (
    <Router>
         <Routes>
          
           <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>} />
              <Route path="checkout" element={<Checkout/>} />
           </Route>

           <Route path="login" element={<Login/>} />
           <Route path="*" element={<NotFound/>} />
              
         </Routes>
    </Router>
    
  );
}


export default App
