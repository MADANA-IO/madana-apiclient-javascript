# MadanaApiclient.EnvironmentServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteEnvironment**](EnvironmentServiceApi.md#deleteEnvironment) | **DELETE** /environments/{uuid} | 
[**deleteEnvironmentSubscription**](EnvironmentServiceApi.md#deleteEnvironmentSubscription) | **DELETE** /environments/{uuid}/subscribe | 
[**getAllRequests**](EnvironmentServiceApi.md#getAllRequests) | **GET** /environments | Returns UUIDs of existing analyses.
[**getEnvironment**](EnvironmentServiceApi.md#getEnvironment) | **GET** /environments/{uuid} | 
[**getPublishedEnvironments**](EnvironmentServiceApi.md#getPublishedEnvironments) | **GET** /environments/published | 
[**getSubscribedEnvironments**](EnvironmentServiceApi.md#getSubscribedEnvironments) | **GET** /environments/subscriptions | 
[**publishEnvironment**](EnvironmentServiceApi.md#publishEnvironment) | **POST** /environments | 
[**subscribeEnvironment**](EnvironmentServiceApi.md#subscribeEnvironment) | **POST** /environments/{uuid}/subscribe | 
[**updateEnvironment**](EnvironmentServiceApi.md#updateEnvironment) | **PUT** /environments/{uuid} | 



## deleteEnvironment

> File deleteEnvironment(uuid)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let uuid = "uuid_example"; // String | 
apiInstance.deleteEnvironment(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteEnvironmentSubscription

> File deleteEnvironmentSubscription(uuid)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let uuid = "uuid_example"; // String | 
apiInstance.deleteEnvironmentSubscription(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllRequests

> File getAllRequests(opts)

Returns UUIDs of existing analyses.

Returns UUIDs of existing analyses.

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'created': "'true'", // String | - if Queryparam \"created=true\" only the UUIDs of own Requests are shown
  'limit': "'30'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  'name': "name_example", // String | 
  'offset': "'0'" // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
};
apiInstance.getAllRequests(opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 
 **created** | **String**| - if Queryparam \&quot;created&#x3D;true\&quot; only the UUIDs of own Requests are shown | [optional] [default to &#39;true&#39;]
 **limit** | **String**| Used for offset pagination. Limit/Offset Paging would look like GET /request?limit&#x3D;20&amp;offset&#x3D;100. This query would return the 20 rows starting with the 100th row | [optional] [default to &#39;30&#39;]
 **name** | **String**|  | [optional] 
 **offset** | **String**| Used for offset pagination. Limit/Offset Paging would look like GET /request?limit&#x3D;20&amp;offset&#x3D;100. This query would return the 20 rows starting with the 100th row | [optional] [default to &#39;0&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEnvironment

> File getEnvironment(uuid)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let uuid = "uuid_example"; // String | 
apiInstance.getEnvironment(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPublishedEnvironments

> File getPublishedEnvironments(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let opts = {
  'limit': "'30'", // String | 
  'name': "name_example", // String | 
  'offset': "'0'" // String | 
};
apiInstance.getPublishedEnvironments(opts, (error, data, response) => {
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
 **limit** | **String**|  | [optional] [default to &#39;30&#39;]
 **name** | **String**|  | [optional] 
 **offset** | **String**|  | [optional] [default to &#39;0&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSubscribedEnvironments

> File getSubscribedEnvironments(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let opts = {
  'limit': "'30'", // String | 
  'offset': "'0'" // String | 
};
apiInstance.getSubscribedEnvironments(opts, (error, data, response) => {
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
 **limit** | **String**|  | [optional] [default to &#39;30&#39;]
 **offset** | **String**|  | [optional] [default to &#39;0&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## publishEnvironment

> File publishEnvironment(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonEnvironmentPublishingRequest() // JsonEnvironmentPublishingRequest | 
};
apiInstance.publishEnvironment(opts, (error, data, response) => {
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
 **body** | [**JsonEnvironmentPublishingRequest**](JsonEnvironmentPublishingRequest.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## subscribeEnvironment

> File subscribeEnvironment(uuid)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let uuid = "uuid_example"; // String | 
apiInstance.subscribeEnvironment(uuid, (error, data, response) => {
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
 **uuid** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEnvironment

> File updateEnvironment(uuid, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnvironmentServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonEnvironment() // JsonEnvironment | 
};
apiInstance.updateEnvironment(uuid, opts, (error, data, response) => {
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
 **uuid** | **String**|  | 
 **body** | [**JsonEnvironment**](JsonEnvironment.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json

