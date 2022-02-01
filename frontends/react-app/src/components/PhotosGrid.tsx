import { Photo } from '../../../../src/modules/photos/photo.entity';
import './PhotosGrid.css';

interface PhotoProps {
  photos: Photo[];
}
export const PhotosGrid = (props: PhotoProps) => {
  const images = props.photos.map((photo: Photo, i: number) => {
    return (
      <div className="mItem" key={photo.title + i}>
        <a href={photo.url} target="_blank" rel="noreferrer">
          <span>{photo.title}</span>
          <img src={photo.thumburl} alt={photo.title}></img>
        </a>
      </div>
    );
  });
  return (
    <>
      <div className="masonry">{images}</div>
    </>
  );
};
