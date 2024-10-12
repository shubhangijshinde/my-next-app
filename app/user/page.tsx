import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {

    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    let users : User[] = await result.json();

    return (
        <div className="p-14 mb-5 text-1xl font-bold">
            <h1 className='underline'>User List</h1>
            <table className="border-separate border border-slate-500 ...">
                <thead>
                    <tr>
                        <th className="border border-slate-600 ...">User Id</th>
                        <th className="border border-slate-600 ...">Name</th>
                        <th className="border border-slate-600 ...">Email Id</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item) => {
                        return <tr>
                            <td className="border border-slate-700 ...">{item.id}</td>
                            <td className="border border-slate-700 ...">{item.name}</td>
                            <td className="border border-slate-700 ...">{item.email}</td>
                        </tr>
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage
