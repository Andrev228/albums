import React      from 'react';
import ImageBlock from './ImageBlock.jsx';
import { Link }   from 'react-router-dom';

const AlbumsGrid = ({ albums }) => (<div className='grid'>
                <h1>Albums</h1>
                {
                    albums.map(album => {
                        let href = '/album/' + album.id;
                        return (<Link to={href} key={ album.id } className='image-block'>
                                    <ImageBlock title={ album.title }
                                                cover={ album.cover }
                                                editable={ album.editable } />
                                </Link>)
                        }
                    )
                }
            </div>);

export default AlbumsGrid;