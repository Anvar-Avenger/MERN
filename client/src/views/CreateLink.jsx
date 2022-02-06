import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";
import {post} from "../utils/requests";
import {AuthContext} from "../context/AuthContext";


export default function CreateLink() {
    const [link, setLink] = useState('')
    const navigate = useHistory().push;
    let {token} = useContext(AuthContext);

    async function submitHandler() {
        try {
            let data = await post('/links', {link}, token)

            if (data.success) {
                navigate(`/links/${data.link._id}`)
            }
        } catch (e) {}
    }

    return (
        <div className="row">
            <h2 className="center">Havola qo&#8216;shish</h2>
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input type="text" name="link" id="link" value={link}
                        placeholder="Havolani kiriting"
                        onChange={e => setLink(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <button className="btn btn-block"
                        onClick={submitHandler}>Saqlash</button>
                </div>
            </div>
        </div>
    );
}
