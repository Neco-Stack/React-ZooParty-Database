export interface AnimalCardProps {
    animal: {
        name: string; 
        species: string; 
        habitat: string; 
        lifespan: number; 
        diet: string; 
        funFacts: string[];
        emoji: string;
    }
}

const AnimalCard: React.FC<AnimalCardProps> = ({animal}) => {
    return (
        <div className="animal-card">
            <h2>{animal.emoji} {animal.name}</h2>
            <p><strong>Species:</strong>{animal.species}</p>
            <p><strong>Species:</strong>{animal.habitat}</p>
            <p><strong>Species:</strong>{animal.lifespan}</p>
            <p><strong>Species:</strong>{animal.diet}</p>
            <h3>Fun Facts:</h3>
            <ul>
                {animal.funFacts.map((fact, index) => (
                     <li key={index}>{fact}</li>
                ))}
            </ul>
        </div>
      );
}

export default AnimalCard


