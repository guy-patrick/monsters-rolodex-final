import "./card-list.styles.css";
import Card from "../card/card.component";

function CardList({ monsters }) {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
}

export default CardList;
