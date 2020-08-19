# MadanaApiclient.UserServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createObject**](UserServiceApi.md#createObject) | **POST** /users | Creates a new user object.
[**deleteObject**](UserServiceApi.md#deleteObject) | **DELETE** /users/{username} | Deletes an User based on the provided id and securitycontext.
[**deleteObject_0**](UserServiceApi.md#deleteObject_0) | **DELETE** /users/{username}/social/{platform}/{ident} | Deletes linked account from the user and securitycontext.
[**getAvatars**](UserServiceApi.md#getAvatars) | **GET** /users/{username}/avatars | 
[**getCertificates**](UserServiceApi.md#getCertificates) | **GET** /users/{username}/certificates | 
[**getObject2**](UserServiceApi.md#getObject2) | **GET** /users/{username} | 
[**setAvatar**](UserServiceApi.md#setAvatar) | **POST** /users/{username}/avatars | 
[**setSettings**](UserServiceApi.md#setSettings) | **POST** /users/{username}/settings | 
[**updateObject**](UserServiceApi.md#updateObject) | **PUT** /users/{username} | Updates Userproperties based on the provided user object.



## createObject

> File createObject(opts)

Creates a new user object.

Creates a new user object

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let opts = {
  'referrer': "referrer_example", // String | 
  'body': new MadanaApiclient.JsonMDNUser() // JsonMDNUser | provided user object inheriting properties and credentials
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
 **referrer** | **String**|  | [optional] 
 **body** | [**JsonMDNUser**](JsonMDNUser.md)| provided user object inheriting properties and credentials | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteObject

> File deleteObject(username)

Deletes an User based on the provided id and securitycontext.

Deletes an User based on the provided id and securitycontext

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
apiInstance.deleteObject(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## deleteObject_0

> File deleteObject_0(ident, platform, username)

Deletes linked account from the user and securitycontext.

Deletes linked account from the user and securitycontext

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let ident = "ident_example"; // String | 
let platform = "platform_example"; // String | 
let username = "username_example"; // String | 
apiInstance.deleteObject_0(ident, platform, username, (error, data, response) => {
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
 **ident** | **String**|  | 
 **platform** | **String**|  | 
 **username** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/xml


## getAvatars

> File getAvatars(username)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
apiInstance.getAvatars(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCertificates

> File getCertificates(username)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
apiInstance.getCertificates(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getObject2

> File getObject2(username)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
apiInstance.getObject2(username, (error, data, response) => {
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
 **username** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setAvatar

> File setAvatar(username, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonMDNUserProfileImage() // JsonMDNUserProfileImage | 
};
apiInstance.setAvatar(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **body** | [**JsonMDNUserProfileImage**](JsonMDNUserProfileImage.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## setSettings

> File setSettings(username, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonMDNUserSetting() // JsonMDNUserSetting | 
};
apiInstance.setSettings(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **body** | [**JsonMDNUserSetting**](JsonMDNUserSetting.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## updateObject

> File updateObject(username, opts)

Updates Userproperties based on the provided user object.

Updates Userproperties based on the provided user object

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.UserServiceApi();
let username = "username_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonMDNUser() // JsonMDNUser | the new user object inherting all properties that should be change
};
apiInstance.updateObject(username, opts, (error, data, response) => {
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
 **username** | **String**|  | 
 **body** | [**JsonMDNUser**](JsonMDNUser.md)| the new user object inherting all properties that should be change | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml

