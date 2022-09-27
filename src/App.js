import styled from "styled-components";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import CharacterContainer from "./components/CharacterContainer";
import { useState } from "react";



function App() {

  const [characters, setCharacters] = useState(null);

  const apiRequest = async () => {
    const api = await fetch(
      "https://simpsons-quotes-api.herokuapp.com/quotes?count=3"
    );
    const phrase = await api.json();
    setCharacters(phrase);
  };

  return (
    <Container>
      <Header />
      {!characters ? (
        <Welcome apiRequest={apiRequest} />
      ) : (
        <CharacterContainer characters={characters} apiRequest={apiRequest} />
      )}
    </Container>
  );
}

export default App;
