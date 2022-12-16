import {BrowserRouter, Route, Routes} from "react-router-dom";
import PostData from "./components/PostData";
import PostView from "./components/PostView";
import LandingPage from "./components/LandingPage";
import './App.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element= {<LandingPage/>}></Route>
          <Route path='/PostView' element= {<PostView/>}></Route>
          <Route path='/PostData' element= {<PostData/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
