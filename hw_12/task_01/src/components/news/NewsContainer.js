import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function NewsContainer()
{
    const { id } = useParams();
    const news = useSelector(state => state.find(currNews => currNews.id === +id));

    return (
        <div className="news-container">
            <img className="news-img" src={news.img} alt={news.alt}/>
            <h1>{news.title}</h1>
            <p className="news-content">{news.content}</p>
        </div>
    );
}