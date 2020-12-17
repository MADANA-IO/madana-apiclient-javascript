/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.10
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
    instance = new MadanaApiclient.AuthenticationServiceApi();
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

  describe('AuthenticationServiceApi', function() {
    describe('authenticateApplication', function() {
      it('should call authenticateApplication successfully', function(done) {
        //uncomment below and update the code to test authenticateApplication
        //instance.authenticateApplication(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authenticateEthereumWallet', function() {
      it('should call authenticateEthereumWallet successfully', function(done) {
        //uncomment below and update the code to test authenticateEthereumWallet
        //instance.authenticateEthereumWallet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authenticateUser', function() {
      it('should call authenticateUser successfully', function(done) {
        //uncomment below and update the code to test authenticateUser
        //instance.authenticateUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('authenticateWithEthereumChallenge', function() {
      it('should call authenticateWithEthereumChallenge successfully', function(done) {
        //uncomment below and update the code to test authenticateWithEthereumChallenge
        //instance.authenticateWithEthereumChallenge(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFractalAuthenticationURL', function() {
      it('should call getFractalAuthenticationURL successfully', function(done) {
        //uncomment below and update the code to test getFractalAuthenticationURL
        //instance.getFractalAuthenticationURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNonceForEthereumWallet', function() {
      it('should call getNonceForEthereumWallet successfully', function(done) {
        //uncomment below and update the code to test getNonceForEthereumWallet
        //instance.getNonceForEthereumWallet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getObject', function() {
      it('should call getObject successfully', function(done) {
        //uncomment below and update the code to test getObject
        //instance.getObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTwitterAuthenticationURL', function() {
      it('should call getTwitterAuthenticationURL successfully', function(done) {
        //uncomment below and update the code to test getTwitterAuthenticationURL
        //instance.getTwitterAuthenticationURL(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFacebookUID', function() {
      it('should call setFacebookUID successfully', function(done) {
        //uncomment below and update the code to test setFacebookUID
        //instance.setFacebookUID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setFractalUID', function() {
      it('should call setFractalUID successfully', function(done) {
        //uncomment below and update the code to test setFractalUID
        //instance.setFractalUID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setTwitterUID', function() {
      it('should call setTwitterUID successfully', function(done) {
        //uncomment below and update the code to test setTwitterUID
        //instance.setTwitterUID(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
