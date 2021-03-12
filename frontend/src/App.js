import Header from './Components/Header';
import Home from './Components/Home';
import Api from './Components/Api';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/home' exact>
          <Home />
        </Route>
        <Route path='/api' exact strict>
          <Api />
        </Route>
        <Redirect from='/*' to='/home' />
        <Redirect from='/home/*' to='/home' />
        <Redirect from='/api/*' to='/api' />
      </Switch>
    </div>
  );
}

export default App;
