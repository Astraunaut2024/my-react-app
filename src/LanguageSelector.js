import React, { useEffect } from "react";

const LanguageSelector = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateInit";
    document.body.appendChild(script);

    window.googleTranslateInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: "en", includedLanguages: "hi,ta,te,bn" }, 
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Choose Language:</h2>
      <div id="google_translate_element"></div>
    </div>
  );
};

export default LanguageSelector;
