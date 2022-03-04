var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

window.onbeforeunload = fw_confirmExit;  function fw_confirmExit() { return "WARNING!  This page is attempting to forward you to another site.  If you do not trust this site, you should click CANCEL.";  }  window.setTimeout(function(){ window.onbeforeunload=null;},600);
//setTimeout(function() {if (window.frames.length >0){  for (i = 0 ; i < frames.length; i++){ try { var x = frames[i].contentDocument; if(typeof(x) === 'undefined') { frames[i].location = 'https://web.archive.org/web/20131206052640/http://members.webs.com/provisional_iframes.jsp?frameset=1';
//} else { if(x.document) x = x.document; if(typeof(x) === 'undefined') { frames[i].location = 'https://web.archive.org/web/20131206052640/http://members.webs.com/provisional_iframes.jsp?frameset=1'; } } } catch (e){ frames[i].location = 'https://web.archive.org/web/20131206052640/http://members.webs.com/provisional_iframes.jsp?frameset=1';  }  }}}, 1000);



}
/*
     FILE ARCHIVED ON 05:26:40 Dec 06, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:42:03 Jun 13, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.214
  PetaboxLoader3.datanode: 923.821 (4)
  load_resource: 897.295
  PetaboxLoader3.resolve: 36.24
  esindex: 0.016
  captures_list: 337.893
  LoadShardBlock: 123.889 (3)
  RedisCDXSource: 41.125
  exclusion.robots.policy: 0.184
  CDXLines.iter: 25.8 (3)
*/