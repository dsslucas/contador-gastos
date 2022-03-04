import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background: dodgerblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: 100vh
  }
  div{
    background: white;
    border-radius: 8px;
    text-align: center;
  }
  h1{
    margin: 10px;
  }

  @media only screen and (max-width: 768px){
    body{
      overflow: scroll;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`

//COntainer
export const Container = styled.div`
  max-width: 1360px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  box-sizing: border-box;

  &:before, &:after{
    content: "";
    display: table;
  }

  &:after{
    clean: both;
  }
`

//Linhas
export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;


  &:before, &:after{
    content: "";
    display: table;
  }

  &:after{
    clean: both;
  }

`

//Colunas
export const Column = styled.div`
  float: left;
  padding: .25rem;
  min-height: 1px;
  box-sizing: border-box;

  background: ${props => props.color};

  @media only screen and (min-width: 768px){
    width: ${props => (props.columnNumber ? props.columnNumber / 12 * 100 : 8.33)}%;
  }

  @media only screen and (max-width: 768px){

    width: ${props => (props.xs / 12 * 100)}%;

  }

`
export const CardWrapper = styled.div`
  overflow: hidden;
  padding-bottom: 5px;
  margin: 0px auto 0;

  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  @media only screen and (max-width: 768px){
    width: 100%
  }

`;

export const CardHeader = styled.header`
  padding-top: 8px;
  padding-bottom: 8px;
`;

export const CardHeading = styled.h1`
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`;

export const CardBody = styled.div`
  padding-right: 8px;
  padding-left: 8px;
`;

export const CardText = styled.span`
  background: yellow
`

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`;

export const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color 0.25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`;

export const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;
  font-size: 50px;

  &:hover {
    opacity: .95;
  }
`;

export const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`;

export const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`;

export const CardOptionsItem = styled.li`
  &:nth-of-type(n + 2) {
    margin-left: 16px;
  }
`;

export const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color 0.25s ease-in;

  &:hover {
    color: #777;
  }
`;