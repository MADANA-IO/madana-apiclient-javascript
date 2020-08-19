# MadanaApiclient.CertificateServiceApi

All URIs are relative to *http://api.madana.io/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateCertificate**](CertificateServiceApi.md#authenticateCertificate) | **POST** /certificates | Issues certificates for logged-in users.
[**getCertificateByFingerprint**](CertificateServiceApi.md#getCertificateByFingerprint) | **GET** /certificates/{fingerprint} | 
[**getRootCertificate**](CertificateServiceApi.md#getRootCertificate) | **GET** /certificates/root | 



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


## getCertificateByFingerprint

> File getCertificateByFingerprint(fingerprint)



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.CertificateServiceApi();
let fingerprint = "fingerprint_example"; // String | 
apiInstance.getCertificateByFingerprint(fingerprint, (error, data, response) => {
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


## getRootCertificate

> File getRootCertificate()



### Example

```javascript
import MadanaApiclient from 'madana-apiclient';

let apiInstance = new MadanaApiclient.CertificateServiceApi();
apiInstance.getRootCertificate((error, data, response) => {
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

