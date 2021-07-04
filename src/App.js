import {React,Component} from 'react'
import JitsiComponent from './jisti'
import indexx from './indexx'
import {BrowserRouter as Router,
Route,
 } from 'react-router-dom';

function App(){
  
  

  return (
    <Router>
            <Route exact  path="/" component={indexx}/>
      <Route exact  path="/jisti" component={JitsiComponent}/>
    </Router>
  )

}

export default App
