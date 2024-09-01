import { NEWS_ACTION_TYPES } from "./boilerState";
import { createStore } from "redux";

const initialNews = [
    {
        id: 1,
        title: "Discover the Ultimate Summer Fun with Crayola: A Burst of Color for Kids!",
        content: "Discover an array of colorful and exciting activities for children this summer with Crayola's innovative art supplies. Crayola has always been a trusted name in sparking creativity in young minds, and this summer is no exception. From vibrant markers and crayons to unique craft kits and coloring books, Crayola offers endless possibilities to engage your child's imagination. Whether your child loves drawing, painting, or crafting, Crayola has the perfect tools to keep them entertained and inspired. With a wide variety of products designed to cater to different age groups and interests, Crayola ensures that every child can find something they love. Perfect for rainy days or outdoor fun, Crayola's products are safe, non-toxic, and easy to use, making them ideal for children of all ages. This summer, let your child's creativity run wild with Crayola's high-quality art supplies and watch as they create their own masterpieces. Visit our website for more details and get ready to unleash your child's inner artist this summer!",
        img: "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Library-Sites-hobbycraft-uk-content/default/dw84c33b15/images/hp/2024/WK-22/hp-banner-summer-kids-crayola-24-lg.jpg?sw=1600&q=90",
    },
    {
        id: 2,
        title: "Huge Art Sale at Craft Products: Unleash Your Creativity with Incredible Discounts!",
        content: "Craft Products is excited to announce a massive art sale, offering incredible discounts on a wide range of art supplies. Whether you're a professional artist, a passionate hobbyist, or just getting started, this is the perfect opportunity to stock up on high-quality materials at unbeatable prices. Our sale features everything from premium paints and brushes to sketchbooks, canvases, and more, ensuring you have all the tools you need to bring your creative visions to life. Discover top brands and enjoy savings on essential art supplies, perfect for experimenting with new techniques or simply replenishing your collection. Don't miss out on this limited-time offer to elevate your artistic projects without breaking the bank. Visit our website to explore the full range of discounted products and take advantage of these amazing deals. Unleash your creativity with Craft Products and make the most of our spectacular art sale today!",
        img: "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Library-Sites-hobbycraft-uk-content/default/dw90837689/images/hp/2024/WK-22/hp-banner-art-sale-lg.jpg?sw=1600&q=90",
    },
    {
        id: 3,
        title: "Get Ready for Back to School with Craft Products: Everything You Need for a Creative Start!",
        content: "Craft Products is excited to announce a massive art sale, offering incredible discounts on a wide range of art supplies. Whether you're a professional artist, a passionate hobbyist, or just getting started, this is the perfect opportunity to stock up on high-quality materials at unbeatable prices. Our sale features everything from premium paints and brushes to sketchbooks, canvases, and more, ensuring you have all the tools you need to bring your creative visions to life. Discover top brands and enjoy savings on essential art supplies, perfect for experimenting with new techniques or simply replenishing your collection. Don't miss out on this limited-time offer to elevate your artistic projects without breaking the bank. Visit our website to explore the full range of discounted products and take advantage of these amazing deals. Unleash your creativity with Craft Products and make the most of our spectacular art sale today!",
        img: "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Library-Sites-hobbycraft-uk-content/default/dwcba879a7/images/hp/2024/WK-22/hp-banner-back-to-school-lg.jpg?sw=1600&q=90",
    },
    {
        id: 4,
        title: "New Wedding Essentials at Craft Products: Create Your Perfect Day with Our Exclusive Collection!",
        content: "Celebrate your special day with Craft Products’s stunning new collection of wedding essentials. From elegant decorations and bespoke stationery to beautiful DIY craft kits, our range is designed to help you create a memorable and personalized wedding experience. Discover a variety of high-quality products to bring your wedding vision to life, whether you're planning a grand affair or an intimate gathering. Our new collection features everything you need for a flawless event, including floral arrangements, table settings, and creative accents that add a unique touch to your celebration. Explore our exclusive selection and find inspiration to make your wedding day truly extraordinary. Visit our website to browse the full range of wedding essentials and take advantage of our special offers. Make your wedding unforgettable with Craft Products’s exquisite new collection!",
        img: "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Library-Sites-hobbycraft-uk-content/default/dw57f2b41a/images/hp/2024/WK-21/2880x930-new-wedding-lg.jpg?sw=1600&q=90",
    },
];

let nextId = 5;

export const reducer = (news = initialNews, action) =>
{
    switch (action.type)
    {
        case NEWS_ACTION_TYPES.ADD:
        {
            return [
                    ...news,
                    {
                        ...action.payload,
                        id: nextId++
                    }
                ];
        }
        case NEWS_ACTION_TYPES.REMOVE:
        {
            return news.filter(item => item.id !== action.payload);
        }
        default:
        {
            return news;
        }
    }
}

export const newsStore = createStore(reducer);