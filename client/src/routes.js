import {Navigate, Route, Routes} from "react-router-dom";
import Auth from "./views/Auth";
import NotFound from "./views/NotFound";
import CreateLink from "./views/CreateLink";
import Links from "./views/Links";
import Detail from "./views/Detail";
import Home from './views/Home'


export default function Router({isAuth}) {
    if (!isAuth)
        return (
            <Routes>
                <Route path="/login" element={<Auth />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        );

    return (
        <Routes>
            <Route path={'/'} element={<Home/>}/>
            <Route path={'/create'} element={<CreateLink/>}/>
            <Route path={'/links'} element={<Links/>}/>
            <Route path={'/links/:id'} element={<Detail/>}/>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}