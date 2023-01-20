// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function ProfileCard(props) {
    const { title, desc, image } = props;
    return (
        <Card sx={{ maxWidth: 345, height: 530 }}>
        <CardMedia
            component="img"
            image={image}
            title={title}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.primary">{desc}</Typography>
      </CardContent>      
    </Card>
    )
}

export default ProfileCard;