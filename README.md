
![Run aragonCLI](https://github.com/aracred/AraCred/workflows/Run%20aragonCLI/badge.svg)

<br>

# kyc-mint
kyc-mint (someone comeup with a better name for this!) automates the process of minting membership tokens in EstonaDAO. this is achieved thorugh the magic of GitHub actions. every hour KYC mint runs, if there are new whitelisted members then it mints tokens for them. 

kyc-mint assumes the verification service can append to the `./log/kyc.json` file