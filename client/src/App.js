import {BrowserRouter} from "react-router-dom";
import Routes from './routes'

import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";
import Navbar from "./views/components/Navbar";
import Loader from "./views/components/Loader";

function App() {
    const {ready, token, login, logout} = useAuth();
    let isAuth = !!token; // !! -> string to boolean

    if (!ready) {
        return (
            <div className="center top-center">
                <Loader/>
            </div>
        );
    }

    return (
        <AuthContext.Provider value={{
            token, login, logout
        }}>
            <BrowserRouter>
                {isAuth && <Navbar/>}

                <div className="container">
                    <Routes isAuth={isAuth}/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
