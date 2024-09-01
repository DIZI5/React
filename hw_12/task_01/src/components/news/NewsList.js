import { useSelector } from "react-redux";
import NewsBlock from "./NewsBlock";
import { useEffect, useState } from "react";

export default function NewsList()
{
    const newsList = useSelector(state => state);
    const [visibleNews, setVisibleNews] = useState(1);
    const newsListLength = newsList.length;

    useEffect(() => {
        setInterval(() => {
            if (visibleNews < newsListLength)
            {
                setVisibleNews(visibleNews + 1);
            }
            else
            {
                setVisibleNews(1);
            }
        }, 5000)
    }, [visibleNews]);

    return (
        <div className="news-slider">
            <div className="news-slider-wrapper">
                {
                    newsList.map(item => {
                        return (
                            <NewsBlock className={item.id === visibleNews ? "news-visible" : "news-hidden"} key={item.id} id={item.id} src={item.img} alt={item.title} />
                        );
                    })
                }
            </div>
        </div>
    );
}