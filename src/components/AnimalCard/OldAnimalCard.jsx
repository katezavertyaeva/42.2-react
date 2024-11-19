import "./styles.css";

function AnimalCard({ animalName, animalSpecies, animalImage, children }) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImage} />
      {children}
    </div>
  );
}

export default AnimalCard;
