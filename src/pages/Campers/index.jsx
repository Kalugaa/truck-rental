import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCampers } from '../../redux/campers/selectors'
import { fetchAllCampers } from '../../redux/campers/operations'
import Camper from '../../components/Camper'


const Campers = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllCampers());
    }, [dispatch]);

    const data = useSelector(getAllCampers);
    console.log(data.length);

    return (
        <div>
            <div>SOME BUTTONS

            </div>
            <div>
                <ul>
                    {data.length > 0 ? data.map((camper) => <Camper key={camper._id} camper={camper} />) : <p>Something went wrong..</p>}
                </ul>
            </div>
        </div>
    )
}

export default Campers