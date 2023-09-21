import styled from "styled-components";
import QRCodeImage from "../images/image-qr-code.png";

const QRBox = () => {
  return (
    <>
      <StyledBox />
    </>
  );
};

export default QRBox;

const StyledBox = styled.div`
  width: 288px;
  height: 288px;
  border-radius: 10px;
  background: #2c7dfa url(${QRCodeImage}) center/cover no-repeat;
  margin: 16px 16px auto 16px;
`;
