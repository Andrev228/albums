import React      from 'react';
import ImageBlock from './ImageBlock.jsx';
import Pagination from './Pagination.jsx';
import NotFound   from './NotFound.jsx';

const PicturesGrid = ({ store }) => {

    if (store.images) {

        let pagination;
        if (store.pages !== 1) pagination = (<Pagination pages={ store.pages }
                                                          current={ store.currentPage }
                                                          albumId={ store.albumId }
        />);

        return (
            <div className='grid'>
                <h1>{ store.album }</h1>
                {
                    store.images.map(picture => {
                        return (
                            <div className='image-block' key={ store.images.indexOf(picture) }>
                                <ImageBlock title={ picture.title }
                                            cover={ picture.image } />
                            </div>);
                    })
                }
                { pagination }
            </div>
        )
    } else {
        return (<NotFound />)
    }
};


export default PicturesGrid;

