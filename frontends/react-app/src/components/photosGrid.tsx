import { Photo } from '../../../../src/modules/photos/photo.entity';

interface PhotoProps {
  photos: Photo[];
}
export const PhotosGrid = (props: PhotoProps) => {
  const images = props.photos.map((photo: Photo, i: number) => {
    return <img src={photo.thumburl} alt={photo.title} key={photo.title + i}></img>;
  });
  return (
    <>
      <div>{images}</div>
    </>
  );
};
