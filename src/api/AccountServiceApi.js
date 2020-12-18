/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import JsonMDNMailAddress from '../model/JsonMDNMailAddress';
import JsonMDNPasswordReset from '../model/JsonMDNPasswordReset';

/**
* AccountService service.
* @module api/AccountServiceApi
* @version 0.5.0-master.16
*/
export default class AccountServiceApi {

    /**
    * Constructs a new AccountServiceApi. 
    * @alias module:api/AccountServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the activateUser operation.
     * @callback module:api/AccountServiceApi~activateUserCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} token 
     * @param {module:api/AccountServiceApi~activateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    activateUser(token, callback) {
      let postBody = null;
      // verify the required parameter 'token' is set
      if (token === undefined || token === null) {
        throw new Error("Missing the required parameter 'token' when calling activateUser");
      }

      let pathParams = {
        'token': token
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json', 'application/xml'];
      let returnType = File;
      return this.apiClient.callApi(
        '/account/activation/{token}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPasswordReset operation.
     * @callback module:api/AccountServiceApi~createPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends an Password reset mail to the given MailAddress.
     * Sends an Password reset mail to the given MailAddress
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNMailAddress} opts.body - the MaiAddress under which the user has signed up
     * @param {module:api/AccountServiceApi~createPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    createPasswordReset(opts, callback) {
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
        '/account/password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the requestVerificationMail operation.
     * @callback module:api/AccountServiceApi~requestVerificationMailCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: Object}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to request a new  activation-mail for the user.
     * Used to request a new  activation-mail for the user
     * @param {module:api/AccountServiceApi~requestVerificationMailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: Object}>}
     */
    requestVerificationMail(callback) {
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
        '/account/verifymail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePassword operation.
     * @callback module:api/AccountServiceApi~updatePasswordCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Receives the Password reset and tries to set the provided password for the user.
     * Receives the Password reset and tries to set the provided password for the user. The Password will only be set if a valid token is provided
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonMDNPasswordReset} opts.body - the MDN_PasswordReset Object
     * @param {module:api/AccountServiceApi~updatePasswordCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    updatePassword(opts, callback) {
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
        '/account/password', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
