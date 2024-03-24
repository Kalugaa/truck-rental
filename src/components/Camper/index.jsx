import { useState } from "react";
import { Container, Description, DetailsList, DetailsText, FavoriteButton, H2, Header, HeaderLayout, Img, ImgLayout, LiItem, Main, PriceContainer, ShowMoreBtn, Svg } from "./Camper.styled";
import { ModalBackdrop } from "../ModalBackdrop";
import { ModalDetails } from "../ModalDetails";
import svg from "../../assets/sprite.svg"
import { DetailsListContainer } from "../DetailsListContainer";
import { useDispatch, useSelector } from "react-redux";
import { getFavorites } from "../../redux/favorites/selectors";
import { addFavorites, removeFavorites } from "../../redux/favorites/favoritesSlice";

const Camper = ({ camper }) => {
    const dispatch = useDispatch()
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen((prevModalOpen) => !prevModalOpen);
    };

    const favorites = useSelector(getFavorites);

    const idx = favorites.findIndex((el) => el._id === camper._id);
    const handleFavorite = () => {
        if (idx === -1) {
            dispatch(addFavorites(camper));
            return;
        }
        dispatch(removeFavorites(camper._id));
    };

    const heartStyle = {
        fill: idx !== -1 ? "#e44848" : "#ffffff",
        stroke: idx !== -1 ? "#e44848" : "#101828",
    };

    const { price } = camper
    const formattedPrice = price.toFixed(2);

    return (
        <LiItem>
            <Container>
                <ImgLayout>
                    <Img src={camper.gallery[0]} alt={camper.name} />
                </ImgLayout>

                <div>
                    <Header>
                        <HeaderLayout>
                            <H2>{camper.name}</H2>
                            <PriceContainer>
                                <H2>€{formattedPrice}</H2>
                                <FavoriteButton onClick={handleFavorite}>
                                    <Svg style={heartStyle} className="favorite" width={24} height={24}>
                                        <use href={`${svg}#icon-heart`} />
                                    </Svg>
                                </FavoriteButton>
                            </PriceContainer>
                        </HeaderLayout>
                        <DetailsList className="rating">
                            <li>
                                <DetailsText className="underline">
                                    <Svg className="rating" width={16} height={16}>
                                        <use href={`${svg}#icon-rating`} />
                                    </Svg>{camper.rating}({camper.reviews.length} Reviews)
                                </DetailsText>
                            </li>
                            <li>
                                <DetailsText>
                                    <Svg className="map" width={16} height={16}>
                                        <use href={`${svg}#icon-map`} />
                                    </Svg> {camper.location}</DetailsText>
                            </li>
                        </DetailsList>
                    </Header>
                    <Main>
                        <Description>{camper.description}</Description>

                        <DetailsListContainer items={camper} isInModal={false} />

                        <ShowMoreBtn onClick={toggleModal}>Show More</ShowMoreBtn>
                    </Main>
                </div>
            </Container>
            {isModalOpen && (
                <ModalBackdrop close={toggleModal}>
                    <ModalDetails item={camper} close={toggleModal} />
                </ModalBackdrop>
            )}
        </LiItem>
    );
};

export default Camper;