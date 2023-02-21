import './App.css';
import NewCakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/Store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MilkContainer from './components/MilkContainer';
import ItemContainer from './components/ItemContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cakes />
        <ItemContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <MilkContainer />
      </div>
    </Provider>

  );
}

export default App;
