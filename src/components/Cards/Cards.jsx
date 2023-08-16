import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
  // props = { characters }
  //const { characters } = props
  return (
    <div>
      {characters.map((person) => {
        // person = { id, name, status, gender, origin, image,...}
        console.log(person.origin);
        return (
          <Card
            key={person.id}
            id={person.id} // le pasamos el id del personaje para luego ejecutar el onClose
            name={person.name}
            status={person.status}
            species={person.species}
            gender={person.gender}
            origin={person.origin.name}
            image={person.image}
            onClose={onClose} // le pasamos la función onClose creada en App.js
          />
        );
      })}
    </div>
  );
}