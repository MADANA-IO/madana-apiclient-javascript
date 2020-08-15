# MadanaSampleclientJavascript.AuthenticationServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateApplication**](AuthenticationServiceApi.md#authenticateApplication) | **POST** /authentication/application | Authenticates a new application and returns the token.
[**authenticateEthereumWallet**](AuthenticationServiceApi.md#authenticateEthereumWallet) | **POST** /authentication/ethereum/{wallet} | 
[**authenticateUser**](AuthenticationServiceApi.md#authenticateUser) | **POST** /authentication | Authenticates a new user and returns the token (  forbidden if the credentials cannot be validated ).
[**authenticateWithEthereumChallenge**](AuthenticationServiceApi.md#authenticateWithEthereumChallenge) | **POST** /authentication/ethereum/{wallet}/challenge | 
[**getFractalAuthenticationURL**](AuthenticationServiceApi.md#getFractalAuthenticationURL) | **GET** /authentication/fractal | Returns the AUthorization URL to verify a Twitter Accounts.
[**getNonceForEthereumWallet**](AuthenticationServiceApi.md#getNonceForEthereumWallet) | **GET** /authentication/ethereum/{wallet} | Returns a nonce for the client which is used as content for the to be created signature.
[**getObject**](AuthenticationServiceApi.md#getObject) | **GET** /authentication | Used to validate the active connection with the API.
[**getTwitterAuthenticationURL**](AuthenticationServiceApi.md#getTwitterAuthenticationURL) | **GET** /authentication/twitter | Returns the AUthorization URL to verify a Twitter Accounts.
[**setFacebookUID**](AuthenticationServiceApi.md#setFacebookUID) | **POST** /authentication/facebook | Used as Callback URL when users have successfully authorized their facbeook account.
[**setFractalUID**](AuthenticationServiceApi.md#setFractalUID) | **POST** /authentication/fractal | 
[**setTwitterUID**](AuthenticationServiceApi.md#setTwitterUID) | **POST** /authentication/twitter | 



## authenticateApplication

> JsonMDNToken authenticateApplication(opts)

Authenticates a new application and returns the token.

Authenticates a new application and returns the token

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNCertificate() // JsonMDNCertificate | the credentials used to validate the user
};
apiInstance.authenticateApplication(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JsonMDNCertificate**](JsonMDNCertificate.md)| the credentials used to validate the user | [optional] 

### Return type

[**JsonMDNToken**](JsonMDNToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authenticateEthereumWallet

> File authenticateEthereumWallet(wallet, opts)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let wallet = "wallet_example"; // String | the wallet which should be authenticated
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNOAuthToken() // JsonMDNOAuthToken | Token containing nonce and signate
};
apiInstance.authenticateEthereumWallet(wallet, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet** | **String**| the wallet which should be authenticated | 
 **body** | [**JsonMDNOAuthToken**](JsonMDNOAuthToken.md)| Token containing nonce and signate | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## authenticateUser

> JsonMDNToken authenticateUser(opts)

Authenticates a new user and returns the token (  forbidden if the credentials cannot be validated ).

Authenticates a new user and returns the token (  forbidden if the credentials cannot be validated )

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNUserCredentials() // JsonMDNUserCredentials | the credentials used to validate the user
};
apiInstance.authenticateUser(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JsonMDNUserCredentials**](JsonMDNUserCredentials.md)| the credentials used to validate the user | [optional] 

### Return type

[**JsonMDNToken**](JsonMDNToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authenticateWithEthereumChallenge

> File authenticateWithEthereumChallenge(wallet, opts)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let wallet = "wallet_example"; // String | the wallet which should be authenticated
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNOAuthToken() // JsonMDNOAuthToken | Token containing nonce and signate
};
apiInstance.authenticateWithEthereumChallenge(wallet, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet** | **String**| the wallet which should be authenticated | 
 **body** | [**JsonMDNOAuthToken**](JsonMDNOAuthToken.md)| Token containing nonce and signate | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## getFractalAuthenticationURL

> File getFractalAuthenticationURL()

Returns the AUthorization URL to verify a Twitter Accounts.

Returns the AUthorization URL to verify a Twitter Accounts

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
apiInstance.getFractalAuthenticationURL((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNonceForEthereumWallet

> JsonMDNToken getNonceForEthereumWallet(wallet, opts)

Returns a nonce for the client which is used as content for the to be created signature.

Returns a nonce for the client which is used as content for the to be created signature

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let wallet = "wallet_example"; // String | - wallet address as String * @HTTP 417 If the address is not valid
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.getNonceForEthereumWallet(wallet, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wallet** | **String**| - wallet address as String * @HTTP 417 If the address is not valid | 
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

[**JsonMDNToken**](JsonMDNToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObject

> {String: Object} getObject()

Used to validate the active connection with the API.

Used to validate the active connection with the API

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
apiInstance.getObject((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: Object}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTwitterAuthenticationURL

> File getTwitterAuthenticationURL()

Returns the AUthorization URL to verify a Twitter Accounts.

Returns the AUthorization URL to verify a Twitter Accounts

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
apiInstance.getTwitterAuthenticationURL((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setFacebookUID

> File setFacebookUID(opts)

Used as Callback URL when users have successfully authorized their facbeook account.

Used as Callback URL when users have successfully authorized their facbeook account

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.setFacebookUID(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## setFractalUID

> File setFractalUID(opts)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.setFractalUID(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## setTwitterUID

> File setTwitterUID(opts)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AuthenticationServiceApi();
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNOAuthToken() // JsonMDNOAuthToken | 
};
apiInstance.setTwitterUID(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JsonMDNOAuthToken**](JsonMDNOAuthToken.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml

