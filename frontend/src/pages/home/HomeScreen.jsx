 import React from 'react'
import { useAuthStore } from '../../store/authUser'
 
 const HomeScreen = () => {
    const { logout } = useAuthStore()

   return (
    <>  
     <div>HomeScreen</div>
     <button onClick={logout}>logout</button>
     </>
   )
 }
 
 export default HomeScreen       