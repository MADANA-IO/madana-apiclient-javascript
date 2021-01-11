/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.23
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import JsonSignedDataUtils from '../model/JsonSignedDataUtils';

/**
* RequestService service.
* @module api/RequestServiceApi
* @version 0.5.0-master.23
*/
export default class RequestServiceApi {

    /**
    * Constructs a new RequestServiceApi. 
    * @alias module:api/RequestServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the addData operation.
     * @callback module:api/RequestServiceApi~addDataCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Is used to upload and park the data till the AnalysisRequest gets processed.
     * Is used to upload and park the data till the AnalysisRequest gets processed
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:model/JsonSignedDataUtils} opts.body 
     * @param {module:api/RequestServiceApi~addDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    addData(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling addData");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the cancelProcessing operation.
     * @callback module:api/RequestServiceApi~cancelProcessingCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Endpoint is called from the Analysis Processing entity to submit the result.
     * Endpoint is called from the Analysis Processing entity to submit the result
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:model/JsonSignedDataUtils} opts.body 
     * @param {module:api/RequestServiceApi~cancelProcessingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    cancelProcessing(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling cancelProcessing");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createNewRequest operation.
     * @callback module:api/RequestServiceApi~createNewRequestCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Endpoint used to create a new Analysis Request.
     * Endpoint used to create a new Analysis Request
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:model/JsonSignedDataUtils} opts.body 
     * @param {module:api/RequestServiceApi~createNewRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    createNewRequest(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/requests', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getActions operation.
     * @callback module:api/RequestServiceApi~getActionsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.limit  (default to '30')
     * @param {String} opts.offset  (default to '0')
     * @param {module:api/RequestServiceApi~getActionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getActions(opts, callback) {
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
        '/requests/actions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgent operation.
     * @callback module:api/RequestServiceApi~getAgentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Is called from the APE to request all parked datasets.
     * Is called from the APE to request all parked datasets. Returns the transmitted data for certain Request. When requesting the data, the status of the request is automatically set to processing.
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/RequestServiceApi~getAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getAgent(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getAgent");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/agent', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllRequests operation.
     * @callback module:api/RequestServiceApi~getAllRequestsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns UUIDs of existing analyses.
     * Returns UUIDs of existing analyses.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {String} opts.created - if Queryparam \"created=true\" only the UUIDs of own Requests are shown (default to 'false')
     * @param {String} opts.history - if queryparam \"history\" is set to true, endpoint returns all user actions. False per default. (default to 'false')
     * @param {String} opts.limit Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '30')
     * @param {String} opts._new -  if Queryparam \"new=true\" only the UUIDs of new Requests ( Requests the user has not participated in and still allow participation) are shown (default to 'true')
     * @param {String} opts.offset Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '0')
     * @param {String} opts.preview  (default to 'false')
     * @param {String} opts.ready  (default to 'false')
     * @param {module:api/RequestServiceApi~getAllRequestsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getAllRequests(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'created': opts['created'],
        'history': opts['history'],
        'limit': opts['limit'],
        'new': opts['_new'],
        'offset': opts['offset'],
        'preview': opts['preview'],
        'ready': opts['ready']
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
        '/requests', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getData operation.
     * @callback module:api/RequestServiceApi~getDataCallback
     * @param {String} error Error message, if any.
     * @param {module:model/JsonSignedDataUtils} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Is called from the APE to request all parked datasets.
     * Is called from the APE to request all parked datasets. Returns the transmitted data for certain Request. When requesting the data, the status of the request is automatically set to processing.
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/RequestServiceApi~getDataCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/JsonSignedDataUtils}
     */
    getData(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getData");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = JsonSignedDataUtils;
      return this.apiClient.callApi(
        '/requests/{uuid}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRequest operation.
     * @callback module:api/RequestServiceApi~getRequestCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the details for certain Request.
     * Returns the details for certain Request. When requesting an analysis a view of the analysis is stored in the database
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/RequestServiceApi~getRequestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getRequest(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getRequest");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getResult operation.
     * @callback module:api/RequestServiceApi~getResultCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Can be called from creator to request the AnalysisResult.
     * Can be called from creator to request the AnalysisResult.
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/RequestServiceApi~getResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getResult(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getResult");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/result', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStatus operation.
     * @callback module:api/RequestServiceApi~getStatusCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/RequestServiceApi~getStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getStatus(callback) {
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
        '/requests/stats', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the giveConsent operation.
     * @callback module:api/RequestServiceApi~giveConsentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Used to give consent for request.
     * Used to give consent for request. If the Endpoint is called from the creator of the Analysis, the status of the request is set to completed. If called by another is interpreted as giving consent to participate.
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/RequestServiceApi~giveConsentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    giveConsent(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling giveConsent");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/consent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the initRequestParameters operation.
     * @callback module:api/RequestServiceApi~initRequestParametersCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Endpoint used initialized addition datacollection parameters for requester.
     * Endpoint used initialized addition datacollection parameters for requester
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {String} opts.body 
     * @param {module:api/RequestServiceApi~initRequestParametersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    initRequestParameters(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling initRequestParameters");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/requests/{uuid}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setAgent operation.
     * @callback module:api/RequestServiceApi~setAgentCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Is called from the APE to request all parked datasets.
     * Is called from the APE to request all parked datasets. Returns the transmitted data for certain Request. When requesting the data, the status of the request is automatically set to processing.
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:api/RequestServiceApi~setAgentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setAgent(uuid, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling setAgent");
      }

      let pathParams = {
        'uuid': uuid
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
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/agent', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the setResult operation.
     * @callback module:api/RequestServiceApi~setResultCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Endpoint is called from the Analysis Processing entity to submit the result.
     * Endpoint is called from the Analysis Processing entity to submit the result
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
     * @param {module:model/JsonSignedDataUtils} opts.body 
     * @param {module:api/RequestServiceApi~setResultCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    setResult(uuid, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling setResult");
      }

      let pathParams = {
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
        'Authorization': opts['authorization']
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/json'];
      let returnType = File;
      return this.apiClient.callApi(
        '/requests/{uuid}/result', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
