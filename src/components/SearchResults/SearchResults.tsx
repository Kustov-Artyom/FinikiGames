import { useMemo, useState } from "react";
import { searchResults } from "../../data/searchData";
import type { SearchCard } from "../../types/search";
import Card from "../Card/Card";
import "./SearchResults.css";

type TabId = "all" | "stories" | "dev";

const TABS: Array<{ id: TabId; label: string }> = [
    { id: "all", label: "Все" },
    { id: "stories", label: "Рассказы" },
    { id: "dev", label: "Блок разработчиков" }
];

export default function SearchResults() {
    const [activeTab, setActiveTab] = useState<TabId>("all");
    const [query, setQuery] = useState("Гирс");

    const cards = useMemo<SearchCard[]>(() => {
        if (activeTab === "stories") return searchResults.stories;
        if (activeTab === "dev") return searchResults.devBlocks;
        return [...searchResults.stories, ...searchResults.devBlocks];
    }, [activeTab]);

    return (
        <section className="search">
            <div className="search__container">

                <div className="search__head">
                    <h1 className="search__title">РЕЗУЛЬТАТЫ ПОИСКА</h1>
                    <p className="search__subtitle">
                        Показаны результаты поиска ({cards.length}) по запросу «{query}»
                    </p>
                </div>

                <div className="search__tabs" role="tablist" aria-label="Фильтр результатов">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            className={`tab ${activeTab === tab.id ? "active" : ""}`}
                            onClick={() => setActiveTab(tab.id)}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="line" />

                <div className="search__grid">
                    {cards.map((item) => (
                        <Card key={item.id} data={item} />
                    ))}
                </div>

                <div className="search__more">
                    <h2 className="search__moreTitle">БОЛЬШЕ РЕЗУЛЬТАТОВ</h2>

                    <div className="search__moreList">
                        {searchResults.more.map((block) => (
                            <div key={block.id} className="more__item">
                                <h3 className="more__title">{block.title}</h3>
                                <p className="more__text">{block.text}</p>
                            </div>
                        ))}
                    </div>

                    <button className="show-all" type="button">
                        Показать все
                    </button>
                </div>
            </div>
        </section>
    );
}
