import { Box, Container, Typography } from "@mui/material";
import Character from "../mod/Character";
import CharactreSkeleton from "../mod/CharacterSkeleton";
import { useEffect, useState } from "react";

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 4000));

const Practica = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await fakePromise();
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" textAlign="center" mb={3}>
        Rick and Morty
      </Typography>
      <Box sx={{ display: "grid", gap: "2", maxWidth: 250, mx: "auto" }}>
        {loading
          ? Array.from(new Array(3)).map((_, item) => (
              <CharactreSkeleton key={item} />
            ))
          : characters.map((character) => (
              <Character
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
      </Box>
    </Container>
  );
};

export default Practica;
