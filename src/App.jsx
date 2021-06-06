import React from 'react';
import AppRouter from 'router/Router';
import { authService } from 'fbase';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [init, setInit] = React.useState(false);
  React.useEffect(() => {
     authService.onAuthStateChanged((user) => {
         console.log(user);
        user ? setIsLoggedIn(true) : setIsLoggedIn(false);
        setInit(true);
    });
  }, []);
  return (
      <>
          {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
        <footer>&copy; { new Date().getFullYear() } Twitter clone</footer>
      </>
  );
}
