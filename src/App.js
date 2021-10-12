import './App.css';
import './index.css';
import Home from './Home';
import MyPokemon from './components/MyPokemon';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
return (

    <Router>
      <Navbar/>
        <Switch>
          <Route path={["/","/explore-pokemon"]} exact key="Home" component={Home}/>
          <Route path={["/my-pokemon"]} exact key="MyPokemon" component={MyPokemon}/>
        </Switch>
    </Router>
      
);
}

export default App;