import { useNavigate } from "react-router-dom";

export default function NewsBlock({ className, id, src, alt })
{
    const navigate = useNavigate();

    const newsOnClick = () => {
        navigate(`/news/${id}`);
    }

    return (
        <div className={`news-block ${className}`} onClick={newsOnClick}>
            <img className={`news-img`} src={src} alt={alt}/>
        </div>
    );
}