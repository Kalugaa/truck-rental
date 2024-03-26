import React from 'react'
import { useSelector } from 'react-redux'
import { getFavorites } from '../../redux/favorites/selectors'
import Camper from '../../components/Camper'
import { createGlobalStyle } from 'styled-components'
import { H1, HomeLink, MessageContainer } from './Favorites.styled'

const Favorites = () => {
    const favorites = useSelector(getFavorites)

    return (<>
        <ul style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
            {favorites.length > 0 ? favorites.map((camper) => <Camper key={camper._id} camper={camper} />) : <MessageContainer  ><H1>You don`t have favorites campers yet. You can add camper to favorite on <HomeLink to='/catalog'>Catalog page</HomeLink></H1></MessageContainer>}
        </ul>
    </>
    )
}
export default Favorites