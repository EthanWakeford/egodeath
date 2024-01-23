interface Props {
  title: string;
  imageLink: string;
  imageAltText: string;
  bodyText: string;
  linK: string;
  linkText: string;
}

const TextImagecard: React.FC<Props> = ({
  title,
  imageLink,
  imageAltText,
  bodyText,
  linK,
  linkText,
}) => {
  return (
    <div className='grid h-[50vh] grid-cols-3'>
      <img
        src={imageLink}
        alt={imageAltText}
        className='col-span-2 h-full w-full object-cover'
      />
      <div className='flex flex-col justify-around p-12 text-center'>
        <h3 className='text-2xl'>{title}</h3>
        <p className='text-xl'>{bodyText}</p>
        <a href={linK} className='text-lg underline underline-offset-4'>
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TextImagecard;
