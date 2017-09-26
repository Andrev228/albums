import React      from 'react';
import ImageBlock from './ImageBlock.jsx';
import { Link }   from 'react-router-dom';

class AlbumsGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    createHref(id) {
        return '/album/' + id;
    }

    render() {
        return (
            <div className='grid'>
                <h1>Albums</h1>
                {
                    this.props.albums.map(album => {
                            return (<Link to={ this.createHref(album.id) }
                                          key={ album.id }
                                          className='image-block'>
                                    <ImageBlock title={ album.title }
                                            cover={ album.cover }
                                            editable={ album.editable } />
                                    </Link>)
                        }
                    )
                }
            </div>
        )
    }
}

export default AlbumsGrid;