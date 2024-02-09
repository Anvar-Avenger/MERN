import {useCallback, useEffect, useState} from "react";

import useHttp from "../hooks/http";
import LinksList from "./components/LinksList";
import Loader from './components/Loader';

export default function Links() {
    const [links, setLinks] = useState([])
    const {loading, request} = useHttp()

    const fetchLinks = useCallback(async function () {
        try {
            const data = await request('/links', {});
            setLinks(data)
        } catch (e) {
        }
    }, [request])

    useEffect(() => {
        fetchLinks().finally() //.finally()
    }, [fetchLinks])


    if (loading) {
        return <Loader/>
    }

    return <LinksList links={links}/>
}