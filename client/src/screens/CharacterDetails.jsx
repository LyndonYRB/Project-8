import { useState, useEffect } from "react";
import { deleteCharacter, getCharacter } from "../services/characters";
import { Link, useParams, useNavigate } from "react-router-dom";

import React from "react";

export default function CharacterDetails() {
  const [character, setCharacter] = useState({});
  let { id } = useParams();
  let navigate = useNavigate()

  useEffect(() => {
    const fetchCharacter = async () => {
      let thisCharacter = await getCharacter(id);
      setCharacter(thisCharacter);
    };
    fetchCharacter();
  }, [id]);

  return (
    <div>
      <h1>{character.name}</h1>
      <span>{character.image} </span>
      <span>{character.firstAppearance} </span>
      <span>{character.goodGuy} </span>
      <span>{character.species} </span>
      <p>{character.description} </p>
      <div>
        <button>
          <Link to={`/characters/${character._id}/edit`}> Edit Character </Link>
        </button>
        <button
          onClick={() => {
            deleteCharacter(character._id);
            navigate("/characters", { replace: true });
          }}>
          {" "}
          Delete Character{" "}
        </button>
      </div>
    </div>
  );
}
