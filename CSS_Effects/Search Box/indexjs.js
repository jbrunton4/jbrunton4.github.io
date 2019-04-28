function search() {
    var searchQuery = document.getElementById('searchbox').value;
    searchQuery = searchQuery.toLowerCase();
    if (searchQuery == 'google') {
      window.location.href = 'https://www.google.com';
    } else if (searchQuery == 'youtube') {
      window.location.href = 'https://www.youtube.com';
    } else if (searchQuery == 'github') {
      window.location.href = 'https://www.github.com';
    } else if (searchQuery == 'ip finder') {
      window.location.href = 'https://jbrunton4.github.io/IP-Finder/';
    }
    else {
      alert('Could not find')
    }
}
