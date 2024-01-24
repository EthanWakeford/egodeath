interface Props {
  images: { imageRef: string; title: string; link: string }[];
}

const PictureGallery: React.FC<Props> = ({ images }) => {
  return (
    <ul className='align-center grid grid-cols-1 text-center sm:grid-cols-2'>
      {images.map((image) => (
        <li
          className={`flex h-32 items-center justify-center bg-[url('${image.imageRef}')] group opacity-50 hover:opacity-100`}
        >
          <a href={image.link} className='invisible group-hover:visible'>
            {image.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PictureGallery;
