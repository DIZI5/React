export default function Category({ onClick, index, name, isActive })
{
    return (
        <div onClick={() => onClick(index)} className={`category ${isActive ? "active" : null}`}>
            <h3>{name}</h3>
        </div>
    )
}