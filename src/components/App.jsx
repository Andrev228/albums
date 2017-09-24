import React                                   from 'react';
import AlbumsGridContainer                     from '../containers/AlbumsGridContainer.jsx';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PicturesGridContainer                   from '../containers/PicturesGridContainer.jsx';
import PicturesGridWithPageContainer           from '../containers/PicturesGridWithPageContainer.jsx';
import NotFound                                from './NotFound.jsx';

const App = () => (<Router>
                        <Switch>
                            <Route exact path="/"
                                   render={() => <AlbumsGridContainer /> } />
                            <Route exact path='/album/:id'
                                   render={(props) => <PicturesGridContainer albumId={props.match.params.id} /> } />
                            <Route exact path='/album/:id/page/:page'
                                   render={(props) => <PicturesGridWithPageContainer albumId={ props.match.params.id }
                                                                                     page={props.match.params.page}/> } />
                            <Route path="*" component={ NotFound } />
                        </Switch>
                   </Router>);


export default App;