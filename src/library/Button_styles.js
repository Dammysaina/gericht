import Styled from "styled-components";

const Button = Styled.button`
background: #DCCA87
border: none;
border-radius: 5px;
height: 44px
width: ${(props) => props.buttonWidth};
color: #0C0B08;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 32px;
font-family: 'Cormorant Upright';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 175%;
/* identical to box height, or 28px */
letter-spacing: 0.04em;
cursor:pointer;
span {
    display: flex;
}
`;

export default Button;
