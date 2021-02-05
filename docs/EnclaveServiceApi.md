# MadanaApiclient.EnclaveServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addHistory**](EnclaveServiceApi.md#addHistory) | **POST** /enclaves/{uuid}/history | 
[**approveEnclave**](EnclaveServiceApi.md#approveEnclave) | **POST** /enclaves/{uuid}/approval | 
[**assignEnclaveAgent**](EnclaveServiceApi.md#assignEnclaveAgent) | **POST** /enclaves/{uuid}/assign | 
[**attestateEnclave**](EnclaveServiceApi.md#attestateEnclave) | **POST** /enclaves/{uuid}/attestation | 
[**createEnclaveRunRequest**](EnclaveServiceApi.md#createEnclaveRunRequest) | **POST** /enclaves | 
[**getEnclave**](EnclaveServiceApi.md#getEnclave) | **GET** /enclaves/{uuid} | 
[**getEnclaveTypes**](EnclaveServiceApi.md#getEnclaveTypes) | **GET** /enclaves/types | 
[**getEnclaves**](EnclaveServiceApi.md#getEnclaves) | **GET** /enclaves | Returns UUIDs of existing analyses.
[**getStats**](EnclaveServiceApi.md#getStats) | **GET** /enclaves/stats | 
[**killEnclave**](EnclaveServiceApi.md#killEnclave) | **POST** /enclaves/{uuid}/kill | 



## addHistory

> File addHistory(uuid, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonSignedData() // JsonSignedData | 
};
apiInstance.addHistory(uuid, opts, (error, data, response) => {
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
 **body** | [**JsonSignedData**](JsonSignedData.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## approveEnclave

> File approveEnclave(uuid, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonEnclaveRunningAttestationApproval() // JsonEnclaveRunningAttestationApproval | 
};
apiInstance.approveEnclave(uuid, opts, (error, data, response) => {
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
 **body** | [**JsonEnclaveRunningAttestationApproval**](JsonEnclaveRunningAttestationApproval.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## assignEnclaveAgent

> File assignEnclaveAgent(uuid, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonNodeInfo() // JsonNodeInfo | 
};
apiInstance.assignEnclaveAgent(uuid, opts, (error, data, response) => {
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
 **body** | [**JsonNodeInfo**](JsonNodeInfo.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## attestateEnclave

> File attestateEnclave(uuid, opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'body': new MadanaApiclient.JsonEnclaveRunningAttestation() // JsonEnclaveRunningAttestation | 
};
apiInstance.attestateEnclave(uuid, opts, (error, data, response) => {
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
 **body** | [**JsonEnclaveRunningAttestation**](JsonEnclaveRunningAttestation.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## createEnclaveRunRequest

> File createEnclaveRunRequest(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonEnclaveRunRequest() // JsonEnclaveRunRequest | 
};
apiInstance.createEnclaveRunRequest(opts, (error, data, response) => {
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
 **body** | [**JsonEnclaveRunRequest**](JsonEnclaveRunRequest.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, application/xml


## getEnclave

> File getEnclave(uuid)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let uuid = "uuid_example"; // String | 
apiInstance.getEnclave(uuid, (error, data, response) => {
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


## getEnclaveTypes

> File getEnclaveTypes()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
apiInstance.getEnclaveTypes((error, data, response) => {
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


## getEnclaves

> File getEnclaves(opts)

Returns UUIDs of existing analyses.

Returns UUIDs of existing analyses.

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'created': "'true'", // String | - if Queryparam \"created=true\" only the UUIDs of own Requests are shown
  'limit': "'30'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  'offset': "'0'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  'status': "status_example" // String | 
};
apiInstance.getEnclaves(opts, (error, data, response) => {
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


## getStats

> File getStats(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let opts = {
  'dayssince': "'30'" // String | 
};
apiInstance.getStats(opts, (error, data, response) => {
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
 **dayssince** | **String**|  | [optional] [default to &#39;30&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## killEnclave

> File killEnclave(uuid)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.EnclaveServiceApi();
let uuid = "uuid_example"; // String | 
apiInstance.killEnclave(uuid, (error, data, response) => {
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

