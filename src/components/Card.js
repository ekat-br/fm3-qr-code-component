import styled from "styled-components";
import QRBox from "./QRBox";

const Card = () => {
  return (
    <CardContainer>
      <StyledCard>
        <QRBox />
        <Info>
          <Title>Improve your front-end skills by building projects</Title>
          <Description>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </Description>
        </Info>
      </StyledCard>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 320px;
  height: 497px;
  border-radius: 20px;
  background: var(--White, #fff);
  box-shadow: 0px 25px 25px 0px rgba(0, 0, 0, 0.05);
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  width: 288px;
  height: 129px;
  margin: 24px 16px 40px 16px;
`;

const Title = styled.h2`
  width: 288px;
  color: var(--Dark-Navy, #1f314f);
  text-align: center;
  font-family: Outfit;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

const Description = styled.p`
  font-family: Outfit;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.188px;
  color: var(--Grey, #7d889e);
  text-align: center;
  width: 256px;
  margin: 0;
`;
