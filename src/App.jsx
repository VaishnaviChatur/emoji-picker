import React, { useState } from "react";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import './App.css'
const App = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");

  function onClick(emojiData) {
    setSelectedEmoji(emojiData.unified);
  }

  return (
    <div>
    <div className="container">
      
      <h2> Emoji Picker React Demo </h2>{" "}
    <br/>
      <EmojiPicker onEmojiClick={onClick} />{" "}

      <div className="demo">
        <h1>your selected emoji is :</h1>
     
        {selectedEmoji ? (
          <Emoji unified={selectedEmoji} size={62} />
        ) : null}
      </div>
    </div>
    </div>
  );
};

export default App;
