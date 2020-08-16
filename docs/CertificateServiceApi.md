# MadanaApiclient.CertificateServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateCertificate**](CertificateServiceApi.md#authenticateCertificate) | **POST** /certificates | Issues certificates for logged-in users.
[**getCertificate**](CertificateServiceApi.md#getCertificate) | **GET** /certificates/root | 
[**getCertificate_0**](CertificateServiceApi.md#getCertificate_0) | **GET** /certificates/{fingerprint} | 



## authenticateCertificate

> JsonMDNCertificate authenticateCertificate(opts)

Issues certificates for logged-in users.

Issues certificates for logged-in users

### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.CertificateServiceApi();
let opts = {
  'body': new MadanaApiclient.JsonMDNData() // JsonMDNData | 
};
apiInstance.authenticateCertificate(opts, (error, data, response) => {
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
 **body** | [**JsonMDNData**](JsonMDNData.md)|  | [optional] 

### Return type

[**JsonMDNCertificate**](JsonMDNCertificate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCertificate

> File getCertificate()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.CertificateServiceApi();
apiInstance.getCertificate((error, data, response) => {
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


## getCertificate_0

> File getCertificate_0(fingerprint)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.CertificateServiceApi();
let fingerprint = "fingerprint_example"; // String | 
apiInstance.getCertificate_0(fingerprint, (error, data, response) => {
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
 **fingerprint** | **String**|  | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

