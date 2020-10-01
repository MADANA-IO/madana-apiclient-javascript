/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.15-master.5
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
    instance = new MadanaApiclient.EnclaveServiceApi();
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

  describe('EnclaveServiceApi', function() {
    describe('addHistory', function() {
      it('should call addHistory successfully', function(done) {
        //uncomment below and update the code to test addHistory
        //instance.addHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('approveEnclave', function() {
      it('should call approveEnclave successfully', function(done) {
        //uncomment below and update the code to test approveEnclave
        //instance.approveEnclave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignEnclaveAgent', function() {
      it('should call assignEnclaveAgent successfully', function(done) {
        //uncomment below and update the code to test assignEnclaveAgent
        //instance.assignEnclaveAgent(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('attestateEnclave', function() {
      it('should call attestateEnclave successfully', function(done) {
        //uncomment below and update the code to test attestateEnclave
        //instance.attestateEnclave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createEnclaveRunRequest', function() {
      it('should call createEnclaveRunRequest successfully', function(done) {
        //uncomment below and update the code to test createEnclaveRunRequest
        //instance.createEnclaveRunRequest(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnclave', function() {
      it('should call getEnclave successfully', function(done) {
        //uncomment below and update the code to test getEnclave
        //instance.getEnclave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnclaveTypes', function() {
      it('should call getEnclaveTypes successfully', function(done) {
        //uncomment below and update the code to test getEnclaveTypes
        //instance.getEnclaveTypes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnclaves', function() {
      it('should call getEnclaves successfully', function(done) {
        //uncomment below and update the code to test getEnclaves
        //instance.getEnclaves(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('killEnclave', function() {
      it('should call killEnclave successfully', function(done) {
        //uncomment below and update the code to test killEnclave
        //instance.killEnclave(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
