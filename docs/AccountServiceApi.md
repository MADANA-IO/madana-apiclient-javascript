# MadanaSampleclientJavascript.AccountServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUser**](AccountServiceApi.md#activateUser) | **GET** /account/activation/{token} | 
[**createObject**](AccountServiceApi.md#createObject) | **POST** /account/password | Sends an Password reset mail to the given MailAddress.
[**requestVerificationMail**](AccountServiceApi.md#requestVerificationMail) | **GET** /account/verifymail | Used to request a new  activation-mail for the user.
[**updateObject**](AccountServiceApi.md#updateObject) | **PUT** /account/password | Receives the Password reset and tries to set the provided password for the user.



## activateUser

> File activateUser(token)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AccountServiceApi();
let token = "token_example"; // String | 
apiInstance.activateUser(token, (error, data, response) => {
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
 **token** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## createObject

> File createObject(opts)

Sends an Password reset mail to the given MailAddress.

Sends an Password reset mail to the given MailAddress

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AccountServiceApi();
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNMailAddress() // JsonMDNMailAddress | - the MaiAddress under which the user has signed up
};
apiInstance.createObject(opts, (error, data, response) => {
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
 **body** | [**JsonMDNMailAddress**](JsonMDNMailAddress.md)| - the MaiAddress under which the user has signed up | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## requestVerificationMail

> {String: Object} requestVerificationMail()

Used to request a new  activation-mail for the user.

Used to request a new  activation-mail for the user

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AccountServiceApi();
apiInstance.requestVerificationMail((error, data, response) => {
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


## updateObject

> File updateObject(opts)

Receives the Password reset and tries to set the provided password for the user.

Receives the Password reset and tries to set the provided password for the user. The Password will only be set if a valid token is provided

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.AccountServiceApi();
let opts = {
  'body': new MadanaSampleclientJavascript.JsonMDNPasswordReset() // JsonMDNPasswordReset | - the MDN_PasswordReset Object
};
apiInstance.updateObject(opts, (error, data, response) => {
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
 **body** | [**JsonMDNPasswordReset**](JsonMDNPasswordReset.md)| - the MDN_PasswordReset Object | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml

