import './App.css';
import MainComponent from './components/mainComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import myStore from './redux/store';
import { Provider } from 'react-redux';
function App() { 
  
  return (
    <div>
      <Provider store={myStore}>
      <Router>
      <MainComponent></MainComponent>
      </Router>
      </Provider>
    </div>
  )
}

export default App
