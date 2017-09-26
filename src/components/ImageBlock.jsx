import React                from 'react';
import ImageBlockTitle      from './ImageBlockTitle.jsx';
import { IMAGE_BLOCK_WIDTH,
        IMAGE_BLOCK_HEIGHT} from '../constants/config.jsx';

const ImageBlock = ({ title, cover }) => (
        <div>
            <img src={cover}
                 width={ IMAGE_BLOCK_WIDTH }
                 height={ IMAGE_BLOCK_HEIGHT } />
                <ImageBlockTitle title={ title }/>
        </div>
    );

export default ImageBlock;

