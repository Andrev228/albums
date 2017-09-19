import React           from 'react';
import ImageBlockTitle from './ImageBlockTitle.jsx';

const ImageBlock = ({ title, cover, editable }) => (
        <div>
            <img src={cover} width='305' height='400'/>
                <ImageBlockTitle title={ title }/>
        </div>
    );

export default ImageBlock;

