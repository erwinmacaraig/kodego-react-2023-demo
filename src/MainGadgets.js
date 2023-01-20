import { Button } from '@mui/material/';
import { useState } from 'react';
import GadgetShow from './GadgetShow';
import './MainGadget.css';


function getRandomGadget() { 
    const gadgets = ['laptop', 'ebike', 'tablet', 'cellphone', 'ipod', 'watch'];
    return gadgets[Math.floor(Math.random() * gadgets.length)];
}
function MainGadgets() {
    const [gadgets, setGadgets] = useState([]);
    /*
    Anytime we want to define a new single piece of state
    Anytime that we have some piece of information that is going to change
    over time, we are going to use useState function
    */
    const handleClick = (val) => { 
        // let tempGadgetsArr = [...gadgets, getRandomGadget()];
        setGadgets([...gadgets, getRandomGadget()])
        // setGadgets([...new Set(tempGadgetsArr)]);
    };

    const gadgetsForRendering = gadgets.map((gadget, index) => { 
        return <GadgetShow type={gadget} key={index} />;
    });
    return (
        <div className='app'>            
            <Button variant="contained" onClick={(event) => handleClick('test')}>Add Gadget</Button>
            <div className='gadget-listing'>{gadgetsForRendering}</div>
        </div>
    )
    
}
export default MainGadgets;