import React from "react";
import { useContext } from "react";
import LangContext from "../contexts/LangContext";

const Language = () => {
  const lang = useContext(LangContext);

  return (
    <div>
      <p>Aktif Dil: {lang.lang}</p>
      <button onClick={() => lang.setLang("tr")}>TR</button>
      <button onClick={() => lang.setLang("en")}>EN</button>
      <button onClick={() => lang.setLang("kr")}>KR</button>
    </div>
  );
};

export default Language;
