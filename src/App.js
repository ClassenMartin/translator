import "./App.css";
import { useState } from "react";
import translations from "./translationFile";

function App() {
  const [language, setLanguage] = useState("eng");
  const [isActive, setIsActive] = useState(false);

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const toggleSwitch = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>languageswitcher</h1>
        <div className="buttonBox">
          <button onClick={() => switchLanguage("eng")} disabled={isActive}>
            {translations[language].buttonEng}
          </button>
          <button onClick={() => switchLanguage("ger")} disabled={isActive}>
            {translations[language].buttonGer}
          </button>
          <button onClick={() => switchLanguage("esp")} disabled={isActive}>
            {translations[language].buttonEsp}
          </button>
          <button onClick={() => switchLanguage("cat")} disabled={isActive}>
            {translations[language].buttonCat}
          </button>
          <button onClick={() => switchLanguage("fra")} disabled={isActive}>
            {translations[language].buttonFra}
          </button>
        </div>
      </header>
      <body className="body">
        {/* welcome */}
        <div className="content">
          <h2>{translations[language].welcome}</h2>
          {translations[language].welcomeText}
        </div>
        {/* description */}
        <div className="content">
          <h2>{translations[language].description}</h2>
          {translations[language].text}
        </div>
        {/* who */}
        <div className="content">
          <h2>{translations[language].who}</h2>
          {translations[language].whoText}
        </div>
        <button onClick={() => toggleSwitch()}>
          {isActive
            ? translations[language].switchEnable
            : translations[language].switchDisable}
        </button>
      </body>
    </div>
  );
}

export default App;
