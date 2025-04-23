import React from 'react'

function Home() {
  return (
    <div>
     <div className='container d-flex justify-content-center '>
        <div className='search_box'>
      
        <box-icon type='solid' name='map' color="white" size="lg"></box-icon>
        <input type="text" placeholder='Enter Your City' name='City name' />
        
       <button>
       <box-icon name='search-alt-2' color="white" size="lg"></box-icon>
        </button> 
        
        </div>
       
     </div>
     <button>
      Clear
        </button> 
    </div>
  )
}

export default Home
