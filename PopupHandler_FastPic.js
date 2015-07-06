// ==UserScript==
// @name Handler Library FastPic 
// @namespace PSVScripts
// @description обработчик ссылок на картинки FastPic
// @version 0.0.0.1
// @require https://greasyfork.org/scripts/4524-show-image-popup-library/code/Show%20Image%20Popup%20Library.js
// ==/UserScript==



PsvHandlers.push(PSV_FastPic_Hanlder);


function PSV_FastPic_Hanlder(SourceObject, CB, ImageUrl)
{
  return true;
}
