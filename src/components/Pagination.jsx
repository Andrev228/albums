import React    from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component {
    constructor(props) {
        super(props)
    }

    createHref(albumId, page) {
        return '/album/' + albumId + '/page/' + page;
    }

    render() {

        let links = [],
            { pages, current, albumId } = this.props;

        for (let i = 1; i <= pages; i++) {
            links.push(<li className={ current == i ? 'active' : null }
                           key={ i }>
                <Link to={ this.createHref(albumId, i) }>{ i }</Link>
            </li>);
        }

        return (
            <div className='nav'>
                <ul className='pagination'>
                    { links }
                </ul>
            </div>)

    }
}

export default Pagination;