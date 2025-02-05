function main() {
    console.log('Hello from content script');

    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('bundle.js');

    document.head.appendChild(script);

}

window.addEventListener('load', main);