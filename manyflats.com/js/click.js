function openLink(url) {
    var width=document.body.clientWidth;
	var height=document.body.clientHeight;
	var params='';
	if (width>1240 && height>840) {
		params = 'left=20,top=20,width=1200,height=800,menubar=no,location=no,status=no,titlebar=no';
	}
	window.open(url, '_blank', params);
	return false;
}

function goBack() {
    window.history.back();
}
