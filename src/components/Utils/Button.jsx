import React from 'react'
import styled from "styled-components";

function Button(props) {
    const ButtonMe = styled.a`
    background-color: #55e6a5;
    color: #02050a;
    justify-content: center;
    align-items: center;
    display: flex;
    display: inline-block;
    padding: 20px 40px;
    margin-right:30px;
    cursor:pointer;
    &:hover{
        color:white;
        background-color:#141c27;
        transition:0.3s;
    }
  `;
  return (
   <ButtonMe>{props.children}</ButtonMe>
  )
}

export default Button