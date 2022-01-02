import {BrowserRouter} from "react-router-dom";
import Router from './routes'
import Navbar from "./components/Navbar";
import {AuthContext} from "./context/AuthContext";
import {useAuth} from "./hooks/auth.hook";
import Loader from "./components/Loader";

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
                    <Router isAuth={isAuth}/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
