import React from 'react'
import title from '../../data/title'  
 
const Home = () => {

  document.title = title+'Restaurant'
  return (
    <div className='my-5 py-5 text-center'>
      Go to Menu and Eat.
    </div>
  )
}
export default (Home);