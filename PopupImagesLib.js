// ==UserScript==
// @name Show Image Popup Library
// @namespace PSVScripts
// @description Библиотека функций PopupImage
// @version 0.0.0.6
// ==/UserScript==

/*
  handler =  function(SourceObject, CallBack, ImageUrl)
  { 
    ~CallBack(SourceObject, ImageUrl);
    if CanHandle
      return true;
    else
      return false
  }
*/

var win = unsafewindow;

if (!win.PSVScript_IPHandlers)
  win.PSVScript_IPHandlers = new Array();

var PsvHandlers = win.PSVScript_IPHandlers;

if (!win.PSVScript_IPHandler)
  win.PSVScript_IPHandler = PSVScript_IPHandler;

function PSVScript_IPHandler(SourceObject, CB, ImageUrl)
{
  for (var i=0; i< PsvHandlers.length; i++)
  if (PsvHandlers[i](SourceObject, CB, ImageUrl))
    break;
}
