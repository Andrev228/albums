import { connect }  from 'react-redux';
import PicturesGrid from '../components/PicturesGrid.jsx';

const mapStateToProps = (state, ownProps) => {

    let albumId = ownProps.albumId,
        page = ownProps.page,
        newState = JSON.parse(JSON.stringify(state));

    for (let key in newState) {
        if (newState[key].id == albumId) {

            let pages = Math.ceil(newState[key].images.length / 10);

            if (pages >= page) {
                return {
                    images: newState[key].images.splice(page == 1 ? 0 : page * 10 - 10, 10),
                    album: key,
                    albumId,
                    pages,
                    currentPage: page
                }
            } else {
                return { };
            }
        }
    }

    return { };

};

const PicturesGridWithPageContainer = connect(mapStateToProps, null)
                                            (PicturesGrid);

export default PicturesGridWithPageContainer;

