import { createStore } from "redux"
import { PRODUCT_ACTION_TYPES } from "./boilerState";

const products = [
    {
        id: 1,
        title: "Big Cat Paint by Numbers",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwb7a68afb/images/large/666774_1002_4_-adult-paint-by-numbers%20-big-cat.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwc3316fcc/images/large/666774_1002_1_-adult-paint-by-numbers%20-big-cat.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwc768da3e/images/large/666774_1002_2_-adult-paint-by-numbers%20-big-cat.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw57d06c02/images/large/666774_1002_3_-adult-paint-by-numbers%20-big-cat.jpg?q=80"
        ],
        info: "<p>Paint an incredible work of art with this <strong>Big Cat Paint by Numbers</strong>. It’s perfect for artists of all skill levels, giving you a numbered guide on how to use the colours included to bring a beautiful picture to life. </p><p>There are 14 paints included with the set, along with three brushes, so you can get started right away! </p><p>The paint by numbers board is printed with your design, with number coded details to guide you on where to apply the appropriate colour. The acrylic paints provide good coverage on the board, ensuring your finished piece looks its very best.</p><ul><li>Size: 39.5 x 29.5cm (15.6 x 11.6 inches) </li><li>Includes board, 14 paint pots and three brushes</li><li>Features printed design that is number coded to guide you</li><li>Ideal for all skill levels</li><li>Perfect for enjoying the art of painting!</li></ul><p><strong>Big Cat Paint by Numbers</strong></p>",
        price: "£5.25",
        category: "Paint"
    },
    {
        id: 2,
        title: "The Cottage Lighthouse Jigsaw Puzzle 1000 Pieces",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw8e8aaaa3/images/large/669982_1000_1_-the-cottage-lighthouse-1000-pieces-68X48CM-jigsaws.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwac700c75/images/large/669982_1000_2_-the-cottage-lighthouse-1000-pieces-68X48CM-jigsaws.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw7a4575da/images/large/669982_1000_3_-the-cottage-lighthouse-1000-pieces-68X48CM-jigsaws.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw91685279/images/large/669982_1000_4_-the-cottage-lighthouse-1000-pieces-68X48CM-jigsaws.jpg?q=80"
        ],
        info: "<p>Relax and unwind with this <strong>The Cottage Lighthouse Jigsaw Puzzle</strong>. </p><p> The stunning image of a cottage lighthouse by the water is sure to transport you to a place of peace and tranquillity. </p><p>The finished puzzle measures 68 x 48cm and it is made from high-quality recycled board. The puzzle pieces are thick and sturdy, and they fit together perfectly thanks to the Smart-Cut Technology. </p><p>For convenient puzzling, why not pop it into a specialised puzzle portfolio to show it off? The Puzzle Mates Portapuzzle Deluxe Puzzle Holder (available separately) will keep your puzzles tidy, making it easier than ever to store and move complete or incomplete jigsaw puzzles securely!</p><ul><li>Completed size: 68 x 48cm (26.5 x 19.25 inches) </li><li>Design by Dominic Davison </li><li>1000 pieces</li><li>Made from high-quality recycled board </li><li>Linen paper finished with an anti-glare coat</li><li>Smart-Cut Technology used to create pieces that fit together perfectly </li><li>100% recyclable product, environmentally friendly and non-toxic </li><li>Exclusive to Hobbycraft </li><li>Perfect for keen puzzlers!</li></ul><p><strong>The Cottage Lighthouse Jigsaw Puzzle 1000 Pieces </strong></p>",
        price: "£15.00",
        category: "Puzzles"
    },
    {
        id: 3,
        title: "Morning Deliveries Jigsaw Puzzle 1000 Pieces",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwfb42047f/images/large/669989_1000_1_-morning-delivery-1000-pieces-68X48CM-jigsaws.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwca46c832/images/large/669989_1000_2_-morning-delivery-1000-pieces-68X48CM-jigsaws.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwcf44272b/images/large/669989_1000_3_-morning-delivery-1000-pieces-68X48CM-jigsaws.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw0a5cec8c/images/large/669989_1000_4_-morning-delivery-1000-pieces-68X48CM-jigsaws.jpg?q=80"
        ],
        info: "<p>Step back in time with this <strong>Morning Deliveries Jigsaw Puzzle</strong>. This 1000-piece puzzle picture depicts a bustling bakery and grocery store scene. </p><p>Employees of the bakery and grocery store are getting delivery vans ready. In the foreground of the image, there are people walking across the cobblestone square. There is a woman with a baby stroller, a man postman out to deliver small parcels and a schoolboy in his uniform walking to his classes.</p><p>The finished puzzle measures 68 x 48cm and it is made from high-quality recycled board. The puzzle pieces are thick and sturdy, and they fit together perfectly thanks to the Smart-Cut Technology. </p><p>For convenient puzzling, why not pop it into a specialised puzzle portfolio to show it off? The Puzzle Mates Portapuzzle Deluxe Puzzle Holder (available separately) will keep your puzzles tidy, making it easier than ever to store and move complete or incomplete jigsaw puzzles securely!</p><ul><li>Completed size: 68 x 48cm (26.5 x 19.25 inches) </li><li>Design by Victor McLindon </li><li>1000 pieces</li><li>Made from high-quality recycled board </li><li>Linen paper finished with an anti-glare coat</li><li>Smart-Cut Technology used to create pieces that fit together perfectly </li><li>100% recyclable product, environmentally friendly and non-toxic </li><li>Exclusive to Hobbycraft </li><li>Perfect for keen puzzlers!</li></ul><p><strong>Morning Deliveries Jigsaw Puzzle 1000 Pieces </strong></p>",
        price: "£15.00",
        category: "Puzzles"
    },
    {
        id: 4,
        title: "Kraft Paper Roll 70cm x 8m",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwe53a81b2/images/large/651854_1000_1_-kraft-paper-roll-70cm-x-8m.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw898105f0/images/large/651854_1000_2_-kraft-paper-roll-70cm-x-8m.jpg?q=80",
        ],
        info: "<p>Get creative with your gift wrap with this&nbsp;<strong>Kraft Paper Roll</strong>! This simple paper roll provides the perfect blank canvas for personalised gift wrap designs, using paint, marker pens, glitter and other embellishments. </p><p>Whether you wish to illustrate your own unique patterns onto the paper or experiment with craft embellishments, it’s easy to make it your own! You can even use it as a fun art surface for drawing and colouring, with 70cm x 8m ready to roll out. </p><p>The paper will be easy to cut to any size you require, ready for every gift! </p><ul><li>Size: 70cm x 8m</li><li>Easy to cut and wrap</li><li>Great for decorating with marker pens, glitter, Posca pens, paint and embellishments</li><li>Perfect for crafting personalised gift wrap designs with a blank canvas</li></ul><p><strong>Kraft Paper Roll 70cm x 8m</strong></p>",
        price: "£3.30",
        category: "Paint"
    },
    {
        id: 5,
        title: "Elephant Colour-In Canvas",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw803d07ca/images/large/668028_1000_1_-colour-in-canvas-elephant.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw869b2df7/images/large/668028_1000_2_-colour-in-canvas-elephant.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwe10c2696/images/large/668028_1000_3_-colour-in-canvas-elephant.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw689c2ee5/images/large/668028_1000_4_-colour-in-canvas-elephant.jpg?q=80"
        ],
        info: "<p>With this <strong>Elephant Colour-in Canvas</strong>, create a colourful artwork that will look great hanging on your wall at home! </p><p>With a beautiful illustration outline printed onto a canvas, enjoy bringing the picture to life by colouring in between the lines. This is ideal for decorating with Posca pens, Promarkers, acrylic paints and more, with so many unique effects to create. </p><p>Choose from natural tones to eye-catchingly bright shades to make it a custom masterpiece! You can enjoy the calming, creative activity of colouring in a whole new way. </p><ul><li>Size: 25 x 30cm (9.8 x 11.8 inches) </li><li>Features a detailed illustrated outline</li><li>Add colour with pens, paints and more! </li><li>Display in your home once coloured</li><li>Perfect for creating personalised home décor!</li></ul><p><strong>Elephant Colour-In Canvas</strong></p>",
        price: "£3.00",
        category: "Paint"
    },
    {
        id: 6,
        title: "Revell VW Golf 1 GTI Model Kit 1:24",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwff146f6c/images/large/662213_1000_1_-vw-golf-1-GTI-assorted-124-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw3396cb65/images/large/662213_1000_2_-vw-golf-1-GTI-assorted-124-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw68381346/images/large/662213_1000_3_-vw-golf-1-GTI-assorted-124-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwa4d6fb25/images/large/662213_1000_4_-vw-golf-1-GTI-assorted-124-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwfcd7a843/images/large/662213_1000_5_-vw-golf-1-GTI-assorted-124-model-kit.jpg?q=80"
        ],
        info: "<p>The <strong>Revell VW Golf 1 GTI Model Kit</strong> will help you bring a piece of automotive history to life. In 1:24 scale, the model kit recreates a legendary vehicle in miniature. </p><p>The VW Golf 1 GTI, originally developed without the knowledge of the VW board and introduced at the 1975 IAA, revolutionised the car world. This affordable, powerful and everyday sports car could easily keep up with the expensive competition and quickly became an icon. </p><p>Included in this model kit is a faithfully reproduced body with typical wheel arch extensions, a separate movable hood, a multi-part detailed four-cylinder engine, a separate exhaust system, a detailed interior with instrument panel, seats and rear bench, a typical steering wheel, a faithfully reproduced dashboard for left-hand drive or right-hand drive versions, movable wheels, a large-scale front spoiler and rubber-like tyres. </p><p>The kit includes instructions, as well as authentic decals for various license plates. </p><ul><li>Length: 154mm</li><li>Scale: 1:24</li><li>121 parts</li><li>Skill level: 4 </li><li>Suitable for ages 10 years and over</li><li>Includes instructions and decals </li><li>Paint and glue not included</li><li>Features faithfully reproduced body and authentic details </li></ul><p><strong>Revell VW Golf 1 GTI Model Kit 1:24</strong></p>",
        price: "£24.75",
        category: "Model kits"
    },
    {
        id: 7,
        title: "Best Friends Paint by Numbers",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwa8a61f9e/images/large/666773_1000_1_-adult-paint-by-numbers-best-friends.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw47dc2f3e/images/large/666773_1000_2_-adult-paint-by-numbers-best-friends.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw67b366c5/images/large/666773_1000_3_-adult-paint-by-numbers-best-friends.jpg?q=80"
        ],
        info: "<p>Paint an incredible work of art with this <strong>Best Friends Paint by Numbers</strong>. It’s perfect for artists of all skill levels, giving you a numbered guide on how to use the colours included to bring a beautiful picture to life. </p><p>There are 14 paints included with the set, along with three brushes, so you can get started right away! </p><p>The paint by numbers board is printed with your design, with number coded details to guide you on where to apply the appropriate colour. The acrylic paints provide good coverage on the board, ensuring your finished piece looks its very best.</p><ul><li>Size: 39.5 x 29.5cm (15.6 x 11.6 inches) </li><li>Includes board, 14 paint pots and three brushes</li><li>Features printed design that is number coded to guide you</li><li>Ideal for all skill levels</li><li>Perfect for enjoying the art of painting!</li></ul><p><strong>Best Friends Paint by Numbers</strong></p>",
        price: "£5.25",
        category: "Paint"
    },
    {
        id: 8,
        title: "Revell Audi RS E-Tron GT Model Kit 1:24",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw96a31c3c/images/large/666928_1000_1_-revell-audi-rs-etron--gt-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw8167c619/images/large/666928_1000_2_-revell-audi-rs-etron--gt-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw10b539f5/images/large/666928_1000_3_-revell-audi-rs-etron--gt-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw40d30359/images/large/666928_1000_4_-revell-audi-rs-etron--gt-model-kit.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw29612d67/images/large/666928_1000_5_-revell-audi-rs-etron--gt-model-kit.jpg?q=80"
        ],
        info: "<p>This <strong>Revell Audi RS E-Tron GT Model Kit</strong> features the easy-click system, ideal for newer model makers. </p><p>This battery-powered sports car combines comfort, driving dynamics and sustainability in a unique design. With acceleration from 0 to 100 km/h in just 4.1 seconds, you can explore any road at breathtaking speed without causing a single CO2 emission. </p><p>The kit features a one-piece body and a moving front axle for realistic movement. With the innovative easy-click system, you can assemble the model quickly and easily by simply plugging the precisely manufactured components together. There are decals and stickers included to allow you to personalise the model to your liking. </p><p>The Audi RS e-tron GT easy-click system is a fun and challenging kit that has everything you need for a successful project. The illustrated, multilingual building instructions and the decals and stickers ensure that you can get started quickly and easily. </p><ul><li>Length: 209mm</li><li>Width: 91mm</li><li>Height: 59mm </li><li>71 parts </li><li>Scale: 1:24</li><li>Easy-click system </li><li>Suitable for ages 10 years and over </li><li>Includes stickers with license plates for D, NL, F, GB, B, A, CH, E, I and USA</li><li>Features illustrated, multilingual building instructions</li><li>One-piece body</li><li>Movable front axle</li></ul><p><strong>Revell Audi RS E-Tron GT Model Kit 1:24 </strong></p>",
        price: "£29.25",
        category: "Model kits"
    },
    {
        id: 9,
        title: "Revell Fast & Furious Dodge Charger Model Kit 1:25",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwd82c16b0/images/large/662106_1000_1_-fat-furious-dodge-charger_800.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw21a3b521/images/large/662106_1000_2_-fat-furious-dodge-charger_800.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw82e779ad/images/large/662106_1000_5_-fat-furious-dodge-charger_800.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwc3f236f7/images/large/662106_1000_6_-fat-furious-dodge-charger_800.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw1494f269/images/large/662106_1000_7_-fat-furious-dodge-charger_800.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw9ad8e545/images/large/662106_1000_8_-fat-furious-dodge-charger_800.jpg?q=80"
        ],
        info: "<p>The <strong>Revell Fast &amp; Furious Dodge Charger Model Kit</strong> is the perfect set for fans of the iconic Fast &amp; Furious franchise. </p><p>The Dodge Charger is the most popular vehicle in the Fast &amp; Furious series. Ever since the first film, the jet-black muscle car and Dominic Toretto have proven that nothing can match the displacement of a HEMI V8. </p><p>Recreate the car in accurate detail, with a detailed HEMI V8 engine, increased rear suspension and drag slick tyres. There is also an extensive decal sheet included. This kit is ideal for experienced model makers.</p><ul><li>Length: 216mm</li><li>Width: 81mm</li><li>Height: 57mm</li><li>117 parts</li><li>1:25 scale</li><li>Skill level: 5</li><li>Suitable for ages 13 years and over</li><li>Detailed HEMI V8 engine</li><li>Increased rear suspension and drag slick tyres</li><li>Extensive decal sheet</li></ul><p><strong>Revell Fast &amp; Furious Dodge Charger Model Kit 1:25</strong></p>",
        price: "£27.75",
        category: "Model kits"
    },
    {
        id: 10,
        title: "Modelcraft Essential Modelling Kit",
        imgs: [
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwe1328ee5/images/large/669827_1000_1_-shesto-esssential-model-tools-set.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwa34870ae/images/large/669827_1000_2_-shesto-esssential-model-tools-set.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw9ed07069/images/large/669827_1000_3_-shesto-esssential-model-tools-set.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwbb4da83c/images/large/669827_1000_4_-shesto-esssential-model-tools-set.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw1de4893e/images/large/669827_1000_5_-shesto-esssential-model-tools-set.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dwa539e947/images/large/669827_1000_6_-shesto-esssential-model-tools-set.jpg?q=80",
            "https://www.hobbycraft.co.uk/dw/image/v2/BHCG_PRD/on/demandware.static/-/Sites-hobbycraft-uk-master/default/dw7ce29977/images/large/669827_1000_7_-shesto-esssential-model-tools-set.jpg?q=80"
        ],
        info: "<p><strong>Modelcraft Essential Modelling Kit</strong> includes all the tools you need for scale modelling, rail, RC, wargaming and more. The tools come stored inside a handy zip case, perfect for modelling on the go. </p><p>The kit includes a flush cutter for precise cuts in plastic, soft metals and wire, as well as a hobby knife with three spare blades, a saber and keyhole saw blades. Mark and score using the scriber included, with five spare blades provided. </p><p>There are straight and angled tweezers in the set, perfect for picking and placing components. The pin vice included comes with five drill bits, suitable for plastics, soft metals and wood. </p><p>There is an LED screwdriver with six bits, perfect for a huge range of craft and hobby tasks. </p><p>The mouldline remover can be used for removing flash and mouldlines, and there is a half round file for smoothing and preparing surfaces, and a flexi abrasive that’s ideal for finishing and polishing. </p><p>Finally, there is a super fine brush with two replaceable tips and a lightweight body. </p><ul><li>Pack size: 29 x 19.5 x 2cm (11.4 x 7.7 x 0.8 inches) </li><li>Includes flush cutter, hobby knife with five blades, scriber with five blades, straight and angled tweezers, pin vice with five drill bits, LED screwdriver with six bits, mouldline remover, half-round file, flexi abrasive and super fine brush</li><li>Perfect for modelling on the go </li><li>Ideal for scale modelling, rail, RC, wargaming and more</li><p><strong>Modelcraft Essential Modelling Kit</strong></p>",
        price: "£45.00",
        category: "Model kits"
    },
];

let nextId = 11;

export const reducer = (state = products, action) => {
    switch (action.type)
    {
        case PRODUCT_ACTION_TYPES.ADD:
        {
            return [
                ...state,
                {
                    ...action.payload,
                    id: nextId++
                }
            ]
        }
        case PRODUCT_ACTION_TYPES.REMOVE:
        {
            return state.filter(el => el.id !== action.payload);
        }
        default:
        {
            return state;
        }
    }
}

export const store = createStore(reducer);