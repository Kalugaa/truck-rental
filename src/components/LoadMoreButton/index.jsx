import React from 'react';
import { Layout, LoadMore } from './LoadMoreButton.styled';

export const LoadMoreButton = ({ loadMoreItems }) => {
    return (
        <Layout  >
            <LoadMore onClick={loadMoreItems} className='load-more-btn'>
                Load More
            </LoadMore>
        </Layout >
    );
}
