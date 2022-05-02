import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

export const ReactWobble = ({ scaleX, scaleY, speed, content }) => {


    if (!scaleX) scaleX = 20
    if (!scaleY) scaleY = 35
    if (!speed) speed = 5

  const [directionX, setDirectionX] = useState("");
  const [directionY, setDirectionY] = useState("");

  useEffect(() => {
    let newX = Math.floor(Math.random() * (scaleX - -scaleX)) + -scaleX;
    newX >= 0 && newX++;
    let newY = Math.floor(Math.random() * (scaleY - -scaleY)) + -scaleY;
    newY == 0 && newY++;

    setDirectionX(newX);
    setDirectionY(newY);
  }, []);

  useEffect(() => {
    const directionInterval = setInterval(() => {
      let newX = Math.floor(Math.random() * (scaleX - -scaleX)) + -scaleX;
      newX >= 0 && newX++;
      let newY = Math.floor(Math.random() * (scaleY - -scaleY)) + -scaleY;
      newY == 0 && newY++;

      setDirectionX(newX);
      setDirectionY(newY);
    }, speed * 1000);

    return () => {
      clearInterval(directionInterval);
    };
  }, []);

  const pulse = keyframes`
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(${directionX}%, ${directionY}%);
  }
  100% {
    transform: translate(0%, 0%);
  }
`;

  const animation = (props) =>
    css`
      ${pulse} ${props.animationLength} infinite ease-in-out ${speed}s;
    `;

  const WobbleDiv = styled.div`
    animation: ${animation};
  `;

  console.log({directionX, directionY})
  return <WobbleDiv style={{display: "inline-block"}}>{content}</WobbleDiv>;
};
