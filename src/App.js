import './App.css';
// import Registration from './components/registeration'; 
//import RegisterPage from './components/RegisterPage'
import { Provider } from 'react-redux';
import Store from './store';
import UserContainer from './redux/container/userContainer';


function App() {
  return (
    <div>
      {/* <Registration /> */}  
      <Provider store={Store}>
        <UserContainer />
        {/* <RegisterPage /> */}
      </Provider>


    </div>
  );
}

export default App;
