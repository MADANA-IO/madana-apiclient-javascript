# sampleclient-javascript

 The JavaScript client-side library defines classes that can be (de)serialized to/from JSON. This is useful for accessing the resources that are published by this application, but only those that produce a JSON representation of their resources (content type "application/json").

The library uses ES6 class syntax which has limited support. See MDN and the ES6 Compatibility Table for more details.

The library contains a UMD loader which supports AMD, CommonJS and browser globals. The browser global variable name for this library is "javascriptClient". 

```
//read the resource in JSON:
var json = JSON.parse(jsonString);

//create an object
var object = new Object(json);

//retreive the json again
var newJson = object.toJSON();

//serialize the json
var newJsonString = JSON.stringify(newJson);
```
