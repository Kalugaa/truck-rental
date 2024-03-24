import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCampers } from '../../redux/campers/selectors'
import { fetchAllCampers } from '../../redux/campers/operations'
import Camper from '../../components/Camper'
import Filter from '../../components/Filter'
import { filterCampers } from '../../helpers/filterCampers'
import { LoadMoreButton } from '../../components/LoadMoreButton'
import { NotFound } from '../../components/NotFound'



const Campers = () => {
    const dispatch = useDispatch();
    const allCampers = useSelector(getAllCampers);
    const [filteredCampers, setFilteredCampers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(4);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        dispatch(fetchAllCampers());
    }, [dispatch]);

    useEffect(() => {
        if (!filter) {
            setFilteredCampers(allCampers);
        } else {
            const filteredData = filterCampers(allCampers, filter)
            setFilteredCampers([...filteredData]);
        }
        setCurrentPage(1); // Скидаємо сторінку на першу при зміні фільтра
    }, [allCampers, filter]);

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    const handleResetFilter = () => {
        setFilter(null);
    }

    const loadMoreItems = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const indexOfLastCamper = currentPage * perPage;
    const currentCampers = Array.isArray(filteredCampers)
        ? filteredCampers
        : [];

    return (
        <div style={{ display: 'flex', gap: 64, justifyContent: 'center' }}>
            <div>
                <Filter handleFilterChange={handleFilterChange} handleResetFilter={handleResetFilter} />
            </div>
            <div style={{ minWidth: 888 }}>
                <ul>
                    {currentCampers.length > 0 ? currentCampers.slice(0, indexOfLastCamper).map((camper) => <Camper key={camper._id} camper={camper} />) : <NotFound />}
                </ul>
                {currentCampers.length > indexOfLastCamper && (
                    <LoadMoreButton loadMoreItems={loadMoreItems} />
                )}
            </div>
        </div>
    )
}

export default Campers
