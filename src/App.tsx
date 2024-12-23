import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import AuthPage from "./Pages/AuthPage.tsx";

function App() {

  return (
    <BrowserRouter>
     <div className={`flex min-h-screen w-full bg-[#FAFAFA]`}>
         <Routes>
             <Route path={'/'} Component={AuthPage} />
             <Route path={'/dashboard'} Component={Home} />
         </Routes>
     </div>
    </BrowserRouter>
  )
}

export default App
