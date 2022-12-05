/*import ClassComponent from "./ClassComponent"
import Component2 from "./Component2"
function App(){
  return(
    <section>
      <h1>Good morning</h1>
      <p>hello guys</p>
      <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt=""/>
      <ClassComponent/>
      <Component2/>
    </section>
  )
}
 export default App;*/

//import PropsExample from './PropsExample'
//import Events from './Events'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'

function App(){
  return(
      <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
      {/*<Events/>
        <h1>This is about Props</h1>
        <PropsExample name="thanu" age="21"/>*/}
      </div>
    )
}
export default App