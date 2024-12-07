import './App.css';
import Navbar from './navbar/Navbar';
import Home from './Home';
import Position from './Position';
import About from './About';
import Learn from './Learn';

const App = () => {
  let component
  switch (window.location.pathname){
    case "/Home":
      component = <Home />
      break
    case "/position":
      component = <Position />
      break
    case "/Learn":
      component = <Learn />
      break
    case "/about":
      component = <About />
      break
  }
  return(
  <div className = 'container'>
    <Navbar />
    {component}
    <div className = 'midtext'>
      <h1>JOBEXPOLER</h1>
      <h1>Explore Your Future Roles</h1>
      <p>searching for computer engineer roles</p>
      <button className = 'goexplore' type = "go">GO EXPLORE</button>
    </div>
    
  </div>
  );


}

export default App;
