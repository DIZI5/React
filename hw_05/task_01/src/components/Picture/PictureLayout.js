import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function PictureLayout() {
  let picArray = 
  [
    {
      "id": 1,
      "name": "Guernica (1937)",
      "artist": "Pablo Picasso",
      "genre": "Anti-war, Expressionist",
      "description": "A large, emotionally charged painting depicting the horrors of war, inspired by the bombing of the Basque town of Guernica by Nazi Germany and Fascist Italy during the Spanish Civil War. It features fragmented figures, animals, and buildings rendered in a distorted cubist style, conveying a sense of chaos, violence, and suffering.",
      "url": "https://donttakefake.com/wp-content/uploads/2022/04/gernika-pikasso-dtf-magazine10-scaled.jpeg"
    },
    {
      "id": 2,
      "name": "Les Demoiselles d'Avignon (The Young Ladies of Avignon) (1907)",
      "artist": "Pablo Picasso",
      "genre": "Proto-Cubist",
      "description": "A groundbreaking work that challenged traditional European art conventions. Five nude female figures are depicted in a bold, angular style with primitivist influences, marking a significant departure from the realistic portrayal of the human form. This painting is considered a pivotal step toward Cubism.",
      "url": "https://arthive.com/res/media/img/orig/article/c2e/7567110@2x.jpg"
    },
    {
      "id": 3,
      "name": "The Weeping Woman (1937)",
      "artist": "Pablo Picasso",
      "genre": "Expressionist, Portrait",
      "description": "A series of emotionally charged paintings by Picasso featuring a woman in various stages of anguish. The distorted face, stark colors, and jagged lines evoke feelings of grief, despair, and vulnerability. This series is considered a powerful expression of the human capacity for suffering, particularly relevant in the context of the Spanish Civil War.",
      "url": "https://miro.medium.com/v2/resize:fit:800/1*iz1yrQE4txllek3fqCrEQw.jpeg"
    },
    {
      "id": 4,
      "name": "The Old Guitarist (1903-1904)",
      "artist": "Pablo Picasso",
      "genre": "Blue Period, Expressionist",
      "description": "A somber portrait of a gaunt, blind guitarist. The painting is dominated by blues and greens, characteristic of Picasso's Blue Period, which reflected his feelings of isolation and poverty during that time. The figure's slumped posture and melancholic expression convey a sense of despair and hardship.",
      "url": "https://www.artnews.com/wp-content/uploads/2021/06/Screen-Shot-2021-06-07-at-10.36.05-AM.png?w=513"
    },
    {
      "id": 5,
      "name": "La Vie (Life) (1903)",
      "artist": "Pablo Picasso",
      "genre": "Blue Period, Symbolist",
      "description": "A melancholic scene depicting a woman in a blue smock holding a child. The use of blues and greens, a hallmark of Picasso's Blue Period, creates a somber mood. The woman's downcast eyes and child's fragile form suggest themes of mortality, poverty, and the fragility of life.",
      "url": "https://arthive.com/res/media/img/oy800/article/196/7567105@2x.jpg"
    }
  ];

  let [pics, setPics] = useState(picArray);

  return (
    <Outlet context={[pics, setPics]}/>
  );
}