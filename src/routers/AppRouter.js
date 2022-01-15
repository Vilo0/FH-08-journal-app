import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Redirect,
    Switch } from 'react-router-dom'

import { login } from '../actions/auth'
import { setNotes } from '../actions/notes'
import { JournalScreen } from '../components/journal/JournalScreen'
import { loadNotes } from '../helpers/loadNotes'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, async (user) => {
            
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);

                const notes = await loadNotes(user.uid);
                dispatch(setNotes(notes));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);

        })
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return (
            <h1>Wait...</h1>
        );
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute
                        exact
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>

    )
}

