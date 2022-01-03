import {Link} from "react-router-dom";

const NotFound = () => (
    <>
        <h1 className="center">Sahifa topilmadi</h1>
        <h5 className="center"><Link to={'/'}>Bosh sahifaga</Link></h5>
    </>
);

export default NotFound;