# AWS Service Catalog CFN product name replacer
## Description
Replaces AWS Service Catalog-generated stack names with the product's name
This will transform cryptic AWS Service Catalog-generated stack names from SC-1234567890123-pp-...-??? into their product names. No requests are made and your data never leaves the browser -- to update the mapping of provisioned product ids to product names, just visit the Service Catalog home and navigate around.

## How to use
Install the extension in [the Chrome Webstore](https://chrome.google.com/webstore/detail/aws-service-catalog-cfn-p/jnoogdmmkpgjefnnjfoljmigophanlmc). Then, every time you visit the AWS Service Catalog page, an internal storage gets updated that maps Provisioned Product IDs to Product Names. After that, every visit to the CloudFormation home will pull that mapping and update the names accordingly. No data is ever sent or requested anywhere. No data is stored other than the mapping, which is stored locally on the Chrome Extension storage area.
