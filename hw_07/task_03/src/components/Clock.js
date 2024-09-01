import { useEffect, useState } from 'react';

const timeApi = "http://worldtimeapi.org/api/timezone/Europe/Kyiv";

export default function Clock()
{
    async function updateTime()
    {
        let time = await getTime();

        setCurrTime(time);
    }

    async function getTime()
    {
            let response = await fetch(timeApi);
            const data = await response.json();
            const time = new Date(data.datetime).toLocaleTimeString();

            return time;
    }

    const [currTime, setCurrTime] = useState('Loading...');
    
    useEffect(() => {
        let clockHandler = setInterval(updateTime, 1000);

        return () => {
            clearInterval(clockHandler);
        }
    }, [currTime]);

    return (
        <div>
            <h3>Current Time: </h3>
            <h1>{currTime}</h1>
        </div>
    );
}