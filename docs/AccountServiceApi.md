# MadanaApiclient.AccountServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateUser**](AccountServiceApi.md#activateUser) | **GET** /account/activation/{token} | 
[**createPasswordReset**](AccountServiceApi.md#createPasswordReset) | **POST** /account/password | Sends an Password reset mail to the given MailAddress.
[**requestVerificationMail**](AccountServiceApi.md#requestVerificationMail) | **GET** /account/verifymail | Used to request a new  activation-mail for the user.
[**updatePassword**](AccountServiceApi.md#updatePassword) | **PUT** /account/password | Receives the Password reset and tries to set the provided password for the user.



## activateUser

> File activateUser(token)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.AccountServiceApi();
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


## createPasswordReset

> File createPasswordReset(opts)

Sends an Password reset mail to the given MailAddress.

Sends an Password reset mail to the given MailAddress

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.AccountServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonMDNMailAddress() // JsonMDNMailAddress | - the MaiAddress under which the user has signed up
};
apiInstance.createPasswordReset(opts, (error, data, response) => {
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
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.AccountServiceApi();
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


## updatePassword

> File updatePassword(opts)

Receives the Password reset and tries to set the provided password for the user.

Receives the Password reset and tries to set the provided password for the user. The Password will only be set if a valid token is provided

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.AccountServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonMDNPasswordReset() // JsonMDNPasswordReset | - the MDN_PasswordReset Object
};
apiInstance.updatePassword(opts, (error, data, response) => {
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

