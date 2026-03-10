import React, { useState, useEffect } from 'react';

function Clock({color}){

    const [time, setTime] = useState(0);

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }, []);

    return(
        <div>
            <h1 style={{color:color,background:'black',width:'210px',borderRadius:'5px',padding:"20px",margin:"10px"}}>{time}</h1>

        </div>
    )
}

export default Clock;