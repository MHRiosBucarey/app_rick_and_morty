import "./Card.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {
  // props = {id, name, status, onClose ...}
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(!isFav);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(!isFav);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className="card_content">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {/* ejecutamos la función onClose pasandole como parametro el id del personaje a eliminar */}
      <button onClick={() => props.onClose(props.id)}>X</button>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin}</h2>
      <img src={props.image} alt={props.name} />
    </div>
  );
}
