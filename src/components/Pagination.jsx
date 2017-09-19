import React    from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ pages, current, albumId }) => {

    let links = [];
    for (let i = 1; i <= pages; i++) {
        let href = '/album/' + albumId + '/page/' + i;
        links.push(<li className={ current == i ? 'active' : null } key={ i }>
                        <Link to={ href }>{ i }</Link>
                    </li>);
    }
    return (
        <div className='nav'>
            <ul className='pagination'>
                { links }
            </ul>
        </div>)
};

export default Pagination;