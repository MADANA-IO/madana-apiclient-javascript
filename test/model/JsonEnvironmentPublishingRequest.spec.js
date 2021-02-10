/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.53
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MadanaApiclient);
  }
}(this, function(expect, MadanaApiclient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('JsonEnvironmentPublishingRequest', function() {
    it('should create an instance of JsonEnvironmentPublishingRequest', function() {
      // uncomment below and update the code to test JsonEnvironmentPublishingRequest
      //var instane = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be.a(MadanaApiclient.JsonEnvironmentPublishingRequest);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property packages (base name: "packages")', function() {
      // uncomment below and update the code to test the property packages
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property ipfsPrimaryPeer (base name: "ipfsPrimaryPeer")', function() {
      // uncomment below and update the code to test the property ipfsPrimaryPeer
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property isPublic (base name: "isPublic")', function() {
      // uncomment below and update the code to test the property isPublic
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property content (base name: "content")', function() {
      // uncomment below and update the code to test the property content
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property ipfsHash (base name: "ipfsHash")', function() {
      // uncomment below and update the code to test the property ipfsHash
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MadanaApiclient.JsonEnvironmentPublishingRequest();
      //expect(instance).to.be();
    });

  });

}));
