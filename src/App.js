
import './App.css';
import {createContext, useState} from "react"
import ReactSwitch from "react-switch"
export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((curr) => (curr === "light"? "dark" : "light"))
  }


  return (
    <ThemeContext.Provider value = {{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <h1>Light and Dark Mode implementation</h1>
        <h2>Using this toggle button you can toggle between light and dark mode</h2>
        <div className='switch'>
          <label>{theme === 'light'? "Light Mode": "Dark Mode"}</label>
        <ReactSwitch onChange={toggleTheme} checked = {theme === "dark"} />
          </div>
        </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
