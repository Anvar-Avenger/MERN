import {useContext, useState} from "react";
import {post} from "../utils/requests";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom";


export const Auth = () => {
    const auth = useContext(AuthContext);
    const navigate = useHistory().push;

    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    let loading = false;
    function changeForm(e) {
        setForm({...form, [e.target.name]: e.target.value})
    }

    async function Login(e) {
        e.preventDefault()

        try {
            let data = await post('/login', form)

            if (data.success) {
                auth.login(data.token, data.user_id)

                // shartmas avtomatik holat (state) o'zgaradi va yo'naltirgichlar o'zgaradi
                // Lekin bu yozilmasa komponent almashsa ham url o'zgarmay qoladi
                navigate('/links')
            }
        } catch (ex) {
            console.error("Xatolik: ", ex.message)
        }
    }

    async function register() {
        try {
            const data = await post('/register', form)
            console.log(data)
        } catch (ex) {
            console.log("Xatolik: ", ex.message)
        }
    }


    return (
        <div>
            <div className="row">
                <div className="col s6 offset-s3">
                    <h1>Oddiy tizim</h1>
                    <form action="" method="POST" onSubmit={Login}>
                        <div className="card blue darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Foydalanuvchini tanib olish (Avtorizatsiya)</span>
                                <div>
                                    <div className="input-field">
                                        <input type="text" name="email" id="email"
                                               className="yellow-input" value={form.email}
                                               placeholder="Foydalanuvchi nomi"
                                               onChange={changeForm}
                                        />
                                    </div>

                                    <div className="input-field">
                                        <input type="password" name="password" id="password"
                                               className="yellow-input"
                                               placeholder="Parolni yozing"
                                               value={form.password}
                                               onChange={changeForm}
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className="card-action">
                                <button type="submit"
                                        className="btn yellow darken-4"
                                        style={{marginRight: 10}}
                                        disabled={loading}>
                                    Tizimga kirish
                                </button>
                                <button type="button" className="btn grey lighten-1 black-text"
                                      onClick={register} disabled={loading}>
                                    Ro&#8216;yxatdan o&#8216;tish
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Auth;

