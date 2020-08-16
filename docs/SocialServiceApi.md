# MadanaApiclient.SocialServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMyProfile**](SocialServiceApi.md#getMyProfile) | **GET** /social/profiles/me | 
[**getPlatforms2**](SocialServiceApi.md#getPlatforms2) | **GET** /social | Returns all Platforms / Systems that can be Connected to the MADANA Service.
[**getRanking**](SocialServiceApi.md#getRanking) | **GET** /social/ranking | Returns the Ranking by PTS within the System.
[**getSocialPlatformFeed**](SocialServiceApi.md#getSocialPlatformFeed) | **GET** /social/feed/{platform} | 
[**getUserProfile**](SocialServiceApi.md#getUserProfile) | **GET** /social/profiles/{username} | 
[**getUserProfile_0**](SocialServiceApi.md#getUserProfile_0) | **GET** /social/profiles/{username}/simple | 



## getMyProfile

> File getMyProfile()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialServiceApi();
apiInstance.getMyProfile((error, data, response) => {
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


## getPlatforms2

> File getPlatforms2()

Returns all Platforms / Systems that can be Connected to the MADANA Service.

Returns all Platforms / Systems that can be Connected to the MADANA Service

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialServiceApi();
apiInstance.getPlatforms2((error, data, response) => {
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


## getRanking

> File getRanking()

Returns the Ranking by PTS within the System.

Returns the Ranking by PTS within the System

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialServiceApi();
apiInstance.getRanking((error, data, response) => {
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


## getSocialPlatformFeed

> File getSocialPlatformFeed(platform)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialServiceApi();
let platform = "platform_example"; // String | 
apiInstance.getSocialPlatformFeed(platform, (error, data, response) => {
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
 **platform** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserProfile

> File getUserProfile(username, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialServiceApi();
let username = "username_example"; // String | 
let opts = {
  'simple': "'false'" // String | 
};
apiInstance.getUserProfile(username, opts, (error, data, response) => {
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
 **simple** | **String**|  | [optional] [default to &#39;false&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getUserProfile_0

> File getUserProfile_0(username)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialServiceApi();
let username = "username_example"; // String | 
apiInstance.getUserProfile_0(username, (error, data, response) => {
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

