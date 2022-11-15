
import { createContext, useState } from 'react';
import './App.scss';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';
import { Route, Routes } from 'react-router-dom';


export const ThemeContext = createContext(null);


function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }


  return (
  <ThemeContext.Provider value={{theme, toggleTheme}}>

    
    <div className="App" id={theme}>
    <Routes>
   
    <Route path='/auth' element={<AuthPage></AuthPage>}></Route>
    <Route path='/' element={<Home toggleDarkMode={toggleTheme}></Home> } > </Route>
    
     
     </Routes> 
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
