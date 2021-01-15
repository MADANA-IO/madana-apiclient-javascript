/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.33
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import JsonMDNCertificate from '../model/JsonMDNCertificate';
import JsonMDNOAuthToken from '../model/JsonMDNOAuthToken';
import JsonMDNToken from '../model/JsonMDNToken';
import JsonMDNUserCredentials from '../model/JsonMDNUserCredentials';

/**
* AuthenticationService service.
* @module api/AuthenticationServiceApi
* @version 0.5.0-master.33
*/
export default class AuthenticationServiceApi {

    /**
    * Constructs a new AuthenticationServiceApi. 
    * @alias module:api/AuthenticationServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the authenticateApplication operation.
     * @callback module:api/AuthenticationServiceApi~authenticateApplicationCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonMDNToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticates a new application and returns the token.
     * Authenticates a new application and returns the token
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNCertificate} opts.body the credentials used to validate the user
     * @param {module:api/AuthenticationServiceApi~authenticateApplicationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonMDNToken}
     */
    authenticateApplication(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = JsonMDNToken;
      return this.apiClient.callApi(
        '/authentication/application', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authenticateEthereumWallet operation.
     * @callback module:api/AuthenticationServiceApi~authenticateEthereumWalletCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} wallet the wallet which should be authenticated
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNOAuthToken} opts.body Token containing nonce and signate
     * @param {module:api/AuthenticationServiceApi~authenticateEthereumWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    authenticateEthereumWallet(wallet, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'wallet' is set
      if (wallet === undefined || wallet === null) {
        throw new Error("Missing the required parameter 'wallet' when calling authenticateEthereumWallet");
      }

      let pathParams = {
        'wallet': wallet
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/ethereum/{wallet}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authenticateUser operation.
     * @callback module:api/AuthenticationServiceApi~authenticateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonMDNToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticates a new user and returns the token (  forbidden if the credentials cannot be validated ).
     * Authenticates a new user and returns the token (  forbidden if the credentials cannot be validated )
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNUserCredentials} opts.body the credentials used to validate the user
     * @param {module:api/AuthenticationServiceApi~authenticateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonMDNToken}
     */
    authenticateUser(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = JsonMDNToken;
      return this.apiClient.callApi(
        '/authentication', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the authenticateWithEthereumChallenge operation.
     * @callback module:api/AuthenticationServiceApi~authenticateWithEthereumChallengeCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} wallet the wallet which should be authenticated
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNOAuthToken} opts.body Token containing nonce and signate
     * @param {module:api/AuthenticationServiceApi~authenticateWithEthereumChallengeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    authenticateWithEthereumChallenge(wallet, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'wallet' is set
      if (wallet === undefined || wallet === null) {
        throw new Error("Missing the required parameter 'wallet' when calling authenticateWithEthereumChallenge");
      }

      let pathParams = {
        'wallet': wallet
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/ethereum/{wallet}/challenge', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getFractalAuthenticationURL operation.
     * @callback module:api/AuthenticationServiceApi~getFractalAuthenticationURLCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the AUthorization URL to verify a Twitter Accounts.
     * Returns the AUthorization URL to verify a Twitter Accounts
     * @param {module:api/AuthenticationServiceApi~getFractalAuthenticationURLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getFractalAuthenticationURL(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/fractal', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNonceForEthereumWallet operation.
     * @callback module:api/AuthenticationServiceApi~getNonceForEthereumWalletCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonMDNToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a nonce for the client which is used as content for the to be created signature.
     * Returns a nonce for the client which is used as content for the to be created signature
     * @param {String} wallet - wallet address as String * @HTTP 417 If the address is not valid
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/AuthenticationServiceApi~getNonceForEthereumWalletCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonMDNToken}
     */
    getNonceForEthereumWallet(wallet, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'wallet' is set
      if (wallet === undefined || wallet === null) {
        throw new Error("Missing the required parameter 'wallet' when calling getNonceForEthereumWallet");
      }

      let pathParams = {
        'wallet': wallet
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = JsonMDNToken;
      return this.apiClient.callApi(
        '/authentication/ethereum/{wallet}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getObject operation.
     * @callback module:api/AuthenticationServiceApi~getObjectCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to validate the active connection with the API.
     * Used to validate the active connection with the API
     * @param {module:api/AuthenticationServiceApi~getObjectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    getObject(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': Object};
      return this.apiClient.callApi(
        '/authentication', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getTwitterAuthenticationURL operation.
     * @callback module:api/AuthenticationServiceApi~getTwitterAuthenticationURLCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the AUthorization URL to verify a Twitter Accounts.
     * Returns the AUthorization URL to verify a Twitter Accounts
     * @param {module:api/AuthenticationServiceApi~getTwitterAuthenticationURLCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getTwitterAuthenticationURL(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/twitter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setFacebookUID operation.
     * @callback module:api/AuthenticationServiceApi~setFacebookUIDCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used as Callback URL when users have successfully authorized their facbeook account.
     * Used as Callback URL when users have successfully authorized their facbeook account
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/AuthenticationServiceApi~setFacebookUIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setFacebookUID(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/facebook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setFractalUID operation.
     * @callback module:api/AuthenticationServiceApi~setFractalUIDCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @param {module:api/AuthenticationServiceApi~setFractalUIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setFractalUID(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/fractal', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setTwitterUID operation.
     * @callback module:api/AuthenticationServiceApi~setTwitterUIDCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNOAuthToken} opts.body 
     * @param {module:api/AuthenticationServiceApi~setTwitterUIDCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setTwitterUID(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/authentication/twitter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
