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

var supported = !/Gecko/.test(navigator.userAgent) && !/Opera/.test(navigator.userAgent) && /MSIE (5\.5)|[6]/.test(navigator.userAgent) &&  navigator.platform == "Win32";
function OnLoadPngFix() {
	if(!supported) return;
	if(!event.srcElement) return;
	var src=event.srcElement.src;
	if(!src) return;
	if(!new RegExp(blankSrc).test(src)) {
		// test for png
		if(/\.png$/.test(src.toLowerCase())) {
			src = src.replace(/\(/g, "%28" );
			src = src.replace(/\)/g, "%29" );
			// set blank image
			event.srcElement.src = blankSrc;
			// set filter
			event.srcElement.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "',sizingMethod='scale')";
		} 
		else { event.srcElement.runtimeStyle.filter = "";}
	}
}


}
/*
     FILE ARCHIVED ON 23:13:01 Nov 29, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:58:10 Jun 14, 2020.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 338.951
  exclusion.robots.policy: 0.26
  exclusion.robots: 0.277
  RedisCDXSource: 8.936
  esindex: 0.022
  CDXLines.iter: 20.128 (3)
  LoadShardBlock: 304.324 (3)
  PetaboxLoader3.datanode: 162.939 (4)
  PetaboxLoader3.resolve: 139.616 (3)
  load_resource: 115.643
*/