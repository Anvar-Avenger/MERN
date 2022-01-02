export const base_url = "http://127.0.0.1:5000";

export async function get(url, params = {}) {
    const res = await fetch(base_url + url, params)
    return res.json()
}

export async function post(url, data, token = '') {
    let res = await fetch(base_url + url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        },
    })

    return await res.json()
}