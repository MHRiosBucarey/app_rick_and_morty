import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import { useEffect, useState } from "react";
const Favorites = ({onClose}) => {
  const {myFavorites} = useSelector((state) => state);
  // const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  // const [aux, setAux] = useState(false)

  const handlerOrder = (event) => {
      const order = event.target.value;
      dispatch(orderCards(order)) // A o D
      // setAux(!aux)
    }
    const handlerFilter = (event) => {
      const filter = event.target.value;
      dispatch(filterCards(filter)) // male o female o ...
  }


  return (
    <>
    <div className="favorites__ordered">
      <select name="" id="" onChange={handlerOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
    </div>
    <div className="favorites__filter">
      <select name="" id="" onChange={handlerFilter}>
        <option value="Todos">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
      {myFavorites.map((char) => {
        return (
          <Card
            key={char.id}
            id={char.id} // le pasamos el id del charaje para luego ejecutar el onClose
            name={char.name}
            status={char.status}
            species={char.species}
            gender={char.gender}
            origin={char.origin.name}
            image={char.image}
            onClose={onClose}
          />
        );
      })}
    </>
  );
};

export default Favorites;
