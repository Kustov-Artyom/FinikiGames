export type SearchCard = {
    id: number;
    title: string;
    date: string;
    image: string;
    tags: string[];
};

export type MoreBlock = {
    id: number;
    title: string;
    text: string;
};

export type SearchResultsData = {
    stories: SearchCard[];
    devBlocks: SearchCard[];
    more: MoreBlock[];
};
