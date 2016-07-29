import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, Router } from "react-router";
import routes from '../client_routes/routes';
import { Provider } from 'react-redux'
import todoApp from '../reducers/index'
import { createStore } from 'redux'

let store = createStore(todoApp)
if (module.hot) {
	module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default;

      store.replaceReducer(nextReducer);
    });
}
// require("../../public/style.scss");

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
