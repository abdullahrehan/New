import React from 'react'
import About from './About'
import Products from './Products'
import  './App.css'
function App() {

  const arr='hello Abdullah and Abdullah'
  const ab=/Abdullah/g


  const mat=arr.match(ab)
  const mat2=arr.replace(ab,'Muneeb10')
  const mat3=ab.test(arr)




  console.log(mat);
  console.log(mat2);
  console.log(mat3);

  return (
    <div className='test'>

    
      
    </div>
  )
}

export default App
