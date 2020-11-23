// Begin POP-UP SIZES AND OPTIONS CODE


function popmeup(URL) {
var popup_width = 900
var popup_height = 850
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width='+popup_width+',height='+popup_height+'');");
}


//  End
