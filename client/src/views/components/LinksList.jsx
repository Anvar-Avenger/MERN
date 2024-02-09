import React from 'react'
import {Link} from 'react-router-dom'

export default function LinksList({links}) {
    if (!links.length) {
        return (
            <div className="center mt-5">
                <div className="d-flex w-100">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="100" height="100" viewBox="0 0 100 100">
                        <title>Shakl</title>
                        <path
                            d="M50 0v20c-16.569 0-30 13.431-30 30 0 16.569 13.431 30 30 30 16.569 0 30-13.431 30-30h20c0 27.614-22.386 50-50 50S0 77.614 0 50 22.386 0 50 0z">
                        </path>
                    </svg>
                </div>
                <h1>Havolalar mavjud emas</h1>
                <div>Yaratish menyusi orqali havola qo&#8216;shing.</div>
            </div>
        )
    }

    return (
        <table>
            <thead>
            <tr>
                <th>№</th>
                <th>Havola</th>
                <th>Bosildi</th>
                <th>Ochish</th>
            </tr>
            </thead>
            <tbody>
            {links.map((link, i) => {
                return (
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{link.link}</td>
                        <td>{link.clicks}</td>
                        <td>
                            <Link to={`/links/${link._id}`}>Ochish</Link>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}
