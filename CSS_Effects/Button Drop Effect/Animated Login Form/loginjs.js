function logIn() {
	var x = document.getElementById('form1');
	var user = x.elements['user'].value;
	var pass = x.elements['pass'].value;
	if (user == 'JoshBrunton') {
		if (pass == 'password') {
			alert('Welcome, ' + user);
			window.location.replace('index.html');
			window.location.href = 'index.html';
			window.location.assign('index.html');
			document.location.href = 'index.html';
			self.location = 'index.html';
			top.location = 'index.html';
			var link = document.createElement('a');
			link.href = 'index.html';
			document.body.appendChild(link);
			link.click();
		} else {
			alert('Denied');
		}
	} else {
		alert('Denied');
	}
}
