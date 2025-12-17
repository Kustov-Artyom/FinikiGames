import "./Card.css";
import type { SearchCard } from "../../types/search";

type CardProps = {
    data: SearchCard;
};

export default function Card({ data }: CardProps) {
    return (
        <article className="card">
            <img className="card__image" src={data.image} alt={data.title} />

            <div className="card__info">
                <span className="card__date">{data.date}</span>
                <h3 className="card__title">{data.title}</h3>

                <div className="card__tags" aria-label="Теги">
                    {data.tags.map((tag) => (
                        <span key={tag} className="card__tag">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}
