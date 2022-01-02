import {useCallback, useEffect, useState} from "react";
import Loader from "../components/Loader";
import {get} from "../utils/requests";
import {useParams} from "react-router-dom";
import {base_url} from '../utils/requests'


export default function Detail() {
    const [loading, setLoading] = useState(true);
    const [link, setLink] = useState({})
    const linkId = useParams().id

    const getLink = useCallback(async () => {
        try {
            const fetched = await get(`/links/${linkId}`)
            setLink(fetched);

            setLoading(false);
        } catch (e) {
            console.log("Xatolik: ", e.message)
        }
    }, [linkId])

    useEffect(() => {
        getLink()
    }, [getLink])

    if (loading)
        return (
            <div className="center top-center">
                <Loader />
            </div>
        )

    return (
        <>
            <h2>Havola</h2>
            <p>
                <span>Havola manzili: </span>
                <span>{link.link}</span>
            </p>
            <p>
                <span>Havolaga o&#8216;tish uchun bosing: </span>
                <strong>
                    <a href={`${base_url}/links/${link._id}/open`} target="_blank" rel="noopener noreferrer">Yo&#8216;naltirish</a>
                </strong>
            </p>
            <p>Ushbu havolaga o&#8216;tishlar soni: <strong>{link.clicks}</strong></p>
            <p>Yaratilgan sana: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
        </>
    )
}