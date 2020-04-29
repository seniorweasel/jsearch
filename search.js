var item = new Array();

function ekle(url) {
    var script = document.createElement('script');
    script.src = url;
    document.head.appendChild(script); 
 
}
ekle('./resultData.js');


var page= "<html><head><meta charset=\"UTF-8\"><link href=\"results.css\" rel=\"stylesheet\" type=\"text/css\"><title>Arama</title></head><body ><center><table border=0 cellspacing=10 width=80%>";

function search(frm) {

    win = window.open("", "_blank", "", "scrollbars");
    win.document.write(page);
    txt = frm.srchval.value.split(" ");
    fnd = new Array(); total = 0;
    for (i = 0; i < item.length; i++) {
        fnd[i] = 0; order = new Array(0, 4, 2, 3);
        for (j = 0; j < order.length; j++)
            for (k = 0; k < txt.length; k++)
                if (item[i][order[j]].toLowerCase().indexOf(txt[k]) > -1 && txt[k] != "")
                    fnd[i] += (j + 1);
    }
    for (i = 0; i < fnd.length; i++) {
        n = 0; w = -1;
        for (j = 0; j < fnd.length; j++)
            if (fnd[j] > n) { n = fnd[j]; w = j; };
        if (w > -1) total += show(w, win, n);
        fnd[w] = 0;
    }
    win.document.write("</table><br><p style= \"font-family: Segoe UI, DejaVu Sans, Trebuchet MS, Verdana, sans-serif\" style=\" color: white\" >All Solutions:</p> " + total + "<br></body></html>");
    win.document.close();
}x
function show(which, wind, num) {
    link = item[which][1] + item[which][0];
    line = "<tr><td  style= \"font-family: Segoe UI, DejaVu Sans, Trebuchet MS, Verdana, sans-serif\" ><a style= \"font-family: Segoe UI, DejaVu Sans, Trebuchet MS, Verdana, sans-serif\" style=\"text-decoration: none;\" style=\"color: #FFC926;\" href=''''" + link + "''''>" + item[which][2] + "</a> : " + num + "<br>";
    line += item[which][4] + "<br>" + link + "</td></tr>";
    wind.document.write(line);
    return 1;
}
