import Category from "./Category";

export default function Categories({ className, onClick, categories, activeCatIndex })
{
    return (
        <div className={`categories ${className}`}>
            {
                categories.map((category, index) => {
                    return(
                        <Category key={index} onClick={onClick} index={index} name={category} isActive={activeCatIndex === index}/>
                    );
                })
            }
        </div>
    )
}