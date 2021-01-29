import Header from "./Components/Header"
import Home from "./Components/Home"
import Api from "./Components/Api"
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/api">
          <Api />
        </Route>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
