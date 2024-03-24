import styled from "styled-components";

export const LiItem = styled.li`
width: 888px;
height: 358px;
border-radius: 20px;
border: 1px solid black;
margin-bottom: 32px;
list-style: none;
`

export const H2 = styled.h2`
font-size: 24px;
    font-weight: 600;
    line-height: 1.25;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Container = styled.div`
padding: 24px;
display: flex;
gap: 24px;
overflow: hidden;
`

export const ImgLayout = styled.div`
min-width: 290px;
height: 310px;
overflow: hidden;

`

export const Img = styled.img`
object-fit:cover; 
width: 100%;
height: 100%;
border-radius: 10%;
`

export const Header = styled.div``

export const HeaderLayout = styled.div`
display: flex;
width: 526px;
justify-content: space-between;

`
export const PriceContainer = styled.div`
display: flex;
`

export const Main = styled.div`
margin-top: 24px;
display: flex;
flex-direction: column;
gap: 24px;
`

export const Description = styled.h3`
white-space: nowrap;
overflow: hidden; 
text-overflow: ellipsis; 
max-width: 525px;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
margin: 0;
`

export const DetailsList = styled.ul`
display: flex;
gap: 16px;
font-size: 16px;
line-height: 1.5;
`

export const DetailsListItem = styled.li`
    align-items: center;
    background-color: #f2f4f7;
    border-radius: 100px;
    color: #101828;
    display: flex;
    font-size: 16px;
    font-weight: 500;
    gap: 8px;
    justify-content: center;
    line-height: 1.25;
    padding: 12px 18px;
`

export const DetailsText = styled.span`
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
&.underline{
text-decoration: underline;
}`
export const ShowMoreBtn = styled.button`
cursor: pointer;
width: 166px;
height: 56px;
padding: 16px 40px 16px 40px;
border-radius: 200px;
border: none;
color: #FFFFFF;
 background-color: rgba(228,72,72, 0.6);
     transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(228, 72, 72);
  }
`

export const Svg = styled.svg`
fill: #101828;
stroke: currentColor;

&.transmission, &.kitchen, &.beds, &.map{
    stroke: #000;
    fill: #fff;
}
&.gas, &.ac, &.toilet, &.fire{
    stroke: none;
}

&.rating{
    fill: #FFC531;
    stroke: none;
}
&.close{
    stroke: rgba(16, 24, 40, 1);
}

&.favorite{
    fill: none;
    stroke: rgba(16, 24, 40, 1);
transition: stroke 0.2s ease-in-out;
    
}
&.favorite:hover{
     stroke: rgba(16, 24, 40, 0.5);
}

`
export const FavoriteButton = styled.button`
align-items: center;
    background-color: initial;
    border: none;
    display: flex;
    justify-content: center;
    outline: none;
`