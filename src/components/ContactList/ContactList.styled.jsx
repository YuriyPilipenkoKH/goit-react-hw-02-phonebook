import styled, {  keyframes } from 'styled-components';
import baseLiStyles from '../ContactForm/ContactForm.styled';

const ulAnimation = keyframes`
    0% {
        transform: rotateX(-90deg)
    }
    70% {
        transform: rotateX(20deg) 
    }
    100% {
        transform: rotateX(0deg) 
    }

`


export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style-type: disc;


  font-size: 18px;
  font-weight: 500;
  margin: 0;
  padding: 0;
 
  animation: ${ulAnimation} 1s ease-in;  
`;

export const ListItem = styled.li`

  display: flex;
  flex-direction: column;
  gap: 8px;
  
  align-items: center;
  padding: 8px 10px;  
  list-style-type: disc;

  @media screen and (min-width: 768px) {
   flex-direction: row;
   justify-content: space-between;
    }
`;

export const ItemCard = styled.span`
  display: flex;
  align-items: center;
 min-height: 40px;
  border-radius: 10px;
  padding:4px 16px;
  font-weight: 600;
  color: var(--footer-text-color);
  background-color: var(--lauren);

  box-shadow: var(--shadow-four);    
`

export const ContactContainer = styled.div`
  position: relative;
  width: 320px;
  max-height: 480px;
  padding: 4px 2px;
  border: 3px solid var(--teal);
  border-radius: 10px;
  box-shadow: var(--shadow-four);
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
}

@media screen and (min-width: 768px) {
      width: 500px;
      padding: 4px 8px;
      max-height: 280px;
    }
`;

export const BtnDelete = styled.button`
   ${baseLiStyles};
   justify-content: center;
   width: 110px;
   cursor: pointer;
    transition: all 0.4s;

  &:hover,
  &:focus {
    outline:none;
    background-color: var(--green);
    color: var(--background-color);
    box-shadow: var(--shadow-two); 

    .cardSpan{
        color: var(--crimson);
        box-shadow: var(--shadow-two); 
    }
  }
`
