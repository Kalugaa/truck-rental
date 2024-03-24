import styled from "styled-components"

export const Form = styled.form`
border: 1px solid #10182833;
    border-radius: 10px;
    min-height: 532px;
    padding: 24px;
    width: 448px;
    margin-top: 44px;
`

export const Title = styled.h3`
font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 8px;
`

export const Text = styled.p`
    color: #475467;
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 24px;
`
export const Input = styled.input`
    background-color: #f7f7f7;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.25;
    margin-bottom: 14px;
    outline: none;
    padding: 18px;
    width: 100%;

    opacity: 0.6;
    
    &:focus {
        opacity: 1;
    }

    
`

export const TextArea = styled.textarea`
    font-family: inherit;
    font-size: 16px;
    height: 114px;
    margin-bottom: 24px;
    resize: none;
    width: 100%;
     background-color: #f7f7f7;
      border: none;
    border-radius: 10px;
    padding: 18px;
opacity: 0.6;
    
    &:focus{
        opacity: 1;
        outline: none;
    }
`


const ErrorMsgWrapper = styled.div`
  color: #ff0000; /* Червоний колір тексту для помилки */
  font-size: 14px; /* Розмір шрифту */
  margin-top: 4px; /* Відступ зверху */
`;

export const SubmitButton = styled.button`
font-size: 16px;
    font-weight: 500;
    letter-spacing: -.01em;
    line-height: 1.5;
    outline: none;
    border: none;
    border-radius: 200px;
    color: #fff;
    padding: 16px 60px;
    background-color: rgba(228,72,72, 0.6);
     transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgb(228, 72, 72);
  }
  
`

export const ErrorMsg = ({ children }) => {
    return <ErrorMsgWrapper>{children}</ErrorMsgWrapper>;
};

