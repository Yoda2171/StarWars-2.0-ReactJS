import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import injectContext from './store/appContext';
import Home from './views/home';
import infoPersonajes from './views/infoPersonajes';
import infoPlanetas from './views/infoPlanetas';
import MoreSpecies from './views/MoreSpecies';
import Personajes from './views/Personajes';
import Planetas from './views/Planetas';
import Species from './views/Species';


const App = props => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/planetas/:id" component={infoPlanetas}></Route>
        <Route path="/personajes/:id" component={infoPersonajes}></Route>
        <Route path="/species/:id" component={MoreSpecies}></Route>
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
        <div className="container">
          <Route path="/species" component={Species} />
          <Route path="/planetas" component={Planetas} />
          <Route path="/personajes" component={Personajes} />
        </div>
          
          <Route render={() => { return <h1>Page Not Found</h1> }} />
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
