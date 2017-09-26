import React      from 'react';
import ImageBlock from './ImageBlock.jsx';
import Pagination from './Pagination.jsx';
import NotFound   from './NotFound.jsx';

const PicturesGrid = (params) => {

    if (params.images) {

        let pagination;
        if (params.pages !== 1) pagination = (<Pagination pages={ params.pages }
                                                          current={ params.currentPage }
                                                          albumId={ params.albumId }
        />);

        return (
            <div className='grid'>
                <h1>{ params.album }</h1>
                {
                    params.images.map(image => {
                        return (
                            <div className='image-block' key={ params.images.indexOf(image) }>
                                <ImageBlock title={ image.title }
                                            cover={ image.image } />
                            </div>);
                    })
                }
                { pagination }
            </div>
        )
    } else {
        return <NotFound />
    }
};


export default PicturesGrid;

