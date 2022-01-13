import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Route, 
    Switch } from 'react-router-dom'

import { login } from '../actions/auth'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);

        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Espere</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth"
                        component={ AuthRouter } />

                    <Route 
                        exact
                        path="/"
                        component={ JournalScreen } />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
