import React, { useState } from "react";

// Custom dictionary of misspelled words and corrections
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Edge case: if input is empty, clear suggestion
    if (!text.trim()) {
      setSuggestedText("");
      return;
    }

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const lowerWord = word.toLowerCase();
      return customDictionary[lowerWord] || word;
    });

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
};

export default SpellCheckApp;
