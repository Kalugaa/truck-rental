import styled from "styled-components";

export const Form = styled.form`
width:360px;
`
export const Input = styled.input`
    background-color: #f7f7f7;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.25;
    outline: none;
    padding: 18px 18px 18px 44px;
    width: 100%;
    color: rgba(16, 24, 40);
    opacity: 0.6;
    
    &:focus {
        opacity: 1;
    }
`

export const Label = styled.label`
color: #10182899;
    display: block;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    position: relative;
    margin-bottom: 32px;
    width: 100%;
    min-width: 150px;
`

export const Svg = styled.svg`
fill: #fff;
stroke: currentColor;
&.map{
    left: 18px;
    position: absolute;
    bottom: 18px;
}

`
export const Text = styled.p`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;
color: rgba(71, 84, 103, 1);
margin-bottom: 14px;
`

export const FilterTitle = styled.h2`
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: left;
margin-bottom: 24px;

`

export const Hr = styled.hr`
border-color: rgba(16, 24, 40, 0.1);
margin-bottom: 24px;
`

export const FilterList = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 10px;
margin-bottom: 32px;

&.vehicle-type{
    margin-bottom: 64px ;
}
`

export const FilterListItem = styled.li`

`

export const CheckboxLabel = styled.label`
align-items: center;
    border: 1px solid #10182833;
    border-radius: 10px;
    color: #101828;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    height: 95px;
    justify-content: center;
    line-height: 1.25;
    row-gap: 8px;
    text-align: center;
    width: 112px;
`

export const Checkbox = styled.input` 
   transition: border-color 0.3s ease-in-out;
    display: none;

&:checked:hover ~ ${CheckboxLabel}{
     border-color: rgba(228, 72, 72, 1)}

    &:checked + ${CheckboxLabel}{
        border-color: rgba(228, 72, 72, 1);
    }
     &:hover + ${CheckboxLabel}{
        border-color: rgba(228, 72, 72, 0.5);
    }
    `

export const RadioBtn = styled(Checkbox)``

export const SubmitButton = styled.button`
cursor: pointer;
width: 166px;
height: 56px;
padding: 16px 40px 16px 40px;
border-radius: 200px;
border: none;
color: #FFFFFF;
margin-bottom: 15px;
 background-color: rgba(228,72,72, 0.6);
     transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(228, 72, 72);
  }
`

export const ResetFilterButton = styled.button`
display: block;
cursor: pointer;
width: 90px;
height: 30px;
border-radius: 200px;
border: none;
color: #FFFFFF;
align-self: center;
 background-color: rgba(228,72,72, 0.6);
     transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(228, 72, 72);
  }
`