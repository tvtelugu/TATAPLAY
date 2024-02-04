var sc_olimg_var = sc_olimg_var || [];
function sc_online_i(id, fcolor, bgcolor) {
    var info;
    if (fcolor.indexOf("#") !== 0) fcolor = "#" + fcolor;
    bgcolor = bgcolor.replace(/#/, "");
    if (encodeURIComponent) {
        info = '&ua=' + encodeURIComponent(navigator.userAgent);
        info = info + '&ref=' + encodeURIComponent(document.referrer);
        info = info + '&url=' + encodeURIComponent(window.location);
    } else {
        info = '&ua=' + escape(navigator.userAgent);
        info = info + '&ref=' + escape(document.referrer);
        info = info + '&url=' + escape(window.location);

    }
    info = info + '&sw=' + screen.width;
    info = info + '&sh=' + screen.height;
    info = info + '&rand=' + Math.round(100 * Math.random());

    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = "async";
    ga.src = '//service.supercounters.com/fc.php?id=' + id + '&w=1&v=2' + info;
	(document.getElementsByTagName("head")[0] || d.getElementsByTagName("body")[0]).appendChild(ga);

    sc_olimg_var['bgcolor'] = bgcolor.toLowerCase();
    sc_olimg_var['fcolor'] = fcolor;

}

function sc_onlineimage(id, count) {

    var url = "//widget.supercounters.com/images/online/" + sc_olimg_var['bgcolor'] + ".png";
    var c = document.createElement("img");

    c.onload = function() {
        var cd = document.createElement("div");
        cd.id = "sconlineimg";
		cd.style.position = "relative";
		cd.style.zindex = "99999999";
		cd.style.display = "inline-block";
        cd.style.width = "80px";
        cd.style.height = "21px";
        cd.style.overflow = "hidden";
        cd.style.cursor = "pointer";
        cd.style.backgroundImage = "url(" + url + ")";
        cd.style.backgroundRepeat = "no-repeat";
        cd.style.backgroundPosition = "0px 0px";
        cd.title = "Free Online Counter";

        var txt = count + " ONLINE";
        drawText_online(sc_olimg_var['fcolor'], txt, cd);

        cd.onclick = function() {
            window.open("https://www.supercounters.com/stats/" + id);
        };
        ct_insert(cd, "supercounters.com/ssl/online_i.js");
    };
    c.src = url;

}

function ct_insert(c, d) {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; b++) {
        if (a[b].src.indexOf(d) > 0) {
            a[b].parentNode.insertBefore(c, a[b].nextSibling);
        }
    }
}

function drawText_online(fcolor, txt, d) {
    var dt = document.createElement("div");
    dt.style.display = "inline-block";
    dt.style.fontFamily = "Arial";
    dt.style.fontSize = "11px";
    dt.style.color = fcolor;
    dt.style.position = "absolute";
    dt.style.fontWeight = "normal";
    dt.style.width = "80px";
    dt.style.height = "15px";
    dt.style.top = "0px";
    dt.style.left = "0px";
    dt.style.overflow = "hidden";
    dt.style.fontStyle = "normal";
    dt.style.textTransform = "none";
    dt.style.textDecoration = "none";
    dt.style.letterSpacing = "0px";
    dt.style.wordSpacing = "0px";
    dt.style.padding = "0px";
    dt.style.margin = "4px 0 0 0";
    dt.style.textAlign = "center";
    dt.style.lineHeight = "normal";
    dt.style.webkitTextSizeAdjust = "none";
    dt.style.direction = "ltr";
    dt.style.textShadow = "none";
    dt.style.verticalAlign = "baseline";
    dt.innerHTML = txt;
    d.appendChild(dt);
}
function errorMsg(msg) {
    var w = msg.length * 7;
    var cd = document.createElement("div");
    cd.style.position = "relative";
    cd.style.display = "inline-block";
    cd.style.width = w + "px";
    cd.style.height = "15px";
    cd.style.overflow = "hidden";
    cd.style.cursor = "pointer";
    cd.style.fontFamily = "Arial";
    cd.style.fontSize = "12px";
    cd.style.color = "#ff0000";
    cd.style.borderColor = "#ffffff";
    cd.style.borderWidth = "1px";
    cd.style.borderStyle = "solid";
    cd.style.backgroundColor = sc_olimg_var['bgcolor'];
    cd.title = "Supercounters";
    cd.innerHTML = msg;
    cd.onclick = function() {
        window.location = "http://www.supercounters.com/";
    };
    ct_insert(cd, "supercounters.com/ssl/online_i.js");
}
