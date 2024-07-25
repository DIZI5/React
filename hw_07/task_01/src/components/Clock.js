import { useEffect, useState } from 'react';

export default function Clock()
{
    function updateTime()
    {
        setCurrTime(new Date().toLocaleTimeString());
    }

    const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
        let clockHandler = setInterval(updateTime, 1000);

        return () => {
            clearInterval(clockHandler);
        }
    }, [currTime]);

    return (
        <div>
            <h1>Current Time: </h1>
            <h2>{currTime}</h2>
        </div>
    );
}