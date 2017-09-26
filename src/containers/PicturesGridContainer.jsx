import { connect }                  from 'react-redux';
import PicturesGrid                 from '../components/PicturesGrid.jsx';
import { NUMBER_OF_IMAGES_ON_PAGE } from '../constants/config.jsx';

const getPictures = (state, { albumId }) => {

    let newState = JSON.parse(JSON.stringify(state));

    for (let key in newState) {
        if (newState[key].id == albumId) {

            let pages = Math.ceil(newState[key].images.length / NUMBER_OF_IMAGES_ON_PAGE);    //images вырезает по ссылке, по этому pages будет на 1 меньше

            return {
                images: newState[key].images.splice(0, NUMBER_OF_IMAGES_ON_PAGE),
                album: key,
                albumId,
                pages,
                currentPage: 1
            }
        }
    }

    return {}

};

const mapStateToProps = (state, ownProps) => ({
    store: getPictures(state, ownProps)
});

const PicturesGridContainer = connect(mapStateToProps, null)
                                    (PicturesGrid);

export default PicturesGridContainer;

