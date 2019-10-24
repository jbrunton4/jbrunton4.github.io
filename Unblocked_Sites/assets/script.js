function search() {
    // get the query from the search box
    var searchQuery = document.getElementById('searchbox').value;
    
    // adjust the query for all attempts
    var attempt1 = 'http://www.'+searchQuery+'/';
    var attempt2 = 'https:://www.'+searchQuery+'/';
    var attempt3 = 'http:://'+searchQuery+'/';
    var attempt4 = 'https:://'+searchQuery+'/';
    // var attempt5 = 'www.'+searchQuery+'/';
    // var attempt6 = searchQuery+'/';
    var attempt7 = 'http:://www.'+searchQuery;
    var attempt8 = 'https:://www.'+searchQuery;
    var attempt9 = 'http:://'+searchQuery;
    var attempt10 = 'https:://'+searchQuery;
    // var attempt11 = 'www.'+searchQuery;
    // var attempt12 = searchQuery;
    var attempt13 = 'http:://www.'+searchQuery+'/index.html';
    var attempt14 = 'https:://www.'+searchQuery+'/index.html';
    var attempt15 = 'http:://'+searchQuery+'/index.html';
    var attempt16 = 'https:://'+searchQuery+'/index.html';
    // var attempt17 = 'www.'+searchQuery+'/index.html';
    // var attempt18 = searchQuery+'/index.html';
    
    // make a google search variable
    var googleSearch = 'https://www.google.com/search?q='+searchQuery+'+unblocked';
    
    // open the windows in new tabs
    window.open(attempt1);
    window.open(attempt2);
    window.open(attempt3);
    window.open(attempt4);
    // window.open(attempt5);
    // window.open(attempt6);
    window.open(attempt7);
    window.open(attempt8);
    window.open(attempt9);
    window.open(attempt10);
    // window.open(attempt11);
    // window.open(attempt12);
    window.open(attempt13);
    window.open(attempt14);
    window.open(attempt15);
    window.open(attempt16);
    // window.open(attempt17);
    // window.open(attempt18);
    window.open(googleSearch);
}
function info() {
    var alertstr = "Not working? Try in internet explorer, or make sure you search in the format example.com. " + "Using browsers other than IE can block the site from trying to open all possible windows. " + "This site won't always work, and there's only so much you can do without certain permissions. ";
    alert(alertstr);
}
