(function(doc, win){
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function(){
			var clientWidth = docEl.clientWidth
			if (!clientWidth) return
			docEl.style.fontSize = (clientWidth / 6.4) + 'px'
		}
	if (!doc.addEventListener) return
	console.log(docEl)
	win.addEventListener(resizeEvt, recalc,false)
	doc.addEventListener('DOMContentLoaded', recalc,false)

})(document, window)