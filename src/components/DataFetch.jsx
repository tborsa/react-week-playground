import Axios from 'axios';
import React, {useEffect, useState} from 'react'

export default function DataFetch({userId}) {
    const [userInfo, setUserInfo] = useEffect();

    useEffect(() => {        
        Axios.get(`backend/user/${userId}`)
        .then(res => {
            setUserInfo(res.data);
        })
    }, [userId]);

    return (
        <div>
            <h2>User Details</h2>
        </div>
    )
}
