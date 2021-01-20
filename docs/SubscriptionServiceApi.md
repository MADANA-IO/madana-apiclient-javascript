# MadanaApiclient.SubscriptionServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addFreeSubscription**](SubscriptionServiceApi.md#addFreeSubscription) | **POST** /subscriptions/saas/free | 
[**addPassTrialSubscription**](SubscriptionServiceApi.md#addPassTrialSubscription) | **POST** /subscriptions/paas/trial | 
[**getApplication**](SubscriptionServiceApi.md#getApplication) | **GET** /subscriptions/active | 
[**getCheckoutSession**](SubscriptionServiceApi.md#getCheckoutSession) | **GET** /subscriptions/{productname}/checkout | 
[**getCheckoutSession2**](SubscriptionServiceApi.md#getCheckoutSession2) | **POST** /subscriptions/{productname}/{newplan} | 



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


## getCheckoutSession

> File getCheckoutSession(productname)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
let productname = "productname_example"; // String | 
apiInstance.getCheckoutSession(productname, (error, data, response) => {
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
 **productname** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCheckoutSession2

> File getCheckoutSession2(newplan, productname)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.SubscriptionServiceApi();
let newplan = "newplan_example"; // String | 
let productname = "productname_example"; // String | 
apiInstance.getCheckoutSession2(newplan, productname, (error, data, response) => {
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
 **newplan** | **String**|  | 
 **productname** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

