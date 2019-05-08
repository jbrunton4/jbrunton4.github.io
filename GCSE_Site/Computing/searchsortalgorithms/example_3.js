function linear_search(array) {
	target = prompt('Target data?');
	confirmed = false;
	i = 0;
	while (confirmed == false):
		temp = array[i];
		if (temp == target) {
			alert('Target ' + target + ' found at index ' + i);
		} else {
			i++;
			if (i > array.length) {
				alert('It doesn\'t appear to be here.');
				break;
			}
		}
}
