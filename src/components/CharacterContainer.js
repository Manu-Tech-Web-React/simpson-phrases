import styled from "styled-components";
import Character from "./Character";

export default function CharacterContainer(props) {
    const { characters, apiRequest } = props;
    console.log(characters);
    return (
      <>
        <ContainerCharacter>
          {characters.map((character, index) => (
            <Character dataCharacter={character} key={index} />
          ))}
        </ContainerCharacter>
        <ContainerButton>
          <Button onClick={apiRequest}>Click For New Characters</Button>
        </ContainerButton>
      </>
    );
};

const ContainerCharacter = styled.div`
    display: flex;
`;

const ContainerButton=styled.div`
  width: 100%;
  text-align: center;
`;

const Button =styled.button`
  width: 250px;
  background-color: #e76f51;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding 10px 20px;
  font-size: 18px;
  margin-top: 40px;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background-color: #1c0950;
  }
`;