
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
  $.getScript('https://rawgit.com/jjring/zeggy/master/bot.js');
}
