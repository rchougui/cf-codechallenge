import { Photo } from '../../../../src/modules/photos/photo.entity';
import './PhotosGrid.css';

interface PhotoProps {
  photos: Photo[];
}
export const PhotosGrid = (props: PhotoProps) => {
  const images = props.photos.map((photo: Photo, i: number) => {
    return (
      <div className="mItem">
        <img src={photo.thumburl} alt={photo.title} key={photo.title + i}></img>
      </div>
    );
  });
  return (
    <>
      <div className="masonry">{images}</div>
    </>
  );
};
