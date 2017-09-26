import { connect }  from 'react-redux';
import PicturesGrid from '../components/PicturesGrid.jsx';
import { NUMBER_OF_IMAGES_ON_PAGE } from '../config/constants.jsx';

const mapStateToProps = (state, ownProps) => {

    let { albumId, page } = ownProps,
        newState = JSON.parse(JSON.stringify(state));

    for (let key in newState) {
        if (newState[key].id == albumId) {

            let pages = Math.ceil(newState[key].images.length / NUMBER_OF_IMAGES_ON_PAGE);

            if (pages >= page) {
                return {
                    images: newState[key].images.splice((page - 1) * NUMBER_OF_IMAGES_ON_PAGE, NUMBER_OF_IMAGES_ON_PAGE),
                    album: key,
                    albumId,
                    pages,
                    currentPage: page
                }
            }
        }
    }

    return {};

};

const PicturesGridWithPageContainer = connect(mapStateToProps, null)
                                            (PicturesGrid);

export default PicturesGridWithPageContainer;

