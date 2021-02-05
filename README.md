# madana-apiclient

MadanaApiclient - JavaScript client for madana-apiclient
<h1>Using the madana-api</h1>
       <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available 
       endpoints and used datamodels.   </p>    

 <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p> 
 <br>
  <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>    
  <br>
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.5.0-master.48
- Package version: 0.5.0-master.48
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install madana-apiclient --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your madana-apiclient from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/YOUR_USERNAME/madana-apiclient
then install it via:

```shell
    npm install YOUR_USERNAME/madana-apiclient --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MadanaApiclient = require('madana-apiclient');


var api = new MadanaApiclient.AccountServiceApi()
var token = "token_example"; // {String} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activateUser(token, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://api.madana.io/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MadanaApiclient.AccountServiceApi* | [**activateUser**](docs/AccountServiceApi.md#activateUser) | **GET** /account/activation/{token} | 
*MadanaApiclient.AccountServiceApi* | [**createPasswordReset**](docs/AccountServiceApi.md#createPasswordReset) | **POST** /account/password | Sends an Password reset mail to the given MailAddress.
*MadanaApiclient.AccountServiceApi* | [**requestVerificationMail**](docs/AccountServiceApi.md#requestVerificationMail) | **GET** /account/verifymail | Used to request a new  activation-mail for the user.
*MadanaApiclient.AccountServiceApi* | [**updatePassword**](docs/AccountServiceApi.md#updatePassword) | **PUT** /account/password | Receives the Password reset and tries to set the provided password for the user.
*MadanaApiclient.AuthenticationServiceApi* | [**authenticateApplication**](docs/AuthenticationServiceApi.md#authenticateApplication) | **POST** /authentication/application | Authenticates a new application and returns the token.
*MadanaApiclient.AuthenticationServiceApi* | [**authenticateEthereumWallet**](docs/AuthenticationServiceApi.md#authenticateEthereumWallet) | **POST** /authentication/ethereum/{wallet} | 
*MadanaApiclient.AuthenticationServiceApi* | [**authenticateUser**](docs/AuthenticationServiceApi.md#authenticateUser) | **POST** /authentication | Authenticates a new user and returns the token (  forbidden if the credentials cannot be validated ).
*MadanaApiclient.AuthenticationServiceApi* | [**authenticateWithEthereumChallenge**](docs/AuthenticationServiceApi.md#authenticateWithEthereumChallenge) | **POST** /authentication/ethereum/{wallet}/challenge | 
*MadanaApiclient.AuthenticationServiceApi* | [**getFractalAuthenticationURL**](docs/AuthenticationServiceApi.md#getFractalAuthenticationURL) | **GET** /authentication/fractal | Returns the AUthorization URL to verify a Twitter Accounts.
*MadanaApiclient.AuthenticationServiceApi* | [**getNonceForEthereumWallet**](docs/AuthenticationServiceApi.md#getNonceForEthereumWallet) | **GET** /authentication/ethereum/{wallet} | Returns a nonce for the client which is used as content for the to be created signature.
*MadanaApiclient.AuthenticationServiceApi* | [**getObject**](docs/AuthenticationServiceApi.md#getObject) | **GET** /authentication | Used to validate the active connection with the API.
*MadanaApiclient.AuthenticationServiceApi* | [**getTwitterAuthenticationURL**](docs/AuthenticationServiceApi.md#getTwitterAuthenticationURL) | **GET** /authentication/twitter | Returns the AUthorization URL to verify a Twitter Accounts.
*MadanaApiclient.AuthenticationServiceApi* | [**setFacebookUID**](docs/AuthenticationServiceApi.md#setFacebookUID) | **POST** /authentication/facebook | Used as Callback URL when users have successfully authorized their facbeook account.
*MadanaApiclient.AuthenticationServiceApi* | [**setFractalUID**](docs/AuthenticationServiceApi.md#setFractalUID) | **POST** /authentication/fractal | 
*MadanaApiclient.AuthenticationServiceApi* | [**setTwitterUID**](docs/AuthenticationServiceApi.md#setTwitterUID) | **POST** /authentication/twitter | 
*MadanaApiclient.CertificateServiceApi* | [**authenticateCertificate**](docs/CertificateServiceApi.md#authenticateCertificate) | **POST** /certificates | Issues certificates for logged-in users.
*MadanaApiclient.CertificateServiceApi* | [**getCertificateByFingerprint**](docs/CertificateServiceApi.md#getCertificateByFingerprint) | **GET** /certificates/{fingerprint} | 
*MadanaApiclient.CertificateServiceApi* | [**getRootCertificate**](docs/CertificateServiceApi.md#getRootCertificate) | **GET** /certificates/root | 
*MadanaApiclient.DataCollectionServiceApi* | [**getMethodsForType**](docs/DataCollectionServiceApi.md#getMethodsForType) | **GET** /datacollection/types/{name}/methods | 
*MadanaApiclient.DataCollectionServiceApi* | [**getNodes**](docs/DataCollectionServiceApi.md#getNodes) | **GET** /datacollection/methods | 
*MadanaApiclient.DataCollectionServiceApi* | [**getTypes**](docs/DataCollectionServiceApi.md#getTypes) | **GET** /datacollection/types | 
*MadanaApiclient.EnclaveServiceApi* | [**addHistory**](docs/EnclaveServiceApi.md#addHistory) | **POST** /enclaves/{uuid}/history | 
*MadanaApiclient.EnclaveServiceApi* | [**approveEnclave**](docs/EnclaveServiceApi.md#approveEnclave) | **POST** /enclaves/{uuid}/approval | 
*MadanaApiclient.EnclaveServiceApi* | [**assignEnclaveAgent**](docs/EnclaveServiceApi.md#assignEnclaveAgent) | **POST** /enclaves/{uuid}/assign | 
*MadanaApiclient.EnclaveServiceApi* | [**attestateEnclave**](docs/EnclaveServiceApi.md#attestateEnclave) | **POST** /enclaves/{uuid}/attestation | 
*MadanaApiclient.EnclaveServiceApi* | [**createEnclaveRunRequest**](docs/EnclaveServiceApi.md#createEnclaveRunRequest) | **POST** /enclaves | 
*MadanaApiclient.EnclaveServiceApi* | [**getEnclave**](docs/EnclaveServiceApi.md#getEnclave) | **GET** /enclaves/{uuid} | 
*MadanaApiclient.EnclaveServiceApi* | [**getEnclaveTypes**](docs/EnclaveServiceApi.md#getEnclaveTypes) | **GET** /enclaves/types | 
*MadanaApiclient.EnclaveServiceApi* | [**getEnclaves**](docs/EnclaveServiceApi.md#getEnclaves) | **GET** /enclaves | Returns UUIDs of existing analyses.
*MadanaApiclient.EnclaveServiceApi* | [**killEnclave**](docs/EnclaveServiceApi.md#killEnclave) | **POST** /enclaves/{uuid}/kill | 
*MadanaApiclient.EnvironmentServiceApi* | [**deleteEnvironment**](docs/EnvironmentServiceApi.md#deleteEnvironment) | **DELETE** /environments/{uuid} | 
*MadanaApiclient.EnvironmentServiceApi* | [**deleteEnvironmentSubscription**](docs/EnvironmentServiceApi.md#deleteEnvironmentSubscription) | **DELETE** /environments/{uuid}/subscribe | 
*MadanaApiclient.EnvironmentServiceApi* | [**getEnvironment**](docs/EnvironmentServiceApi.md#getEnvironment) | **GET** /environments/{uuid} | 
*MadanaApiclient.EnvironmentServiceApi* | [**getEnvironments**](docs/EnvironmentServiceApi.md#getEnvironments) | **GET** /environments | Returns UUIDs of existing analyses.
*MadanaApiclient.EnvironmentServiceApi* | [**getPublishedEnvironments**](docs/EnvironmentServiceApi.md#getPublishedEnvironments) | **GET** /environments/published | 
*MadanaApiclient.EnvironmentServiceApi* | [**getSubscribedEnvironments**](docs/EnvironmentServiceApi.md#getSubscribedEnvironments) | **GET** /environments/subscriptions | 
*MadanaApiclient.EnvironmentServiceApi* | [**publishEnvironment**](docs/EnvironmentServiceApi.md#publishEnvironment) | **POST** /environments | 
*MadanaApiclient.EnvironmentServiceApi* | [**subscribeEnvironment**](docs/EnvironmentServiceApi.md#subscribeEnvironment) | **POST** /environments/{uuid}/subscribe | 
*MadanaApiclient.EnvironmentServiceApi* | [**updateEnvironment**](docs/EnvironmentServiceApi.md#updateEnvironment) | **PUT** /environments/{uuid} | 
*MadanaApiclient.InvoiceServiceApi* | [**getBillingPortalURL**](docs/InvoiceServiceApi.md#getBillingPortalURL) | **GET** /invoices/portal | 
*MadanaApiclient.InvoiceServiceApi* | [**getInvoices**](docs/InvoiceServiceApi.md#getInvoices) | **GET** /invoices | 
*MadanaApiclient.NodeServiceApi* | [**getBootstrap**](docs/NodeServiceApi.md#getBootstrap) | **GET** /nodes/bootstrap | 
*MadanaApiclient.NodeServiceApi* | [**getNodes2**](docs/NodeServiceApi.md#getNodes2) | **GET** /nodes | 
*MadanaApiclient.NodeServiceApi* | [**postNodeInfo**](docs/NodeServiceApi.md#postNodeInfo) | **POST** /nodes | 
*MadanaApiclient.OrganizationServiceApi* | [**getNodes3**](docs/OrganizationServiceApi.md#getNodes3) | **GET** /organizations | 
*MadanaApiclient.RequestServiceApi* | [**addData**](docs/RequestServiceApi.md#addData) | **POST** /requests/{uuid}/data | Is used to upload and park the data till the AnalysisRequest gets processed.
*MadanaApiclient.RequestServiceApi* | [**cancelProcessing**](docs/RequestServiceApi.md#cancelProcessing) | **POST** /requests/{uuid}/cancel | Endpoint is called from the Analysis Processing entity to submit the result.
*MadanaApiclient.RequestServiceApi* | [**createNewRequest**](docs/RequestServiceApi.md#createNewRequest) | **POST** /requests | Endpoint used to create a new Analysis Request.
*MadanaApiclient.RequestServiceApi* | [**getActions**](docs/RequestServiceApi.md#getActions) | **GET** /requests/actions | 
*MadanaApiclient.RequestServiceApi* | [**getAgent**](docs/RequestServiceApi.md#getAgent) | **GET** /requests/{uuid}/agent | Is called from the APE to request all parked datasets.
*MadanaApiclient.RequestServiceApi* | [**getAllRequests**](docs/RequestServiceApi.md#getAllRequests) | **GET** /requests | Returns UUIDs of existing analyses.
*MadanaApiclient.RequestServiceApi* | [**getData**](docs/RequestServiceApi.md#getData) | **GET** /requests/{uuid}/data | Is called from the APE to request all parked datasets.
*MadanaApiclient.RequestServiceApi* | [**getRequest**](docs/RequestServiceApi.md#getRequest) | **GET** /requests/{uuid} | Returns the details for certain Request.
*MadanaApiclient.RequestServiceApi* | [**getResult**](docs/RequestServiceApi.md#getResult) | **GET** /requests/{uuid}/result | Can be called from creator to request the AnalysisResult.
*MadanaApiclient.RequestServiceApi* | [**getStatus**](docs/RequestServiceApi.md#getStatus) | **GET** /requests/stats | 
*MadanaApiclient.RequestServiceApi* | [**giveConsent**](docs/RequestServiceApi.md#giveConsent) | **POST** /requests/{uuid}/consent | Used to give consent for request.
*MadanaApiclient.RequestServiceApi* | [**initRequestParameters**](docs/RequestServiceApi.md#initRequestParameters) | **POST** /requests/{uuid} | Endpoint used initialized addition datacollection parameters for requester.
*MadanaApiclient.RequestServiceApi* | [**setAgent**](docs/RequestServiceApi.md#setAgent) | **POST** /requests/{uuid}/agent | Is called from the APE to request all parked datasets.
*MadanaApiclient.RequestServiceApi* | [**setResult**](docs/RequestServiceApi.md#setResult) | **POST** /requests/{uuid}/result | Endpoint is called from the Analysis Processing entity to submit the result.
*MadanaApiclient.SocialPlatformServiceApi* | [**getPlatforms**](docs/SocialPlatformServiceApi.md#getPlatforms) | **GET** /platforms | Used to Handle Incoming Webhooks from Facebook.
*MadanaApiclient.SocialPlatformServiceApi* | [**listenTwitterWebhook**](docs/SocialPlatformServiceApi.md#listenTwitterWebhook) | **POST** /platforms/twitter | Used to Handle Incoming Webhooks from Facebook.
*MadanaApiclient.SocialPlatformServiceApi* | [**registerTwitterWebhook**](docs/SocialPlatformServiceApi.md#registerTwitterWebhook) | **GET** /platforms/twitter | Used to Handle Incoming Webhooks from Twitter.
*MadanaApiclient.SocialServiceApi* | [**getMyProfile**](docs/SocialServiceApi.md#getMyProfile) | **GET** /social/profiles/me | 
*MadanaApiclient.SocialServiceApi* | [**getPlatforms2**](docs/SocialServiceApi.md#getPlatforms2) | **GET** /social | Returns all Platforms / Systems that can be Connected to the MADANA Service.
*MadanaApiclient.SocialServiceApi* | [**getRanking**](docs/SocialServiceApi.md#getRanking) | **GET** /social/ranking | Returns the Ranking by PTS within the System.
*MadanaApiclient.SocialServiceApi* | [**getSocialPlatformFeed**](docs/SocialServiceApi.md#getSocialPlatformFeed) | **GET** /social/feed/{platform} | 
*MadanaApiclient.SocialServiceApi* | [**getUserProfile**](docs/SocialServiceApi.md#getUserProfile) | **GET** /social/profiles/{username} | 
*MadanaApiclient.SocialServiceApi* | [**getUserProfile_0**](docs/SocialServiceApi.md#getUserProfile_0) | **GET** /social/profiles/{username}/simple | 
*MadanaApiclient.SubscriptionServiceApi* | [**addFreeSubscription**](docs/SubscriptionServiceApi.md#addFreeSubscription) | **POST** /subscriptions/saas/free | 
*MadanaApiclient.SubscriptionServiceApi* | [**addPassTrialSubscription**](docs/SubscriptionServiceApi.md#addPassTrialSubscription) | **POST** /subscriptions/paas/trial | 
*MadanaApiclient.SubscriptionServiceApi* | [**getApplication**](docs/SubscriptionServiceApi.md#getApplication) | **GET** /subscriptions/active | 
*MadanaApiclient.SubscriptionServiceApi* | [**getCheckoutSession**](docs/SubscriptionServiceApi.md#getCheckoutSession) | **GET** /subscriptions/{productname}/checkout | 
*MadanaApiclient.SubscriptionServiceApi* | [**getCheckoutSession2**](docs/SubscriptionServiceApi.md#getCheckoutSession2) | **POST** /subscriptions/{productname}/{newplan} | 
*MadanaApiclient.SystemServiceApi* | [**getAllObjects**](docs/SystemServiceApi.md#getAllObjects) | **GET** /system/health | 
*MadanaApiclient.SystemServiceApi* | [**getApplication2**](docs/SystemServiceApi.md#getApplication2) | **GET** /system/usage | Return the current application usage.
*MadanaApiclient.UserServiceApi* | [**cancelSubscription**](docs/UserServiceApi.md#cancelSubscription) | **POST** /users/{username}/subscriptions/{planname}/cancel | 
*MadanaApiclient.UserServiceApi* | [**createObject**](docs/UserServiceApi.md#createObject) | **POST** /users | Creates a new user object.
*MadanaApiclient.UserServiceApi* | [**deleteObject**](docs/UserServiceApi.md#deleteObject) | **DELETE** /users/{username} | Deletes an User based on the provided id and securitycontext.
*MadanaApiclient.UserServiceApi* | [**deleteObject_0**](docs/UserServiceApi.md#deleteObject_0) | **DELETE** /users/{username}/social/{platform}/{ident} | Deletes linked account from the user and securitycontext.
*MadanaApiclient.UserServiceApi* | [**getAvatars**](docs/UserServiceApi.md#getAvatars) | **GET** /users/{username}/avatars | 
*MadanaApiclient.UserServiceApi* | [**getCertificates**](docs/UserServiceApi.md#getCertificates) | **GET** /users/{username}/certificates | 
*MadanaApiclient.UserServiceApi* | [**getEnclaveHistory**](docs/UserServiceApi.md#getEnclaveHistory) | **GET** /users/{username}/enclavehistory | 
*MadanaApiclient.UserServiceApi* | [**getObject2**](docs/UserServiceApi.md#getObject2) | **GET** /users/{username} | 
*MadanaApiclient.UserServiceApi* | [**setAvatar**](docs/UserServiceApi.md#setAvatar) | **POST** /users/{username}/avatars | 
*MadanaApiclient.UserServiceApi* | [**setSettings**](docs/UserServiceApi.md#setSettings) | **POST** /users/{username}/settings | 
*MadanaApiclient.UserServiceApi* | [**updateObject**](docs/UserServiceApi.md#updateObject) | **PUT** /users/{username} | Updates Userproperties based on the provided user object.


## Documentation for Models

 - [MadanaApiclient.JsonDiskConfig](docs/JsonDiskConfig.md)
 - [MadanaApiclient.JsonEnclavePort](docs/JsonEnclavePort.md)
 - [MadanaApiclient.JsonEnclaveProcess](docs/JsonEnclaveProcess.md)
 - [MadanaApiclient.JsonEnclaveRunRequest](docs/JsonEnclaveRunRequest.md)
 - [MadanaApiclient.JsonEnclaveRunningAttestation](docs/JsonEnclaveRunningAttestation.md)
 - [MadanaApiclient.JsonEnclaveRunningAttestationApproval](docs/JsonEnclaveRunningAttestationApproval.md)
 - [MadanaApiclient.JsonEnclaveRunningAttestationApprovalAllOf](docs/JsonEnclaveRunningAttestationApprovalAllOf.md)
 - [MadanaApiclient.JsonEnvironment](docs/JsonEnvironment.md)
 - [MadanaApiclient.JsonEnvironmentPublishingRequest](docs/JsonEnvironmentPublishingRequest.md)
 - [MadanaApiclient.JsonIPFSSystemInfo](docs/JsonIPFSSystemInfo.md)
 - [MadanaApiclient.JsonKubernetesEnclave](docs/JsonKubernetesEnclave.md)
 - [MadanaApiclient.JsonKubernetesEnclaveAllOf](docs/JsonKubernetesEnclaveAllOf.md)
 - [MadanaApiclient.JsonMDNAUserObject](docs/JsonMDNAUserObject.md)
 - [MadanaApiclient.JsonMDNCertificate](docs/JsonMDNCertificate.md)
 - [MadanaApiclient.JsonMDNData](docs/JsonMDNData.md)
 - [MadanaApiclient.JsonMDNMailAddress](docs/JsonMDNMailAddress.md)
 - [MadanaApiclient.JsonMDNOAuthToken](docs/JsonMDNOAuthToken.md)
 - [MadanaApiclient.JsonMDNPasswordReset](docs/JsonMDNPasswordReset.md)
 - [MadanaApiclient.JsonMDNSetting](docs/JsonMDNSetting.md)
 - [MadanaApiclient.JsonMDNSocialUserObject](docs/JsonMDNSocialUserObject.md)
 - [MadanaApiclient.JsonMDNToken](docs/JsonMDNToken.md)
 - [MadanaApiclient.JsonMDNUser](docs/JsonMDNUser.md)
 - [MadanaApiclient.JsonMDNUserAllOf](docs/JsonMDNUserAllOf.md)
 - [MadanaApiclient.JsonMDNUserCredentials](docs/JsonMDNUserCredentials.md)
 - [MadanaApiclient.JsonMDNUserProfileImage](docs/JsonMDNUserProfileImage.md)
 - [MadanaApiclient.JsonMDNUserSetting](docs/JsonMDNUserSetting.md)
 - [MadanaApiclient.JsonMDNUserSettingAllOf](docs/JsonMDNUserSettingAllOf.md)
 - [MadanaApiclient.JsonNetworkInterface](docs/JsonNetworkInterface.md)
 - [MadanaApiclient.JsonNodeInfo](docs/JsonNodeInfo.md)
 - [MadanaApiclient.JsonProcess](docs/JsonProcess.md)
 - [MadanaApiclient.JsonRunConfig](docs/JsonRunConfig.md)
 - [MadanaApiclient.JsonSGXInfo](docs/JsonSGXInfo.md)
 - [MadanaApiclient.JsonSignedData](docs/JsonSignedData.md)
 - [MadanaApiclient.JsonSignedDataUtils](docs/JsonSignedDataUtils.md)
 - [MadanaApiclient.JsonV1Event](docs/JsonV1Event.md)
 - [MadanaApiclient.JsonV1EventList](docs/JsonV1EventList.md)
 - [MadanaApiclient.JsonV1EventSeries](docs/JsonV1EventSeries.md)
 - [MadanaApiclient.JsonV1EventSource](docs/JsonV1EventSource.md)
 - [MadanaApiclient.JsonV1ListMeta](docs/JsonV1ListMeta.md)
 - [MadanaApiclient.JsonV1ManagedFieldsEntry](docs/JsonV1ManagedFieldsEntry.md)
 - [MadanaApiclient.JsonV1ObjectMeta](docs/JsonV1ObjectMeta.md)
 - [MadanaApiclient.JsonV1ObjectReference](docs/JsonV1ObjectReference.md)
 - [MadanaApiclient.JsonV1OwnerReference](docs/JsonV1OwnerReference.md)
 - [MadanaApiclient.JsonWireguardInterface](docs/JsonWireguardInterface.md)
 - [MadanaApiclient.JsonWireguardInterfaceAllOf](docs/JsonWireguardInterfaceAllOf.md)
 - [MadanaApiclient.XmlNs0DiskConfig](docs/XmlNs0DiskConfig.md)
 - [MadanaApiclient.XmlNs0DiskConfigAllOf](docs/XmlNs0DiskConfigAllOf.md)
 - [MadanaApiclient.XmlNs0EnclavePort](docs/XmlNs0EnclavePort.md)
 - [MadanaApiclient.XmlNs0EnclavePortAllOf](docs/XmlNs0EnclavePortAllOf.md)
 - [MadanaApiclient.XmlNs0EnclaveProcess](docs/XmlNs0EnclaveProcess.md)
 - [MadanaApiclient.XmlNs0EnclaveProcessAllOf](docs/XmlNs0EnclaveProcessAllOf.md)
 - [MadanaApiclient.XmlNs0EnclaveRunningAttestation](docs/XmlNs0EnclaveRunningAttestation.md)
 - [MadanaApiclient.XmlNs0EnclaveRunningAttestationAllOf](docs/XmlNs0EnclaveRunningAttestationAllOf.md)
 - [MadanaApiclient.XmlNs0EnclaveRunningAttestationApproval](docs/XmlNs0EnclaveRunningAttestationApproval.md)
 - [MadanaApiclient.XmlNs0EnclaveRunningAttestationApprovalAllOf](docs/XmlNs0EnclaveRunningAttestationApprovalAllOf.md)
 - [MadanaApiclient.XmlNs0Environment](docs/XmlNs0Environment.md)
 - [MadanaApiclient.XmlNs0EnvironmentAllOf](docs/XmlNs0EnvironmentAllOf.md)
 - [MadanaApiclient.XmlNs0IPFSSystemInfo](docs/XmlNs0IPFSSystemInfo.md)
 - [MadanaApiclient.XmlNs0IPFSSystemInfoAllOf](docs/XmlNs0IPFSSystemInfoAllOf.md)
 - [MadanaApiclient.XmlNs0InputStream](docs/XmlNs0InputStream.md)
 - [MadanaApiclient.XmlNs0KubernetesEnclave](docs/XmlNs0KubernetesEnclave.md)
 - [MadanaApiclient.XmlNs0KubernetesEnclaveAllOf](docs/XmlNs0KubernetesEnclaveAllOf.md)
 - [MadanaApiclient.XmlNs0MDNSetting](docs/XmlNs0MDNSetting.md)
 - [MadanaApiclient.XmlNs0MDNSettingAllOf](docs/XmlNs0MDNSettingAllOf.md)
 - [MadanaApiclient.XmlNs0MDNUserProfileImage](docs/XmlNs0MDNUserProfileImage.md)
 - [MadanaApiclient.XmlNs0MDNUserProfileImageAllOf](docs/XmlNs0MDNUserProfileImageAllOf.md)
 - [MadanaApiclient.XmlNs0MDNUserSetting](docs/XmlNs0MDNUserSetting.md)
 - [MadanaApiclient.XmlNs0MDNUserSettingAllOf](docs/XmlNs0MDNUserSettingAllOf.md)
 - [MadanaApiclient.XmlNs0NetworkInterface](docs/XmlNs0NetworkInterface.md)
 - [MadanaApiclient.XmlNs0NetworkInterfaceAllOf](docs/XmlNs0NetworkInterfaceAllOf.md)
 - [MadanaApiclient.XmlNs0NodeInfo](docs/XmlNs0NodeInfo.md)
 - [MadanaApiclient.XmlNs0NodeInfoAllOf](docs/XmlNs0NodeInfoAllOf.md)
 - [MadanaApiclient.XmlNs0Process](docs/XmlNs0Process.md)
 - [MadanaApiclient.XmlNs0RunConfig](docs/XmlNs0RunConfig.md)
 - [MadanaApiclient.XmlNs0RunConfigAllOf](docs/XmlNs0RunConfigAllOf.md)
 - [MadanaApiclient.XmlNs0SGXInfo](docs/XmlNs0SGXInfo.md)
 - [MadanaApiclient.XmlNs0SGXInfoAllOf](docs/XmlNs0SGXInfoAllOf.md)
 - [MadanaApiclient.XmlNs0SignedData](docs/XmlNs0SignedData.md)
 - [MadanaApiclient.XmlNs0SignedDataAllOf](docs/XmlNs0SignedDataAllOf.md)
 - [MadanaApiclient.XmlNs0WireguardInterface](docs/XmlNs0WireguardInterface.md)
 - [MadanaApiclient.XmlNs0WireguardInterfaceAllOf](docs/XmlNs0WireguardInterfaceAllOf.md)


## Documentation for Authorization

All endpoints do not require authorization.
