import React from 'react'
import camper from '../../images/camper.jpg'

const Home = () => {
    return (
        <div>
            <h1>Discover Your Next Adventure: Camper Rental Service</h1>
            <div style={{
                display: 'flex',
                gap: 10,
            }}>
                <img src={camper} alt='camper' width="550px"></img>
                <h2>
                    Welcome to our Camper Rental Service!
                    Embark on your next adventure with our top-of-the-line campers, designed to take you on unforgettable journeys. Whether you're craving a weekend getaway or a cross-country road trip, our fleet of campers offers comfort, convenience, and freedom like never before.
                    Imagine waking up to the serene sounds of nature, stepping outside your cozy camper, and breathing in the crisp morning air. With our spacious and fully-equipped campers, every sunrise brings new possibilities for exploration and discovery.
                    Ready to hit the road? Booking your dream camper is just a click away. Reserve now and unlock a world of adventure!
                </h2>
            </div>
        </div>
    )
}

export default Home