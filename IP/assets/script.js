function findIp() {
  var first = Math.floor((Math.random() * 1000) + 1);
  var second = Math.floor((Math.random() * 1000) + 1);
  var third = Math.floor((Math.random() * 100) + 1);
  var fourth = Math.floor((Math.random() * 10) + 1);
  alert('IP Addr. : ' + first.toString() + '.' + second.toString() + '.' + third.toString() + '.' + fourth.toString());
  var ip = first.toString() + '.' + second.toString() + '.' + third.toString() + '.' + fourth.toString()
  window.location.href='https://iplocation.com/';
}
