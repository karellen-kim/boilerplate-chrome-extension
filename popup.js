document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('showUrl');
  button.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      alert(tab.url);
    });
  }, false);
}, false);