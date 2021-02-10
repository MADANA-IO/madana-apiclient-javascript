/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.55
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import JsonNodeInfo from '../model/JsonNodeInfo';
import JsonNodeRunRequest from '../model/JsonNodeRunRequest';

/**
* NodeService service.
* @module api/NodeServiceApi
* @version 0.5.0-master.55
*/
export default class NodeServiceApi {

    /**
    * Constructs a new NodeServiceApi. 
    * @alias module:api/NodeServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNode operation.
     * @callback module:api/NodeServiceApi~createNodeCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonNodeRunRequest} opts.body 
     * @param {module:api/NodeServiceApi~createNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    createNode(opts, callback) {
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
        '/nodes/v2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getBootstrap operation.
     * @callback module:api/NodeServiceApi~getBootstrapCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/NodeServiceApi~getBootstrapCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getBootstrap(callback) {
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
        '/nodes/bootstrap', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeLicenses operation.
     * @callback module:api/NodeServiceApi~getNodeLicensesCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.active  (default to 'true')
     * @param {module:api/NodeServiceApi~getNodeLicensesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getNodeLicenses(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'active': opts['active']
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
        '/nodes/licenses', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeV2 operation.
     * @callback module:api/NodeServiceApi~getNodeV2Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} ident 
     * @param {module:api/NodeServiceApi~getNodeV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getNodeV2(ident, callback) {
      let postBody = null;
      // verify the required parameter 'ident' is set
      if (ident === undefined || ident === null) {
        throw new Error("Missing the required parameter 'ident' when calling getNodeV2");
      }

      let pathParams = {
        'ident': ident
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
        '/nodes/v2/{ident}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodes2 operation.
     * @callback module:api/NodeServiceApi~getNodes2Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.owner 
     * @param {module:api/NodeServiceApi~getNodes2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getNodes2(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'owner': opts['owner']
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
        '/nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodesV2 operation.
     * @callback module:api/NodeServiceApi~getNodesV2Callback
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
     * @param {String} opts.offset Used for offset pagination. Limit/Offset Paging would look like GET /request?limit=20&offset=100. This query would return the 20 rows starting with the 100th row (default to '0')
     * @param {String} opts.status 
     * @param {module:api/NodeServiceApi~getNodesV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getNodesV2(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'created': opts['created'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'status': opts['status']
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
        '/nodes/v2', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the killNode operation.
     * @callback module:api/NodeServiceApi~killNodeCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} ident 
     * @param {module:api/NodeServiceApi~killNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    killNode(ident, callback) {
      let postBody = null;
      // verify the required parameter 'ident' is set
      if (ident === undefined || ident === null) {
        throw new Error("Missing the required parameter 'ident' when calling killNode");
      }

      let pathParams = {
        'ident': ident
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
        '/nodes/v2/{ident}/kill', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postNodeInfo operation.
     * @callback module:api/NodeServiceApi~postNodeInfoCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonNodeInfo} opts.body 
     * @param {module:api/NodeServiceApi~postNodeInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    postNodeInfo(opts, callback) {
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
        '/nodes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the postNodeInfo_0 operation.
     * @callback module:api/NodeServiceApi~postNodeInfo_0Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {module:model/JsonNodeRunRequest} opts.body 
     * @param {module:api/NodeServiceApi~postNodeInfo_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    postNodeInfo_0(opts, callback) {
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
        '/nodes/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
