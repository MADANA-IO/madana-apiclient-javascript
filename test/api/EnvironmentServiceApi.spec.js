/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.23
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
    instance = new MadanaApiclient.EnvironmentServiceApi();
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

  describe('EnvironmentServiceApi', function() {
    describe('deleteEnvironment', function() {
      it('should call deleteEnvironment successfully', function(done) {
        //uncomment below and update the code to test deleteEnvironment
        //instance.deleteEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteEnvironmentSubscription', function() {
      it('should call deleteEnvironmentSubscription successfully', function(done) {
        //uncomment below and update the code to test deleteEnvironmentSubscription
        //instance.deleteEnvironmentSubscription(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironment', function() {
      it('should call getEnvironment successfully', function(done) {
        //uncomment below and update the code to test getEnvironment
        //instance.getEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getEnvironments', function() {
      it('should call getEnvironments successfully', function(done) {
        //uncomment below and update the code to test getEnvironments
        //instance.getEnvironments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPublishedEnvironments', function() {
      it('should call getPublishedEnvironments successfully', function(done) {
        //uncomment below and update the code to test getPublishedEnvironments
        //instance.getPublishedEnvironments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSubscribedEnvironments', function() {
      it('should call getSubscribedEnvironments successfully', function(done) {
        //uncomment below and update the code to test getSubscribedEnvironments
        //instance.getSubscribedEnvironments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('publishEnvironment', function() {
      it('should call publishEnvironment successfully', function(done) {
        //uncomment below and update the code to test publishEnvironment
        //instance.publishEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('subscribeEnvironment', function() {
      it('should call subscribeEnvironment successfully', function(done) {
        //uncomment below and update the code to test subscribeEnvironment
        //instance.subscribeEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateEnvironment', function() {
      it('should call updateEnvironment successfully', function(done) {
        //uncomment below and update the code to test updateEnvironment
        //instance.updateEnvironment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));