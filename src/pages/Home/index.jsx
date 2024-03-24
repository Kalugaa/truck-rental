import React from 'react'
import camper from '../../images/camper.jpg'
import { Button, CategoryLink, Container, ContentWrapper, H2, Img, ImgWrapper, Layout, Title } from './Home.styled'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Container>
            <Title>Discover Your Next Adventure: Camper Rental Service</Title>
            <Layout>
                <ImgWrapper>
                    <Img src={camper} alt='camper' ></Img>
                </ImgWrapper>
                <ContentWrapper>
                    <H2>
                        Welcome to our Camper Rental Service!
                        Embark on your next adventure with our top-of-the-line campers, designed to take you on unforgettable journeys. Whether you're craving a weekend getaway or a cross-country road trip, our fleet of campers offers comfort, convenience, and freedom like never before.
                        Imagine waking up to the serene sounds of nature, stepping outside your cozy camper, and breathing in the crisp morning air. With our spacious and fully-equipped campers, every sunrise brings new possibilities for exploration and discovery.
                        Ready to hit the road? Booking your dream camper is just a click away. Reserve now and unlock a world of adventure!
                    </H2>
                    <Button>
                        <CategoryLink to='/catalog'>Book your fairytale trip right now</CategoryLink>
                    </Button>
                </ContentWrapper>
            </Layout>
        </Container>
    )
}

export default Home