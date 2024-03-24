
import { RatingStars } from '../RatingStars'
import { ReservationForm } from '../ReservationForm'
import { Container, H4, HeaderContainer, ReviewsList, Span, Text } from './Review.styled';
export const Reviews = ({ item }) => {
    return (
        <Container>
            <div>
                <ReviewsList>
                    {item.reviews.map(review => {
                        return (<li key={item._id}>
                            <HeaderContainer >
                                <Span >{review.reviewer_name[0].toUpperCase()}</Span>
                                <div >
                                    <H4>{review.reviewer_name}</H4>
                                    <RatingStars rating={review.reviewer_rating} />
                                </div>
                            </HeaderContainer>
                            <Text>{review.comment}</Text>
                        </li>)
                    })}
                </ReviewsList>
            </div>

            <div>
                <ReservationForm />
            </div>
        </Container >
    )
}
