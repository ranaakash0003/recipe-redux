import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import FavoriteRecipeList from './components/FavoriteRecipeList'

const store = createStore(rootReducer);
store.subscribe(() => console.log('eeeeeeee', store.getState()));

ReactDOM.render(
  <Provider store = {store}>
    <BrowserRouter>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/favourites' component={FavoriteRecipeList}/>
    </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
