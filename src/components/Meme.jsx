const Meme = ({ meme, text }) => {
  const { randMeme } = meme;
  const { url, name } = randMeme;
  const { topText, bottomText } = text;
  return url ? (
    <div className="meme--container">
      <img src={url} alt={name} className="meme--img" />
      {topText && (
        <span className="meme--top_text">{topText.toUpperCase()}</span>
      )}
      {bottomText && (
        <span className="meme--bottom_text">{bottomText.toUpperCase()}</span>
      )}
    </div>
  ) : null;
};

export default Meme;
