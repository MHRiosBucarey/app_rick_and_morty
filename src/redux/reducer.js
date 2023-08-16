import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [], // [char1, char2, char3]
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ), // [char1, cha2] eliminamos char3
      };
    case FILTER:
      const filterByGender = state.allCharacters.filter((char) => {
        if (char.gender === action.payload) {
          return true;
        } else if (action.payload === "Todos") {
          return true;
        }
        return false
      });
      return {
        ...state,
        myFavorites: filterByGender,
      };
    // case FILTER:
    //     return {...state, favorites: state.allCharacters.filter(char => {
    //         if(char.gender === action.payload){
    //             return true
    //         } else if(action.payload === 'Todos'){
    //             return true;
    //         }
    //     })}
    case ORDER:
      // let ordered;
      //
      // if(action.payload === 'A') {
      //     ordered = state.allCharacters.sort((a,b) => {return a.id - b.id;});
      //     } else {ordered = state.allCharacters.sort((a,b) => {return b.id - a.id;});
      //     }
      const ordered = state.allCharacters.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
        return 0;
      });
      return {
        ...state,
        myFavorites: ordered,
      };
    default:
      return state;
  }
};

export default rootReducer;
