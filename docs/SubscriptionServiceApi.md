# MadanaApiclient.SubscriptionServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFreeSubscription**](SubscriptionServiceApi.md#addFreeSubscription) | **POST** /subscriptions/saas/free | 
[**addPassTrialSubscription**](SubscriptionServiceApi.md#addPassTrialSubscription) | **POST** /subscriptions/paas/trial | 
[**getApplication**](SubscriptionServiceApi.md#getApplication) | **GET** /subscriptions/active | 



## addFreeSubscription

> File addFreeSubscription()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
apiInstance.addFreeSubscription((error, data, response) => {
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


## addPassTrialSubscription

> File addPassTrialSubscription()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
apiInstance.addPassTrialSubscription((error, data, response) => {
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


## getApplication

> File getApplication()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
apiInstance.getApplication((error, data, response) => {
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

