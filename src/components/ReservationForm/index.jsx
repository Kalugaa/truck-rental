import "../../index.css"
import { Form, Title, Text, Input, TextArea, ErrorMsg, SubmitButton } from "./ReservationForm.styled" // Додайте стилі для відображення помилок
import { useState } from "react";
import Calendar from "../Calendar";

export const ReservationForm = () => {
    const [startDate, setStartDate] = useState(new Date())

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
        date: new Date()
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        comment: '',
        date: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Виконайте валідацію перед відправленням форми
        if (validateForm()) {
            // Ваш код для обробки відправки форми тут
            console.log("Form submitted successfully!");
        } else {
            console.log("Form validation failed!");
        }
    };

    const validateForm = () => {
        let valid = true;
        const { name, email, comment, date } = formData;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const errorsCopy = {
            name: '',
            email: '',
            comment: '',
            date: ''
        };

        if (!name.trim()) {
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if (!email.trim()) {
            errorsCopy.email = 'Email is required';
            valid = false;
        } else if (!emailRegex.test(email)) {
            errorsCopy.email = 'Invalid email address';
            valid = false;
        }

        if (date instanceof Date) {
            errorsCopy.date = 'Please provide valid date';
            valid = false;
        }

        if (!comment.trim()) {
            errorsCopy.comment = 'Comment is required';
            valid = false;
        }


        setErrors(errorsCopy);
        return valid;
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Title>Book your campervan now</Title>
            <Text>Stay connected! We are always ready to help you.</Text>
            {errors.name && <ErrorMsg>{errors.name}</ErrorMsg>}
            <Input name="name" placeholder="Name" type="text" value={formData.name} onChange={handleInputChange} required></Input>
            {errors.email && <ErrorMsg>{errors.email}</ErrorMsg>}
            <Input name="email" placeholder="Email" type="email" value={formData.email} onChange={handleInputChange} required></Input>
            {errors.date && <ErrorMsg>{errors.date}</ErrorMsg>}
            <Calendar value={startDate} date={startDate} setDate={setStartDate} />
            {errors.comment && <ErrorMsg>{errors.comment}</ErrorMsg>}
            <TextArea name="comment" placeholder="Comment" type="textarea" value={formData.comment} onChange={handleInputChange} required></TextArea>
            <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
    );
};