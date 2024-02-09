import {Redirect, Route, Switch} from "react-router-dom";
import Auth from "./views/Auth";
import NotFound from "./views/NotFound";
import CreateLink from "./views/CreateLink";
import Links from "./views/Links";
import Detail from "./views/Detail";
import Home from './views/Home'


export default function Routes({isAuth}) {
    if (!isAuth)
        return (
            <Switch>
                <Route path={"/login"} exact>
                    <Auth/>
                </Route>

                {/* Avtomatik loginga qaytarish */}
                <Redirect to="/login"/>
                {/*<Redirect path={'/register'} to={'/'}/>*/}
            </Switch>
        );

    return (
        <Switch>
            {/* exact aynan shu manzil o'zi bo'lishi bildiradi (dinamik yo'naltirgachlar bilan aralashib ketmasigi uchun yoziladi) */}
            <Route path='/' component={Home} exact/>
            <Route path='/create' component={CreateLink}/>
            <Route path='/links' component={Links} exact/>
            <Route path='/links/:id' component={Detail}/>

            <Route path="*" component={NotFound}/>
        </Switch>
    )
}