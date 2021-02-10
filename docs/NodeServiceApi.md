# MadanaApiclient.NodeServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNode**](NodeServiceApi.md#createNode) | **POST** /nodes/v2 | 
[**getBootstrap**](NodeServiceApi.md#getBootstrap) | **GET** /nodes/bootstrap | 
[**getNodeLicenses**](NodeServiceApi.md#getNodeLicenses) | **GET** /nodes/licenses | 
[**getNodeV2**](NodeServiceApi.md#getNodeV2) | **GET** /nodes/v2/{ident} | 
[**getNodes2**](NodeServiceApi.md#getNodes2) | **GET** /nodes | 
[**getNodesV2**](NodeServiceApi.md#getNodesV2) | **GET** /nodes/v2 | Returns UUIDs of existing analyses.
[**killNode**](NodeServiceApi.md#killNode) | **POST** /nodes/v2/{ident}/kill | 
[**postNodeInfo**](NodeServiceApi.md#postNodeInfo) | **POST** /nodes | 
[**postNodeInfo_0**](NodeServiceApi.md#postNodeInfo_0) | **POST** /nodes/create | 



## createNode

> File createNode(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonNodeRunRequest() // JsonNodeRunRequest | 
};
apiInstance.createNode(opts, (error, data, response) => {
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


## getNodeLicenses

> File getNodeLicenses(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let opts = {
  'active': "'true'" // String | 
};
apiInstance.getNodeLicenses(opts, (error, data, response) => {
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
 **active** | **String**|  | [optional] [default to &#39;true&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getNodeV2

> File getNodeV2(ident)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let ident = "ident_example"; // String | 
apiInstance.getNodeV2(ident, (error, data, response) => {
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


## getNodesV2

> File getNodesV2(opts)

Returns UUIDs of existing analyses.

Returns UUIDs of existing analyses.

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'created': "'true'", // String | - if Queryparam \"created=true\" only the UUIDs of own Requests are shown
  'limit': "'30'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  'offset': "'0'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  'status': "status_example" // String | 
};
apiInstance.getNodesV2(opts, (error, data, response) => {
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
 **offset** | **String**| Used for offset pagination. Limit/Offset Paging would look like GET /request?limit&#x3D;20&amp;offset&#x3D;100. This query would return the 20 rows starting with the 100th row | [optional] [default to &#39;0&#39;]
 **status** | **String**|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## killNode

> File killNode(ident)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.NodeServiceApi();
let ident = "ident_example"; // String | 
apiInstance.killNode(ident, (error, data, response) => {
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

