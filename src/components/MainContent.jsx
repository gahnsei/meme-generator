import { useState } from "react";
import InputForm from "./InputForm";
import Meme from "./Meme";

const MainContent = () => {
  const [meme, setMeme] = useState({ allMemes: [], randMeme: {} });
  const [text, setText] = useState({ topText: ``, bottomText: `` });

  return (
    <main>
      <InputForm setMeme={setMeme} meme={meme} setText={setText} text={text} />
      <Meme meme={meme} text={text} />
    </main>
  );
};

export default MainContent;
