import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Todos from './TodoList/Todos';
import TodoItem from './TodoList/Todos';
import NewsItem from './News/NewsItem';
import Nav from './News/Nav';
import News from './News/News';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {

let page=6;

  return (
    <>
{/* <Navbar title="Text Utils"/> */}
{/* <Navbar/> */}

{/* <div className="container" >
<TextForms heading="Enter the text to analyze"/>
</div> */}

{/* <Todos/> */}
  <BrowserRouter>
  <Nav/>

  <Routes>
    <Route exact path='/business' element={<News key="business" pageSize={page} country={"in"} category="business"/>}/>
    <Route exact path='/entertainment' element={<News key="entertainment" pageSize={page} country={"in"} category="entertainment"/>}/>
    <Route exact path='/general' element={<News key="general" pageSize={page} country={"in"} category="general"/>}/>
    <Route exact path='/health' element={<News key="health" pageSize={page} country={"in"} category="health"/>}/>
    <Route exact path='/science' element={<News key="science" pageSize={page} country={"in"} category="science"/>}/>
    <Route exact path='/sports' element={<News key="sports" pageSize={page} country={"in"} category="sports"/>}/>
    <Route exact path='/technology' element={<News key="technology" pageSize={page} country={"in"} category="technology"/>}/>

  </Routes>
  
  
  </BrowserRouter>
  
    </>
  );
}

export default App;
