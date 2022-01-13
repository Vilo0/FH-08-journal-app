import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
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

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            
            if (user?.uid) {
                dispatch( login(user.uid, user.displayName) );
            }

        })
    }, [dispatch]);

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
