import React from 'react'
import Card from './Compo/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card userName='Lokesh Sharma' age={24} imge='https://images.unsplash.com/photo-1672865073319-54ab201e4076?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVuZ29rdXxlbnwwfHwwfHx8MA%3D%3D'/>

      <Card userName="Abhishek Saroha" age={24} imge='https://plus.unsplash.com/premium_photo-1661892088256-0a17130b3d0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App
