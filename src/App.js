import './App.scss';

import Routing from './routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import UserContext from './components/context/UserContext';

function App() {
  const { setAuth, setDimension, prodDimension } = useContext(UserContext); //Login Context

  useEffect(() => {
    localStorage.getItem('cartProduct');
    var token = localStorage.getItem('loginToken');
    if (token != null) {
      console.log('Get Login Token', token)
      axios.get('http://44.201.12.222:8000/userprofile/', {
        headers: { "Authorization": `Bearer ${token}` }
      })
        .then((res) => {
          setAuth({
            user_name: res.data.First_name
          })
          console.log('profile Get', res.data.First_name);
        })

        .catch(function (error) {
          console.log(error.response);

        })

    }

    JSON.parse(localStorage.getItem('cartDataa'))
  })
  return (
    <div className="App">
      <Routing />
      <ToastContainer autoclose={3000} />
    </div>
  );

}


export default App;
