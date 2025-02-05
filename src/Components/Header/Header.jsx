import React from 'react'
import "./Header.css"
import logo from "../../assets/logo.png"
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../contextAPI/StateProvider'
import { auth } from '../../storage'



const Header = () => {

 const [{basket, user}, dispatch] = useStateValue()

 const handleAuthentication = () => {
  if(user){
    auth.signOut();
  }
 }

  return (
    <div className='header' id='top-section'>

        <Link to="/">
           <img className='header_logo'
             src={logo}
            /> 
        </Link>

        <div className='header_search'>
            <input className='header_searchInput'
                    type='text'             
              />
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className='header_nav'>

          <Link to={ !user && '/login'}>
              <div onClick={handleAuthentication} className='header_option'>
                 <span className='header_optionLineOne'>
                    {user ? `${user.email}` : 'guestId'}
                 </span>
                 <span className='header_optionLineTwo'>
                    { user ? 'Sign Out' : 'Sign In'}
                </span>
              </div>
          </Link>

           <div className='header_option'>
               <span className='header_optionLineOne'>
                  Returns
               </span>
               <span className='header_optionLineTwo'>
                   & Orders
               </span>
           </div>

           <div className='header_option'>
               <span className='header_optionLineOne'>
                   Your
               </span>
               <span className='header_optionLineTwo'>
                   Prime
               </span>
           </div>

        </div>
       
       <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className='header_optionLineTwo  header_basketCount'>{basket?.length}</span>
         </div> 
       </Link>
       

        
    </div>
  )
}

export default Header
