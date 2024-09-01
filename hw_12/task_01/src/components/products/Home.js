import { Provider } from "react-redux"
import { newsStore } from "../store/newsStore";
import { store } from "../store/store";
import NewsList from "../news/NewsList";
import ProductList from "./ProductList";

export default function Home({ category })
{
    return (
        <div>
            <Provider store={newsStore}>
                <NewsList />
            </Provider>

            <Provider store={store}>
                <ProductList category={category}/>
            </Provider>
        </div>
    );
}