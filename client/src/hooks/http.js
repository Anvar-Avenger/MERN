import {useCallback, useState} from "react";
import {base_url} from "../utils/requests";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const request = useCallback(async (url, params) => {
        setLoading(true)

        try {
            const res = await fetch(base_url + url, params);
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.msg || "Qandaydir xatolik yuz berdi")
            }

            setLoading(false);
            return data;
        } catch (e) {
            setLoading(false)
            setError(e.message)

            throw e
        }
    }, [])

    const clearError = useCallback(() => {
        setError(null)
    }, [])

    return {loading, request, error, clearError}
}

export default useHttp;