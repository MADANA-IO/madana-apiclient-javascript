# MadanaApiclient.NodeServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getBootstrap**](NodeServiceApi.md#getBootstrap) | **GET** /nodes/bootstrap | 
[**getNodes2**](NodeServiceApi.md#getNodes2) | **GET** /nodes | 
[**postNodeInfo**](NodeServiceApi.md#postNodeInfo) | **POST** /nodes | 
[**postNodeInfo_0**](NodeServiceApi.md#postNodeInfo_0) | **POST** /nodes/create | 



## getBootstrap

> File getBootstrap()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
apiInstance.getBootstrap((error, data, response) => {
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


## getNodes2

> File getNodes2(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let opts = {
  'owner': "owner_example" // String | 
};
apiInstance.getNodes2(opts, (error, data, response) => {
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
 **owner** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postNodeInfo

> File postNodeInfo(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonNodeInfo() // JsonNodeInfo | 
};
apiInstance.postNodeInfo(opts, (error, data, response) => {
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
 **body** | [**JsonNodeInfo**](JsonNodeInfo.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## postNodeInfo_0

> File postNodeInfo_0(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonNodeRunRequest() // JsonNodeRunRequest | 
};
apiInstance.postNodeInfo_0(opts, (error, data, response) => {
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
 **body** | [**JsonNodeRunRequest**](JsonNodeRunRequest.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml

