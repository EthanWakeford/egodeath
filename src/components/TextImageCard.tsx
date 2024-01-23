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
      <div className='p-12'>
        <h3>{title}</h3>
        <p>{bodyText}</p>
        <a href={linK}>{linkText}</a>
      </div>
    </div>
  );
};

export default TextImagecard;
