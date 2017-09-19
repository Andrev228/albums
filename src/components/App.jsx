import React                                   from 'react';
import AlbumsGridContainer                     from '../containers/AlbumsGridContainer.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import CurrentPicturesGrid                     from '../containers/PicturesGridContainer.jsx';
import CurrentPicturesGridWithPage             from '../containers/PicturesGridWithPageContainer.jsx';
import NotFound                                from './NotFound.jsx';

const App = () => (<Router>
                        <Switch>
                            <Route exact path="/" component={ AlbumsGridContainer } />
                            <Route exact path='/album/:id' component={ CurrentPicturesGrid } />
                            <Route exact path='/album/:id/page/:page' component={ CurrentPicturesGridWithPage } />
                            <Route path="*" component={ NotFound } />
                        </Switch>
                   </Router>);


export default App;