import React                from 'react';
import ImageBlockTitle      from './ImageBlockTitle.jsx';
import { IMAGE_BLOCK_WIDTH,
        IMAGE_BLOCK_HEIGHT} from '../config/constants.jsx';

const ImageBlock = ({ title, cover }) => (
        <div>
            <img src={cover}
                 width={ IMAGE_BLOCK_WIDTH }
                 height={ IMAGE_BLOCK_HEIGHT } />
                <ImageBlockTitle title={ title }/>
        </div>
    );

export default ImageBlock;

