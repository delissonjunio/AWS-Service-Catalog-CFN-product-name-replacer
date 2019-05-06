window.addEventListener ('load', () => {
    const mutationObserver = new MutationObserver(update);
    mutationObserver.observe(document.getElementById('provisionedProduct-card-group'), {childList: true, subtree: true});

    update()
});


function update () {
    const allProvisionedProductLinks = document.querySelectorAll('a[href^="#/stack/details?recordId="]');
    for (const node of allProvisionedProductLinks) {
        const matches = node.getAttribute('href').match(/#\/stack\/details\?recordId=(rec-[a-z0-9]+)&provisionedProductId=(pp-[a-z0-9]+)/);
        if (!matches) {
            continue;
        }

        if (node.childElementCount > 0) {
            continue;
        }

        const productName = node.textContent;
        const provisionedProductId = matches[2];

        chrome.runtime.sendMessage({id: 'setPP', productName, provisionedProductId});
    }
}
