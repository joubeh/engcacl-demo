import React, {useState} from "react";
import Home from './Home'
import Category from './Category'
import Calc from './Calc'

function App() {
  const [page, setPage] = useState('home')

  return(
    <div>
      {page == 'home' && <Home setPage={setPage}/>}
      {page == 'category' && <Category setPage={setPage}/>}
      {page == 'calc' && <Calc setPage={setPage}/>}
    </div>
  )
}

export default App;
