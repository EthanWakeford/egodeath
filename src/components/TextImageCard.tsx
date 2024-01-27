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
    <div className='grid h-[70vh] grid-rows-2 lg:h-[50vh] lg:grid-cols-3 lg:grid-rows-1'>
      <img
        src={imageLink}
        alt={imageAltText}
        className='h-full w-full object-cover lg:col-span-2'
      />
      <div className='flex flex-col justify-between px-4 py-8 text-center lg:col-span-1 lg:px-12'>
        <h3 className='text-lg lg:text-2xl'>{title}</h3>
        <p className='text-base lg:text-xl'>{bodyText}</p>
        <a
          href={linK}
          className='text-sm underline underline-offset-4 lg:text-lg'
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default TextImagecard;
