import styled from "styled-components";
import Logo from "../images/the-simpson.png";

export default function Welcome(props) {
  const { apiRequest } = props;

  return (
    <ContentLogo>
      <WelcomeText>
        Welcome to the Simpsons Phrases, click on the image
      </WelcomeText>
      <ImageLogo
        src={Logo}
        alt="The Simpsons"
        onClick={apiRequest}
      />
    </ContentLogo>
  );
}

const ImageLogo = styled.img`
  width: 450px;
  height: auto;
  &:hover {
    cursor: pointer;
  }
`;

const ContentLogo = styled.div`
  width: 100%;
  text-align: center;
`;

const WelcomeText = styled.p`
  color: #2a9d8f;
  text-align: center;
  font-weight: 900;
  padding: 50px 0 10px 0;
  font-size: 25px;
`;
