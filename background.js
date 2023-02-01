chrome.tabs.onUpdated.addListener(init)

function init(tabId, info, tab) {
    if (info.status === 'complete') {
        const url = tab.url;

        if (url.startsWith("http://httpbin.org/")) {
            const call = "http://httpbin.org/get"

            fetch(call)
                .then(response => response.text())
                .then(body => {
                    chrome.scripting.executeScript({
                        target: { tabId: tabId },
                        args: [body],
                        func: function call(res) {
                            console.log(res)
                        }
                    });
                })
                .catch();
        }
    }
}