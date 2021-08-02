import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
// import infoImage  from '../../images/svg-1.svg';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtile,
  ImgWrapper,
  Img,
} from "./infoSection.element";

export const infoSection = ({
    primary,
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    buttonLabel,
    description,
    headLine,
    topLine,
    start,
    alt,
    img
  }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtile lightTextDesc={lightTextDesc}>{description}</Subtile>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt='InfoGraphic' />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default infoSection;
