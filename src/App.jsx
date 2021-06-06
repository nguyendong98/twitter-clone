import React from 'react';
import AppRouter from 'router/Router';
import { authService } from 'fbase';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  return (
      <>
        <AppRouter isLoggedIn={isLoggedIn}/>
        <footer>&copy; { new Date().getFullYear() } Twitter clone</footer>
      </>
  );
}
