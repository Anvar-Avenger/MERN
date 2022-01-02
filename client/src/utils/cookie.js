function setCookie(name, value, hours = 1) {
    let d = new Date()
    d.setTime(d.getTime() + 1000 * 60 * 60 * hours)

    let expires = "expires=" + d.toUTCString()
    document.cookie = `${name}=${value};` + expires + "path=/";
}

function getCookie(name) {
    let doc_cookies = document.cookie; // Cookie ";" bilan ajralgan satrda saqlanadi
    let cookies = doc_cookies.split(';')
    // decodeURIComponent(doc_cookies)

    for (let cookie of cookies) {
        let [cook, value] = cookie.trim().split('=')

        if (name === cook)
            return value;
    }

    return null;
}

function destroyCookies() {
    let cookies = document.cookie.split(';')
    cookies.forEach(cookie => {
        let [name] = cookie.trim().split('=') // [name] -> [0]
        document.cookie = name + "= ;expires=" + (new Date()).toUTCString();
    });
}

export {setCookie, getCookie, destroyCookies} //