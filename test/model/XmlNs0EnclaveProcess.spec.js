/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.18
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
    instance = new MadanaApiclient.XmlNs0EnclaveProcess();
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

  describe('XmlNs0EnclaveProcess', function() {
    it('should create an instance of XmlNs0EnclaveProcess', function() {
      // uncomment below and update the code to test XmlNs0EnclaveProcess
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be.a(MadanaApiclient.XmlNs0EnclaveProcess);
    });

    it('should have the property attestationServer (base name: "attestationServer")', function() {
      // uncomment below and update the code to test the property attestationServer
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property consoleOutput (base name: "consoleOutput")', function() {
      // uncomment below and update the code to test the property consoleOutput
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property enclaveIdent (base name: "enclaveIdent")', function() {
      // uncomment below and update the code to test the property enclaveIdent
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property enclaveInputstream (base name: "enclaveInputstream")', function() {
      // uncomment below and update the code to test the property enclaveInputstream
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property endingTime (base name: "endingTime")', function() {
      // uncomment below and update the code to test the property endingTime
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property internalAttesationServer (base name: "internalAttesationServer")', function() {
      // uncomment below and update the code to test the property internalAttesationServer
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property internalIdent (base name: "internalIdent")', function() {
      // uncomment below and update the code to test the property internalIdent
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property internalRemoteControlServer (base name: "internalRemoteControlServer")', function() {
      // uncomment below and update the code to test the property internalRemoteControlServer
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property process (base name: "process")', function() {
      // uncomment below and update the code to test the property process
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property remoteControlServer (base name: "remoteControlServer")', function() {
      // uncomment below and update the code to test the property remoteControlServer
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property signerIdent (base name: "signerIdent")', function() {
      // uncomment below and update the code to test the property signerIdent
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property startupCMD (base name: "startupCMD")', function() {
      // uncomment below and update the code to test the property startupCMD
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property startupTime (base name: "startupTime")', function() {
      // uncomment below and update the code to test the property startupTime
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property wgInterface (base name: "wgInterface")', function() {
      // uncomment below and update the code to test the property wgInterface
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

    it('should have the property wireguardPublicKey (base name: "wireguardPublicKey")', function() {
      // uncomment below and update the code to test the property wireguardPublicKey
      //var instane = new MadanaApiclient.XmlNs0EnclaveProcess();
      //expect(instance).to.be();
    });

  });

}));
