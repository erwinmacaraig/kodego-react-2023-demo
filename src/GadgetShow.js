import { useState } from 'react';
import heart from './images/heart.svg';
import laptop from './images/laptop.jpg';
import ebike from './images/ebike.jpg';
import tablet from './images/tablet.jpg';
import cellphone from './images/cellphone.jpg';
import ipod from './images/ipod.jpg';
import watch from './images/watch.jpg';
import './GadgetShow.css';

const imgMap = {
    "laptop": laptop,
    "ebike": ebike,
    "tablet": tablet,
    "cellphone": cellphone,
    "ipod": ipod,
    "watch": watch
};

function GadgetShow(props) { 
    const [likes, setLikes] = useState(0);

    const handleLike = () => { 
        setLikes(likes + 1);
    };
    const { type } = props;
    return (
        <div className='gadget-show' onClick={handleLike}>
            <img className='gadget' src={imgMap[type]} alt="gadget" />
            <img className='heart' src={heart} alt="likes" style={{width: 10 + 10 * likes + 'px'}} />
            <p>{type} : { likes } Number of likes </p> 
        </div>
    );
}

export default GadgetShow;