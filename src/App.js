import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='app'>
            {!user ? (
                <Login />
            ) : (
                <div className='app__body'>
                    <Router>
                        {/* SideBar */}
                        <Sidebar />
                        <Switch>
                            <Route path='/rooms/:roomId'>
                                {/* Chat */}
                                <Chat />
                            </Route>

                            <Route path='/'>
                                <Chat />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )}
        </div>
    );
}

export default App;
