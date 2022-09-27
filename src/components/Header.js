import styled from "styled-components";

export default function Header() {
  return (
    <div>
      <Title>The Best Phrases of Simpsons</Title>
    </div>
  );
}

const Title = styled.h1`
    color: #e76f51;
    text-align: center;
`;