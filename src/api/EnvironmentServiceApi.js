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


import ApiClient from "../ApiClient";
import JsonEnvironment from '../model/JsonEnvironment';
import JsonEnvironmentPublishingRequest from '../model/JsonEnvironmentPublishingRequest';

/**
* EnvironmentService service.
* @module api/EnvironmentServiceApi
* @version 0.4.14-master.23
*/
export default class EnvironmentServiceApi {

    /**
    * Constructs a new EnvironmentServiceApi. 
    * @alias module:api/EnvironmentServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteEnvironment operation.
     * @callback module:api/EnvironmentServiceApi~deleteEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {module:api/EnvironmentServiceApi~deleteEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    deleteEnvironment(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteEnvironment");
      }

      let pathParams = {
        'uuid': uuid
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
        '/environments/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEnvironmentSubscription operation.
     * @callback module:api/EnvironmentServiceApi~deleteEnvironmentSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {module:api/EnvironmentServiceApi~deleteEnvironmentSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    deleteEnvironmentSubscription(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteEnvironmentSubscription");
      }

      let pathParams = {
        'uuid': uuid
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
        '/environments/{uuid}/subscribe', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironment operation.
     * @callback module:api/EnvironmentServiceApi~getEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {module:api/EnvironmentServiceApi~getEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getEnvironment(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getEnvironment");
      }

      let pathParams = {
        'uuid': uuid
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
        '/environments/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getEnvironments operation.
     * @callback module:api/EnvironmentServiceApi~getEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns UUIDs of existing analyses.
     * Returns UUIDs of existing analyses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {String} opts.created - if Queryparam \"created=true\" only the UUIDs of own Requests are shown (default to 'true')
     * @param {String} opts.limit Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '30')
     * @param {String} opts.name 
     * @param {String} opts.offset Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '0')
     * @param {module:api/EnvironmentServiceApi~getEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getEnvironments(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'created': opts['created'],
        'limit': opts['limit'],
        'name': opts['name'],
        'offset': opts['offset']
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/environments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPublishedEnvironments operation.
     * @callback module:api/EnvironmentServiceApi~getPublishedEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.limit  (default to '30')
     * @param {String} opts.name 
     * @param {String} opts.offset  (default to '0')
     * @param {module:api/EnvironmentServiceApi~getPublishedEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getPublishedEnvironments(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'name': opts['name'],
        'offset': opts['offset']
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
        '/environments/published', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSubscribedEnvironments operation.
     * @callback module:api/EnvironmentServiceApi~getSubscribedEnvironmentsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.limit  (default to '30')
     * @param {String} opts.offset  (default to '0')
     * @param {module:api/EnvironmentServiceApi~getSubscribedEnvironmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getSubscribedEnvironments(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
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
        '/environments/subscriptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the publishEnvironment operation.
     * @callback module:api/EnvironmentServiceApi~publishEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonEnvironmentPublishingRequest} opts.body 
     * @param {module:api/EnvironmentServiceApi~publishEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    publishEnvironment(opts, callback) {
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
        '/environments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the subscribeEnvironment operation.
     * @callback module:api/EnvironmentServiceApi~subscribeEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {module:api/EnvironmentServiceApi~subscribeEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    subscribeEnvironment(uuid, callback) {
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling subscribeEnvironment");
      }

      let pathParams = {
        'uuid': uuid
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
        '/environments/{uuid}/subscribe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEnvironment operation.
     * @callback module:api/EnvironmentServiceApi~updateEnvironmentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonEnvironment} opts.body 
     * @param {module:api/EnvironmentServiceApi~updateEnvironmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    updateEnvironment(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling updateEnvironment");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/environments/{uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}