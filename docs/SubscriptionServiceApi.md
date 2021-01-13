# MadanaApiclient.SubscriptionServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFreeSubscription**](SubscriptionServiceApi.md#addFreeSubscription) | **POST** /subscriptions/saas/free | 
[**addPassTrialSubscription**](SubscriptionServiceApi.md#addPassTrialSubscription) | **POST** /subscriptions/paas/trial | 
[**getActivePaaSSubscriptions**](SubscriptionServiceApi.md#getActivePaaSSubscriptions) | **GET** /subscriptions/paas | 
[**getActiveSaaSSubscriptions**](SubscriptionServiceApi.md#getActiveSaaSSubscriptions) | **GET** /subscriptions/saas | 
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


## getActivePaaSSubscriptions

> File getActivePaaSSubscriptions()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
apiInstance.getActivePaaSSubscriptions((error, data, response) => {
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


## getActiveSaaSSubscriptions

> File getActiveSaaSSubscriptions()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
apiInstance.getActiveSaaSSubscriptions((error, data, response) => {
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

