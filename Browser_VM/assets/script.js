function search() {
    // get the query from the search box
    var searchQuery = document.getElementById('searchbox').value;
    
    // make the HTML code for the iFrame
    var iFrameCode = "<iframe src='"+searchQuery+"' width='100%' height='100%'>Either your browser does not support iFrame, or the requested page could not be found.</iframe>";
    document.write(iFrameCode);
}
function open_krunker() {
    var iFrameCode = "<iframe src='https://krunker.io/' width='100%' height='100%'>Either your browser does not support iFrame, or the requested page could not be found.</iframe>";
    document.write(iFrameCode);
}
function info() {
    const alertstr = "This site takes a url in the format https://mysite.com/ and runs it as if the site were a browser in an attempt to bypass DNS filters and website blocks.";
    alert(alertstr);
}