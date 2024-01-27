interface Props {
  images: { imageRef: string; title: string; link: string }[];
}

const PictureGallery: React.FC<Props> = ({ images }) => {
  return (
    <ul className='align-center grid grid-cols-1 text-center sm:grid-cols-2'>
      {images.map((image) => (
        <li
          className={`card-zoom group flex h-64 items-center justify-center bg-cover bg-center`}
        >
          <div
            className='card-zoom-image hover:zoom-in hover:brightness-50'
            style={{
              backgroundImage: `url('${image.imageRef}')`,
            }}
          ></div>
          <a
            href={image.link}
            className='z-50 text-xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100'
          >
            {image.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PictureGallery;
