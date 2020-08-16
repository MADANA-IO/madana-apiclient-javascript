# MadanaSampleclientJavascript.RequestServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addData**](RequestServiceApi.md#addData) | **POST** /requests/{uuid}/data | Is used to upload and park the data till the AnalysisRequest gets processed.
[**cancelProcessing**](RequestServiceApi.md#cancelProcessing) | **POST** /requests/{uuid}/cancel | Endpoint is called from the Analysis Processing entity to submit the result.
[**createNewRequest**](RequestServiceApi.md#createNewRequest) | **POST** /requests | Endpoint used to create a new Analysis Request.
[**getActions**](RequestServiceApi.md#getActions) | **GET** /requests/actions | 
[**getAgent**](RequestServiceApi.md#getAgent) | **GET** /requests/{uuid}/agent | Is called from the APE to request all parked datasets.
[**getAllRequests2**](RequestServiceApi.md#getAllRequests2) | **GET** /requests | Returns UUIDs of existing analyses.
[**getData**](RequestServiceApi.md#getData) | **GET** /requests/{uuid}/data | Is called from the APE to request all parked datasets.
[**getRequest**](RequestServiceApi.md#getRequest) | **GET** /requests/{uuid} | Returns the details for certain Request.
[**getResult**](RequestServiceApi.md#getResult) | **GET** /requests/{uuid}/result | Can be called from creator to request the AnalysisResult.
[**getStatus**](RequestServiceApi.md#getStatus) | **GET** /requests/stats | 
[**giveConsent**](RequestServiceApi.md#giveConsent) | **POST** /requests/{uuid}/consent | Used to give consent for request.
[**initRequestParameters**](RequestServiceApi.md#initRequestParameters) | **POST** /requests/{uuid} | Endpoint used initialized addition datacollection parameters for requester.
[**setAgent**](RequestServiceApi.md#setAgent) | **POST** /requests/{uuid}/agent | Is called from the APE to request all parked datasets.
[**setResult**](RequestServiceApi.md#setResult) | **POST** /requests/{uuid}/result | Endpoint is called from the Analysis Processing entity to submit the result.



## addData

> File addData(uuid, opts)

Is used to upload and park the data till the AnalysisRequest gets processed.

Is used to upload and park the data till the AnalysisRequest gets processed

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'body': new MadanaSampleclientJavascript.JsonSignedData() // JsonSignedData | 
};
apiInstance.addData(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 
 **body** | [**JsonSignedData**](JsonSignedData.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cancelProcessing

> File cancelProcessing(uuid, opts)

Endpoint is called from the Analysis Processing entity to submit the result.

Endpoint is called from the Analysis Processing entity to submit the result

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'body': new MadanaSampleclientJavascript.JsonSignedData() // JsonSignedData | 
};
apiInstance.cancelProcessing(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 
 **body** | [**JsonSignedData**](JsonSignedData.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## createNewRequest

> String createNewRequest(opts)

Endpoint used to create a new Analysis Request.

Endpoint used to create a new Analysis Request

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'body': new MadanaSampleclientJavascript.JsonSignedData() // JsonSignedData | 
};
apiInstance.createNewRequest(opts, (error, data, response) => {
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
 **body** | [**JsonSignedData**](JsonSignedData.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json


## getActions

> File getActions(opts)



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let opts = {
  'limit': "'30'", // String | 
  'offset': "'0'" // String | 
};
apiInstance.getActions(opts, (error, data, response) => {
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


## getAgent

> File getAgent(uuid, opts)

Is called from the APE to request all parked datasets.

Is called from the APE to request all parked datasets. Returns the transmitted data for certain Request. When requesting the data, the status of the request is automatically set to processing.

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.getAgent(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllRequests2

> File getAllRequests2(opts)

Returns UUIDs of existing analyses.

Returns UUIDs of existing analyses.

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'created': "'false'", // String | - if Queryparam \"created=true\" only the UUIDs of own Requests are shown
  'history': "'false'", // String | - if queryparam \"history\" is set to true, endpoint returns all user actions. False per default.
  'limit': "'30'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  '_new': "'true'", // String | -  if Queryparam \"new=true\" only the UUIDs of new Requests ( Requests the user has not participated in and still allow participation) are shown
  'offset': "'0'", // String | Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row
  'preview': "'false'", // String | 
  'ready': "'false'" // String | 
};
apiInstance.getAllRequests2(opts, (error, data, response) => {
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
 **created** | **String**| - if Queryparam \&quot;created&#x3D;true\&quot; only the UUIDs of own Requests are shown | [optional] [default to &#39;false&#39;]
 **history** | **String**| - if queryparam \&quot;history\&quot; is set to true, endpoint returns all user actions. False per default. | [optional] [default to &#39;false&#39;]
 **limit** | **String**| Used for offset pagination. Limit/Offset Paging would look like GET /request?limit&#x3D;20&amp;offset&#x3D;100. This query would return the 20 rows starting with the 100th row | [optional] [default to &#39;30&#39;]
 **_new** | **String**| -  if Queryparam \&quot;new&#x3D;true\&quot; only the UUIDs of new Requests ( Requests the user has not participated in and still allow participation) are shown | [optional] [default to &#39;true&#39;]
 **offset** | **String**| Used for offset pagination. Limit/Offset Paging would look like GET /request?limit&#x3D;20&amp;offset&#x3D;100. This query would return the 20 rows starting with the 100th row | [optional] [default to &#39;0&#39;]
 **preview** | **String**|  | [optional] [default to &#39;false&#39;]
 **ready** | **String**|  | [optional] [default to &#39;false&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getData

> JsonSignedData getData(uuid, opts)

Is called from the APE to request all parked datasets.

Is called from the APE to request all parked datasets. Returns the transmitted data for certain Request. When requesting the data, the status of the request is automatically set to processing.

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.getData(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

[**JsonSignedData**](JsonSignedData.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRequest

> File getRequest(uuid, opts)

Returns the details for certain Request.

Returns the details for certain Request. When requesting an analysis a view of the analysis is stored in the database

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.getRequest(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getResult

> File getResult(uuid, opts)

Can be called from creator to request the AnalysisResult.

Can be called from creator to request the AnalysisResult.

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.getResult(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getStatus

> File getStatus()



### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
apiInstance.getStatus((error, data, response) => {
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


## giveConsent

> File giveConsent(uuid, opts)

Used to give consent for request.

Used to give consent for request. If the Endpoint is called from the creator of the Analysis, the status of the request is set to completed. If called by another is interpreted as giving consent to participate.

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.giveConsent(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## initRequestParameters

> String initRequestParameters(uuid, opts)

Endpoint used initialized addition datacollection parameters for requester.

Endpoint used initialized addition datacollection parameters for requester

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'body': "body_example" // String | 
};
apiInstance.initRequestParameters(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 
 **body** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setAgent

> File setAgent(uuid, opts)

Is called from the APE to request all parked datasets.

Is called from the APE to request all parked datasets. Returns the transmitted data for certain Request. When requesting the data, the status of the request is automatically set to processing.

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example" // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
};
apiInstance.setAgent(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setResult

> File setResult(uuid, opts)

Endpoint is called from the Analysis Processing entity to submit the result.

Endpoint is called from the Analysis Processing entity to submit the result

### Example

```javascript
import MadanaSampleclientJavascript from 'madana-sampleclient-javascript';

let apiInstance = new MadanaSampleclientJavascript.RequestServiceApi();
let uuid = "uuid_example"; // String | 
let opts = {
  'authorization': "authorization_example", // String | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
  'body': new MadanaSampleclientJavascript.JsonSignedData() // JsonSignedData | 
};
apiInstance.setResult(uuid, opts, (error, data, response) => {
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
 **authorization** | **String**| Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c | [optional] 
 **body** | [**JsonSignedData**](JsonSignedData.md)|  | [optional] 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/json

