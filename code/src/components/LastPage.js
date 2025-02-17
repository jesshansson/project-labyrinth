import { CardContainer, StyledButton } from 'GlobalStyles';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import stars from '../images/stars1.png'

export const LastPage = () => {
  const gameProps = useSelector((store) => store.maingame.gameProps)
  const username = useSelector((store) => store.maingame.username);

  return (
    <CardContainerLastPage>
      <LastPageHeader>Well done, {username}</LastPageHeader>
      <LastPageText>{gameProps.description}</LastPageText>
      <LastPic src={stars} alt="stars" />
      <StyledButton onClick={() => window.location.reload(false)}>Restart</StyledButton>

    </CardContainerLastPage>

  )
}

const CardContainerLastPage = styled(CardContainer)`
`

const LastPageText = styled.p`
  margin-bottom: 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  width: 80%
`
const LastPic = styled.img`
margin-bottom: 40px;
  `

const LastPageHeader = styled.h1`
  font-size: 40px;
  font-family: 'Caveat', cursive;
  margin-bottom: 10px;
`

// const LastImg = styled.img``