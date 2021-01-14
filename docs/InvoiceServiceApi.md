# MadanaApiclient.InvoiceServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActiveSaaSSubscriptions**](InvoiceServiceApi.md#getActiveSaaSSubscriptions) | **GET** /invoices | 



## getActiveSaaSSubscriptions

> File getActiveSaaSSubscriptions(opts)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.InvoiceServiceApi();
let opts = {
  'dayssince': "'366'" // String | 
};
apiInstance.getActiveSaaSSubscriptions(opts, (error, data, response) => {
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
 **dayssince** | **String**|  | [optional] [default to &#39;366&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

