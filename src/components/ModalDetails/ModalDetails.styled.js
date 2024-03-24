import styled, { css } from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    border-radius: 20px;
    max-height: calc(100vh - 2%);
    overflow: auto;
    padding: 40px;
    position: relative;
    width: 982px;
    
`

export const CloseButton = styled.button`
border: none;
background-color: inherit;
`
export const Svg = styled.svg`
stroke: rgba(16, 24, 40, 1);
`
export const Header = styled.div`
display: flex;
flex-direction: column;
`

export const HeaderBlock = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: space-between;

&.details{
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
}
`

export const RatingLocation = styled.div`
display: flex;
gap: 16px;
`

export const ImgList = styled.ul`
display: flex;
    flex-wrap: wrap;
    gap: 16px;
    height: 310px;
    margin-bottom: 24px;
    overflow: auto;
    width: 100%;
`

export const ImgLayout = styled.li`
border-radius: 10px;
    height: 310px;
    overflow: hidden;
    width: 275px;
    
`
export const Img = styled.img`
object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 10%;

`

export const Text = styled.p`
    color: #475467;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 44px;
    max-height: 72px;
    overflow-y: auto;
 
  padding-right: 10px;
`
export const CategoryButton = styled.button`
background-color: initial;
    border: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    padding: 24px;
    outline: none;

    /* Стилі для активного стану */
  ${props =>
    props.color &&
    css`
      border-bottom: 5px solid ${props.color};
    `}

  /* Стилі при наведенні */
  &:hover {
    text-decoration: underline;
  }
`

export const Hr = styled.hr`
border-color:rgba(16, 24, 40, 0.2);
margin: 0;
`