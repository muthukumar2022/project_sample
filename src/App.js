
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <div>
       <Provider store={store}>
     <LoginButton/>
     <LogoutButton/>
     <Profile/>
     </Provider>
    </div>
  );
}

export default App;
