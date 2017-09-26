import React                         from 'react';
import AlbumsGridContainer           from '../containers/AlbumsGridContainer.jsx';
import { HashRouter as Router,
    Route,
    Switch }                         from 'react-router-dom';
import PicturesGridContainer         from '../containers/PicturesGridContainer.jsx';
import PicturesGridWithPageContainer from '../containers/PicturesGridWithPageContainer.jsx';
import NotFound                      from './NotFound.jsx';
import { ALBUMS_LIST,
    ALBUM_IMAGES_LIST,
    ALBUM_IMAGES_LIST_WITH_PAGE,
    NOT_FOUND }                      from '../constants/routes.jsx';

const App = () => (<Router>
                        <Switch>
                            <Route exact path={ ALBUMS_LIST }
                                   render={() => <AlbumsGridContainer /> } />
                            <Route exact path={ ALBUM_IMAGES_LIST }
                                   render={(props) => <PicturesGridContainer albumId={ props.match.params.id } /> } />
                            <Route exact path={ ALBUM_IMAGES_LIST_WITH_PAGE }
                                   render={(props) => <PicturesGridWithPageContainer albumId={ props.match.params.id }
                                                                                     page={ props.match.params.page }/> } />
                            <Route path={ NOT_FOUND }
                                   component={ NotFound } />
                        </Switch>
                   </Router>);


export default App;