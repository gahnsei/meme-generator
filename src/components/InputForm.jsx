import { useEffect } from "react";
import axios from "axios";

const InputForm = (props) => {
  const { setMeme, meme, setText, text } = props;

  useEffect(() => {
    axios
      .get(`https://api.imgflip.com/get_memes`)
      .then((res) => {
        setMeme((prevState) => ({
          ...prevState,
          allMemes: res.data.data.memes
        }));
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const rand = Math.floor(Math.random() * meme.allMemes.length);
    setMeme((prevState) => ({ ...prevState, randMeme: meme.allMemes[rand] }));
  };

  const handleChange = (event) => {
    event.persist();
    setText((prevState) => {
      return { ...prevState, [event.target.name]: event.target.value };
    });
  };

  return (
    <form action="">
      <div className="form--input_container">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          onChange={handleChange}
          value={text.topText}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          onChange={handleChange}
          value={text.bottomText}
        />
      </div>
      <button onClick={handleClick}>Get a new meme image</button>
    </form>
  );
};

export default InputForm;
