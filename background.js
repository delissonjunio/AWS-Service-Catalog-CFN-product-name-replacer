chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const provisionedProductId = message.provisionedProductId;

    if (message.id === 'setPP') {
        chrome.storage.sync.set({[provisionedProductId]: message.productName});
    } else if (message.id === 'getPP') {
        chrome.storage.sync.get([provisionedProductId], result => {
            const productName = result[provisionedProductId];

            if (productName) {
                sendResponse({ productName, provisionedProductId });
            } else {
                sendResponse();
            }
        });

        return true;
    }
});
