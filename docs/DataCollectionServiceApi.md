# MadanaSampleclientJavascript.DataCollectionServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMethodsForType**](DataCollectionServiceApi.md#getMethodsForType) | **GET** /datacollection/types/{name}/methods | 
[**getNodes**](DataCollectionServiceApi.md#getNodes) | **GET** /datacollection/methods | 
[**getTypes**](DataCollectionServiceApi.md#getTypes) | **GET** /datacollection/types | 



## getMethodsForType

> File getMethodsForType(name)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.DataCollectionServiceApi();
let name = "name_example"; // String | 
apiInstance.getMethodsForType(name, (error, data, response) => {
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
 **name** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodes

> File getNodes()



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.DataCollectionServiceApi();
apiInstance.getNodes((error, data, response) => {
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


## getTypes

> File getTypes()



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.DataCollectionServiceApi();
apiInstance.getTypes((error, data, response) => {
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

