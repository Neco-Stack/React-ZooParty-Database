import animals from "../../data";
import AnimalCard from "../AnimalCard/AnimalCard";
const AnimalList: React.FC = () => {
    return (
        <div className="animal-list">
            {animals.map((animal, index) => (
               <AnimalCard key={index} animal= {animal} />
            ))}
        </div>
      );
}
 
export default AnimalList