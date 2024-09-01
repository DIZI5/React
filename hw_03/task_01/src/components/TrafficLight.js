export default function TrafficLight({ state })
{
    return (
        <div>
            <div style={{width: "50px", height: "50px", borderRadius: "50%", margin: "auto"}} className={state}></div>
        </div>
    );
}