import { Img, ImgLayout, Li } from "./Camper.styled";

const Camper = ({ camper }) => {

    console.log(camper);
    return (
        <Li>
            <div>
                <ImgLayout>
                    <Img src={camper.gallery[0]} alt={camper.name} />
                </ImgLayout>
                <div></div>
            </div>
        </Li>
    )
}

export default Camper