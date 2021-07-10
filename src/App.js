import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import Login from './Login';
import Widgets  from './Widgets';

function App() {

  const user  = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth){
        //logged in
        dispatch(
          login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoUrl,
        }));
      } else{
        //loggedout
        dispatch(logout());
      }
    });
    
  }, []);

  return (
    <div className="app">
      
      {/*Header */}
      <Header />

      {!user ? (
         <Login />
      ) : (
          <div className="app_body">

          <Sidebar />
     
    
          {/* Feed */}
          <Feed />
    
          {/* Widget */}
          <Widgets />
          </div>
      )}

      {/*App Body */}
     
    </div>
  );
}

export default App;
