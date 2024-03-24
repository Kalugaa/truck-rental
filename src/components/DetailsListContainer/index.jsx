import { DetailsList, DetailsListItem, Svg } from "./DetailsList.styled";
import svg from "../../assets/sprite.svg"


export const DetailsListContainer = ({ items, isInModal }) => {
    const { adults, transmission, engine } = items;
    const detailsFull = { adults, transmission, engine, ...items.details };


    return (
        <DetailsList>

            <DetailsListItem>
                <Svg width={20} height={20}>
                    <use href={`${svg}#icon-user`} />
                </Svg>
                {detailsFull.adults} adults
            </DetailsListItem>

            <DetailsListItem>
                <Svg className="transmission" width={20} height={20}>
                    <use href={`${svg}#icon-transmission`} />
                </Svg>
                {detailsFull.transmission}
            </DetailsListItem>

            <DetailsListItem>
                <Svg className="gas" width={20} height={20}>
                    <use href={`${svg}#icon-gas`} />
                </Svg>{detailsFull.engine}
            </DetailsListItem>

            <DetailsListItem>
                <Svg className="kitchen" width={20} height={20}>
                    <use href={`${svg}#icon-kitchen`} />
                </Svg>
                {detailsFull.kitchen === 1 ? "" : detailsFull.kitchen}Kitchen
            </DetailsListItem>

            <DetailsListItem>
                <Svg className="beds" width={20} height={20}>
                    <use href={`${svg}#icon-bed`} />
                </Svg>{detailsFull.beds} beds
            </DetailsListItem>

            <DetailsListItem>
                <Svg className='ac' width={20} height={20}>
                    <use href={`${svg}#icon-ac`} />
                </Svg>{detailsFull.airConditioner && "AC"}
            </DetailsListItem>

            {(isInModal === true) ? (<>
                {detailsFull.airConditioner ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-conditioner`} />
                    </Svg>{detailsFull.airConditioner} Air conditioner
                </DetailsListItem> : <></>
                }

                {detailsFull.CD ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-cd`} />
                    </Svg>{detailsFull.CD} CD
                </DetailsListItem> : <></>}

                {detailsFull.radio ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-radio`} />
                    </Svg>{detailsFull.radio} Radio
                </DetailsListItem> : <></>}

                {detailsFull.hob ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-hob`} />
                    </Svg>{detailsFull.hob} Hob
                </DetailsListItem> : <></>}

                {detailsFull.toilet ? <DetailsListItem>
                    <Svg className="toilet" width={20} height={20}>
                        <use href={`${svg}#icon-toilet`} />
                    </Svg>{detailsFull.toilet} Toilet
                </DetailsListItem> : <></>}

                {detailsFull.shower ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-shower`} />
                    </Svg>{detailsFull.shower} Shower
                </DetailsListItem> : <></>}

                {detailsFull.freezer ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-freezer`} />
                    </Svg>{detailsFull.freezer} Freezer
                </DetailsListItem> : <></>}

                {detailsFull.gas ? <DetailsListItem>
                    <Svg className="fire" width={20} height={20}>
                        <use href={`${svg}#icon-fire`} />
                    </Svg>Gas
                </DetailsListItem> : <></>}

                {detailsFull.water ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-water`} />
                    </Svg> Water
                </DetailsListItem> : <></>}

                {detailsFull.microwave ? <DetailsListItem>
                    <Svg width={20} height={20}>
                        <use href={`${svg}#icon-microwave`} />
                    </Svg>{detailsFull.microwave} Microwave
                </DetailsListItem> : <></>
                }
            </>) : (<></>)}
        </DetailsList>
    )
}



