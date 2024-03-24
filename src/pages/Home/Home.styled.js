import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
`
export const Title = styled.h1`
margin-bottom: 36px;
text-align: center;
`

export const Layout = styled.div`
display: flex;
justify-content: center;
gap: 50px;
`
export const ImgWrapper = styled.div` 

width: 450px;
height: 450px;
border-radius: 20px;
overflow: hidden;
`

export const Img = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`
export const Button = styled.button`
border-radius: 50px;
background-color: rgba(228, 72, 72, 1);;
border: none;
padding: 32px  80px;

`

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
`

export const CategoryLink = styled(Link)`
text-decoration: none;
color: #FFFFFF;
font-size: medium;
`

export const H2 = styled.h2`
max-width: 550px;
align-self: flex-start;
margin-bottom: 50px;
font-size: 20px;

`