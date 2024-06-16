import React from 'react';
import { useTranslation } from 'react-i18next';
import Spain from "../../assets/spain.png"
import United from "../../assets/united_kingdom.png"
import Cataluyna from "../../assets/cataluyna.png"
import "./LanguageSwitcher.css"

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className='button' onClick={() => changeLanguage('en')}><img src={United}/></button>
      <button className='button' onClick={() => changeLanguage('es')}><img src={Spain}></img></button>
      <button  className='button'onClick={() => changeLanguage('ca')}><img src={Cataluyna} style={{width:"41px"}}/></button>
    </div>
  );
};

 