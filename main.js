window.addEventListener ('load', () => {
    const mutationObserver = new MutationObserver(main);
    mutationObserver.observe(document.querySelector('.awsui-cards-container'), {childList: true, subtree: true});

    main()
});


function main () {
    const scTitleNodes = document.querySelectorAll('span[title^="SC-"]');
    const provisionedProducts = [];

    for (const node of scTitleNodes) {
        const title = node.getAttribute('title');
        const matches = title.match(/SC-\d{12}-(pp-[a-z0-9]+)?(?:-([a-zA-Z0-9]+)-[A-Z0-9]+)?/);

        if (matches) {
            const provisionedProductId = matches[1];
            const suffix = matches[2];

            provisionedProducts.push({ provisionedProductId, node, suffix });
        }
    }

    for (const provisionedProduct of provisionedProducts) {
        const { provisionedProductId, node, suffix } = provisionedProduct;

        chrome.runtime.sendMessage({id: 'getPP', provisionedProductId}, {}, response => {
            if (response) {
                node.textContent = response.productName + (suffix ? '-' + suffix : '');
            }
        });
    }
}

