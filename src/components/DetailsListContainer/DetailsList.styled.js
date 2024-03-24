import styled from "styled-components";

export const Svg = styled.svg`
fill: #101828;
stroke: currentColor;

&.transmission, &.kitchen, &.beds, &.map{
    stroke: #000;
    fill: #fff;
}
&.gas, &.ac, &.toilet, &.fire{
    stroke: none;
}`

export const DetailsList = styled.ul`

list-style: none;
display: flex;
gap: 8px;
flex-wrap: wrap;
width: 100%;


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
`