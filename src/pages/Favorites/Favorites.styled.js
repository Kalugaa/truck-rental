import { Link } from "react-router-dom";
import styled from "styled-components";

export const MessageContainer = styled.div`
margin-top: 300px;
`

export const H1 = styled.h1`
font-size: 25px;
text-align: center;
`

export const HomeLink = styled(Link)`
text-decoration: none;
color: #E44848;
transition: opacity 0.3s ease-in-out;

&:hover{ 
    opacity: 0.5;}
`