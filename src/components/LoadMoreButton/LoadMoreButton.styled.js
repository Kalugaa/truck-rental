import styled from "styled-components";


export const Layout = styled.div`
margin: 50px auto 15px auto;
max-width: 145px;
`
export const LoadMore = styled.button`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px;
letter-spacing: -0.08px;
cursor: pointer;

width: 100%;
height: 56px;
border-radius: 200px;
border: 1px solid rgba(71, 84, 103, 0.2);
background-color: inherit;
color: #101828;
transition: border 0.3s ease-in-out;

&:hover{
border: 1px solid rgba(228, 72, 72, 1)
}
`