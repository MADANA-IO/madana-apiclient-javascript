# MadanaSampleclientJavascript.NodeServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodes2**](NodeServiceApi.md#getNodes2) | **GET** /nodes | 
[**postNodeInfo**](NodeServiceApi.md#postNodeInfo) | **POST** /nodes | 



## getNodes2

> File getNodes2()



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.NodeServiceApi();
apiInstance.getNodes2((error, data, response) => {
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


## postNodeInfo

> File postNodeInfo(opts)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.NodeServiceApi();
let opts = {
  'body': new MadanaSampleclientJavascript.JsonNodeInfo() // JsonNodeInfo | 
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

