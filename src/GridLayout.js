import ProfileCard from "./ProfileCard";
import FMAImage from './images/kali.png';
import MuayThaiImage from './images/muaythai.png';
import SilatImage from './images/silat.jpg';

import Grid from '@mui/material/Grid';

function MyMartialArtsGrid() { 
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item md={12}>
                <h1 style={{textAlign: "center"}}>Most Effective Martial Arts for Self Defense</h1>
            </Grid>
            <Grid item md={3}>
                <ProfileCard title="Kali"
                    desc="Filipino Kali is the art of stick fighting using hard bamboo sticks to strike and defend"
                    image={FMAImage}
                />                
            </Grid>
            <Grid item md={3}>
                <ProfileCard title="Silat"
                desc="Silat is a combative art of self-defence and survival rooted in the Malay Archipelago"
                image={SilatImage}                
                />                
            </Grid>
            <Grid item md={3}>
                <ProfileCard title="Muay Thai"
                desc='This discipline is known as the "art of eight limbs", as it is characterised by the combined use of fists, elbows, knees and shins'
                image={MuayThaiImage}
                />
            </Grid>
        </Grid>  
    );
}
export default MyMartialArtsGrid;