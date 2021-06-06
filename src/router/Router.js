import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
const Home = React.lazy(() => import('pages/Home/Home'));
const Auth = React.lazy(() => import('pages/Auth/Auth'));
export default function AppRouter({ isLoggedIn }) {
    return (
        <HashRouter>
            <React.Suspense fallback={<div>Loading...</div>}>
                {isLoggedIn ? (
                        <>
                           <Route exact path='/'>
                                <Home />
                           </Route>
                        </>
                    ) : (
                        <>
                            <Route exact path='/'>
                                <Auth />
                            </Route>
                        </>
                    )
                }
            </React.Suspense>
        </HashRouter>
    )
}
