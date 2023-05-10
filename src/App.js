import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './reduxContainer/store';
import Home from './screens/Home';
import Memo from './screens/Memo';
import Callback from './screens/Callback';
import Ref from './screens/Ref';
import Counter from './screens/Counter';
import Customhook from './screens/Customhook';
import BookContainer from './reduxContainer/BookContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Home /> */}
      {/* <Memo /> */}
      {/* <Callback /> */}
      {/* <Ref /> */}
      {/* <Counter /> */}
      {/* <Customhook /> */}
      <BookContainer />
    </div>
    </Provider>
  );
}

export default App;
