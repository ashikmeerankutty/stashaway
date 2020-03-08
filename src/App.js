import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'

import Home from './components/home'

const App = () => (<Provider store={configureStore()}><Home /></Provider>)

export default App;
