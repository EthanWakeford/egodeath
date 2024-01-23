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
    <>
      <img src={imageLink} alt={imageAltText} />
      <h3>{title}</h3>
      <p>{bodyText}</p>
      <a href={linK}>{linkText}</a>
    </>
  );
};

export default TextImagecard;
