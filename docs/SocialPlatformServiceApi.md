# MadanaApiclient.SocialPlatformServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPlatforms**](SocialPlatformServiceApi.md#getPlatforms) | **GET** /platforms | Used to Handle Incoming Webhooks from Facebook.
[**listenTwitterWebhook**](SocialPlatformServiceApi.md#listenTwitterWebhook) | **POST** /platforms/twitter | Used to Handle Incoming Webhooks from Facebook.
[**registerTwitterWebhook**](SocialPlatformServiceApi.md#registerTwitterWebhook) | **GET** /platforms/twitter | Used to Handle Incoming Webhooks from Twitter.



## getPlatforms

> File getPlatforms(opts)

Used to Handle Incoming Webhooks from Facebook.

Used to Handle Incoming Webhooks from Facebook

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialPlatformServiceApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.getPlatforms(opts, (error, data, response) => {
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

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## listenTwitterWebhook

> File listenTwitterWebhook(opts)

Used to Handle Incoming Webhooks from Facebook.

Used to Handle Incoming Webhooks from Facebook

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialPlatformServiceApi();
let opts = {
  'body': "body_example" // String | 
};
apiInstance.listenTwitterWebhook(opts, (error, data, response) => {
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


## registerTwitterWebhook

> File registerTwitterWebhook(opts)

Used to Handle Incoming Webhooks from Twitter.

Used to Handle Incoming Webhooks from Twitter

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SocialPlatformServiceApi();
let opts = {
  'crcToken': "crcToken_example" // String | 
};
apiInstance.registerTwitterWebhook(opts, (error, data, response) => {
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
 **crcToken** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

