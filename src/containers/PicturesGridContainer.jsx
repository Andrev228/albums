import { connect }  from 'react-redux';
import PicturesGrid from '../components/PicturesGrid.jsx';

const mapStateToProps = (state, ownProps) => {

    let albumId = ownProps.match.params.id,
        newState = JSON.parse(JSON.stringify(state));

    for (let key in newState) {
            if (newState[key].id == albumId) {

                let pages = Math.ceil(newState[key].images.length / 10);    //images вырезает по ссылке, по этому pages будет на 1 меньше

                return {
                    images: newState[key].images.splice(0, 10),
                    album: key,
                    albumId,
                    pages,
                    currentPage: 1
                }
            }
        }

        return { }

};

const PicturesGridContainer = connect(mapStateToProps, null)
                                    (PicturesGrid);

export default PicturesGridContainer;

