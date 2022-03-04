var ignorePaths = [
  '/apps/auth',
  '/apps/webstore/stores/update_cart'
];

function shouldWarn() {
  for (var i = 0; i < ignorePaths.length; i++) {
    if (window.location.pathname.indexOf(ignorePaths[i]) != -1) {
      return false;
    }
  }
  return true;
}

if (shouldWarn()) {
	var oldOnBeforeUnload = window.onbeforeunload;
	function fw_confirmExit() {
    try {
      var siteIdentifier = webs && webs.stats && webs.stats.siteId || window.location.hostname;
      _gaq.push(['_trackEvent', 'spam', 'earlyUnload', siteIdentifier]);
    } catch (e) {
    } finally {
      return "WARNING! This page is attempting to forward you to another site. If you do not trust this site, you should click CANCEL.";
    }
  }
	window.onbeforeunload = fw_confirmExit;
	window.setTimeout(function() { window.onbeforeunload = oldOnBeforeUnload; }, 600);
}

/*
     FILE ARCHIVED ON 23:44:57 Jul 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:46:00 May 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  load_resource: 334.813
  esindex: 0.015
  exclusion.robots: 0.206
  CDXLines.iter: 80.7 (3)
  LoadShardBlock: 147.19 (3)
  captures_list: 717.491
  PetaboxLoader3.resolve: 223.525 (2)
  PetaboxLoader3.datanode: 161.059 (5)
  RedisCDXSource: 1.419
  exclusion.robots.policy: 0.191
*/