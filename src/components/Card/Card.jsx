import "./Card.css";

function Card({ data }) {
    return (
        <article className="card">
            <img src={data.image} alt={data.title} />
            <div className="card__info">
                <span className="card__date">{data.date}</span>
                <h3>{data.title}</h3>
                <div className="card__tags">
                    {data.tags.map(tag => (
                        <span key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default Card;