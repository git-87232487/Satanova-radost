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
     FILE ARCHIVED ON 11:49:27 Jun 29, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:44:43 May 20, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 138.108 (3)
  esindex: 0.013
  CDXLines.iter: 76.588 (3)
  exclusion.robots.policy: 0.189
  captures_list: 1199.797
  exclusion.robots: 0.204
  LoadShardBlock: 318.585 (3)
  PetaboxLoader3.datanode: 376.822 (5)
  RedisCDXSource: 2.337
  load_resource: 260.13
*/