interface Props {
  images: { imageRef: string; title: string; link: string }[];
}

const PictureGallery: React.FC<Props> = ({ images }) => {
  return (
    <ul className='align-center grid grid-cols-1 text-center sm:grid-cols-2'>
      {images.map((image) => (
        <li className='flex h-32 items-center justify-center opacity-0 hover:opacity-100'>
          <a href={image.link} className=''>
            {image.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PictureGallery;
