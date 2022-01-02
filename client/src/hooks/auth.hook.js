import {useCallback, useEffect, useState} from "react"
import {destroyCookies, getCookie, setCookie} from '../utils/cookie'

let storage_name = 'user_data';
export const useAuth = () => {
    const [token, setToken] = useState(null);
    const [user_id, setUserId] = useState(null);
    const [ready, setReady] = useState(false);

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        destroyCookies()
    }, []);


    const login = useCallback((token, user_id) => {
        setToken(token);
        setUserId(user_id);

        setCookie(storage_name,
            JSON.stringify({
                token: token,
                user_id: user_id
            })
        );
    }, []);

    /* Set isAuthenticated on load page */
    useEffect(() => {
        let data = JSON.parse(getCookie(storage_name));
        if (data && data.token) {
            login(data.token, data.user_id);
        }

        setReady(true);
    }, [login]);

    return {ready, token, user_id, login, logout}
}
