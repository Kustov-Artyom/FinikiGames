import { useState } from "react";
import { searchResults } from "../../data/searchData";
import Card from "../Card/Card";
import "./SearchResults.css";

const TABS = [
    { id: "all", label: "Все" },
    { id: "stories", label: "Рассказы" },
    { id: "dev", label: "Блок разработчиков" }
];

function SearchResults() {
    const [activeTab, setActiveTab] = useState("all");

    const getCards = () => {
        if (activeTab === "stories") return searchResults.stories;
        if (activeTab === "dev") return searchResults.devBlocks;
        return [...searchResults.stories, ...searchResults.devBlocks];
    };

    return (
        <section className="search">
            <div className="d-flex justify-content-center flex-column align-items-center mb-5">
                <h1 className="search__title">РЕЗУЛЬТАТЫ ПОИСКА</h1>
                <p className="search__subtitle ">
                    Показаны результаты поиска (30) по запросу «Гирс»
                </p>
            </div>


            <div className="search__tabs mb-4 d-flex justify-content-center">
                {TABS.map(tab => (
                    <button
                        key={tab.id}
                        className={`tab ${activeTab === tab.id ? "active" : ""}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="line mb-5">

            </div>

            <div className="search__grid">
                {getCards().map(item => (
                    <Card key={item.id} data={item} />
                ))}
            </div>

            <div className="search__more">
                <h2>БОЛЬШЕ РЕЗУЛЬТАТОВ</h2>

                {searchResults.more.map(block => (
                    <div key={block.id} className="more__item">
                        <h3>{block.title}</h3>
                        <p>{block.text}</p>
                    </div>
                ))}

                <button className="show-all">Показать все</button>
            </div>
        </section>
    );
}

export default SearchResults;