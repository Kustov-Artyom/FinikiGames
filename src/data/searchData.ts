import type { SearchResultsData } from "../types/search";

export const searchResults: SearchResultsData = {
    stories: [
        {
            id: 1,
            title: "Гирс",
            date: "02.10.2025",
            image: "/img/girs.png",
            tags: ["#гирс"]
        },
        {
            id: 2,
            title: "Супер сила гирс",
            date: "02.10.2025",
            image: "/img/girs.png",
            tags: ["#гирс", "#супер_сила"]
        },
        {
            id: 3,
            title: "Гирс",
            date: "02.10.2025",
            image: "/img/girs.png",
            tags: ["#гирс"]
        }
    ],
    devBlocks: [
        {
            id: 4,
            title: "Создание гирс",
            date: "02.10.2025",
            image: "/img/girs.png",
            tags: ["#гирс", "#супер_сила"]
        }
    ],
    more: [
        {
            id: 5,
            title: "История голубого подразделения",
            text: "Глубокое погружение в элитный отряд..."
        },
        {
            id: 6,
            title: "История создания",
            text: "Разработка игры Arcane Crystals началась..."
        },
        {
            id: 7,
            title: "Новый эвент",
            text: "Особенность этого эвента — участие героини Гирс..."
        }
    ]
};
