
import ImageShow from './ImageShow';
import './ImageList';
function ImageList({ images }) { 
    const imagesForRendering = images.map((image) => { 
        return <ImageShow image={image} key={image.id} />
    });
    return <div className="image-list">{imagesForRendering}</div>
}
export default ImageList;