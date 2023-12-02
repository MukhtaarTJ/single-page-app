import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateHandler =()=>{
    navigate("/product")
  }
  return (
    <div>

     <h1>my home page</h1> 
     <p> go to product page <Link to="/product">here</Link></p>
     <p>
      <button onClick={navigateHandler}>Navigate</button>
     </p>
    </div>
  )
}

export default Home
