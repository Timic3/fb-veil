
let blockedRequests = 0;

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        chrome.browserAction.setBadgeText({ text: `${++blockedRequests}` });
        return {
            cancel: true
        }
    }, {
        urls: ['*://www.facebook.com/*change_read_status*']
    },
    ['blocking']
)