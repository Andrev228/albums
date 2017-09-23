import { connect } from 'react-redux';
import AlbumsGrid  from '../components/AlbumsGrid.jsx';

const getAlbumsList = (state) => {
    let albumsList = [];
    for (let key in state) {
        albumsList.push(Object.assign({}, {
            id: state[key].id,
            title: key,
            cover: state[key].cover,
            editable: state[key].editable
        }))
    }
    return albumsList;
};

const mapStateToProps = (state) => ({
    albums: getAlbumsList(state)
});

const AlbumsGridContainer = connect(mapStateToProps, null)
                                 (AlbumsGrid);

export default AlbumsGridContainer;

