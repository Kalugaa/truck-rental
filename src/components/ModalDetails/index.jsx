
import { useState } from "react";
import svg from "../../assets/sprite.svg";
import { DetailsList, DetailsText, H2, Svg } from "../Camper/Camper.styled";
import { CategoryButton, CloseButton, Container, Header, HeaderBlock, Hr, Img, ImgLayout, ImgList, Text } from "./ModalDetails.styled";
import { Features } from "../Features";
import { Reviews } from "../Reviews";

export const ModalDetails = ({ item,
  close }) => {

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false)
  const [isReviewOpen, setIsReviewOpen] = useState(false)

  const { price } = item;
  const formattedPrice = price.toFixed(2)

  const toggleFeatures = () => {
    setIsFeaturesOpen(prevState => !prevState)
    setIsReviewOpen(false)
  }
  const toggleReview = () => {
    setIsReviewOpen(prevState => !prevState);
    setIsFeaturesOpen(false)
  }



  return (
    <Container >
      <Header>

        <HeaderBlock>
          <CloseButton onClick={close}>
            <Svg className="close" width={32} height={32}>
              <use href={`${svg}#icon-close`} />
            </Svg>
          </CloseButton>
          <H2>{item.name}</H2>
        </HeaderBlock>

        <HeaderBlock className="details">
          <DetailsList className="rating">
            <li>
              <DetailsText style={{ textDecoration: 'underline' }}>
                <Svg className="rating" width={16} height={16}>
                  <use href={`${svg}#icon-rating`} />
                </Svg>{item.rating}({item.reviews.length} Reviews)
              </DetailsText>
            </li>
            <li>
              <DetailsText>
                <Svg className="map" width={16} height={16}>
                  <use href={`${svg}#icon-map`} />
                </Svg> {item.location}</DetailsText>
            </li>
          </DetailsList>
          <H2>€{formattedPrice}</H2>
        </HeaderBlock>
      </Header>

      <ImgList>
        {item.gallery.map((el, idx) => (
          <ImgLayout key={idx} >
            <Img width={290} height={310} src={el} alt="camper" />
          </ImgLayout>
        ))}
      </ImgList>
      <Text>{item.description}</Text>
      <div>
        <CategoryButton color={isFeaturesOpen ? "rgba(228, 72, 72, 1)" : "inherit"} onClick={toggleFeatures}>Features</CategoryButton>
        <CategoryButton color={isReviewOpen ? "rgba(228, 72, 72, 1)" : "inherit"} onClick={toggleReview}>Reviews</CategoryButton>
      </div>
      <Hr />
      {isFeaturesOpen && <Features item={item} />}
      {isReviewOpen && <Reviews item={item} />}
    </Container >
  )
}
