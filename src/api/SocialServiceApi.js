/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.15-master.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* SocialService service.
* @module api/SocialServiceApi
* @version 0.4.15-master.10
*/
export default class SocialServiceApi {

    /**
    * Constructs a new SocialServiceApi. 
    * @alias module:api/SocialServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getMyProfile operation.
     * @callback module:api/SocialServiceApi~getMyProfileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SocialServiceApi~getMyProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getMyProfile(callback) {
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
        '/social/profiles/me', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPlatforms2 operation.
     * @callback module:api/SocialServiceApi~getPlatforms2Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns all Platforms / Systems that can be Connected to the MADANA Service.
     * Returns all Platforms / Systems that can be Connected to the MADANA Service
     * @param {module:api/SocialServiceApi~getPlatforms2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getPlatforms2(callback) {
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
        '/social', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getRanking operation.
     * @callback module:api/SocialServiceApi~getRankingCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns the Ranking by PTS within the System.
     * Returns the Ranking by PTS within the System
     * @param {Object} opts Optional parameters
     * @param {String} opts.limit  (default to '99')
     * @param {String} opts.offset  (default to '0')
     * @param {module:api/SocialServiceApi~getRankingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getRanking(opts, callback) {
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
        '/social/ranking', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getSocialPlatformFeed operation.
     * @callback module:api/SocialServiceApi~getSocialPlatformFeedCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} platform 
     * @param {module:api/SocialServiceApi~getSocialPlatformFeedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getSocialPlatformFeed(platform, callback) {
      let postBody = null;
      // verify the required parameter 'platform' is set
      if (platform === undefined || platform === null) {
        throw new Error("Missing the required parameter 'platform' when calling getSocialPlatformFeed");
      }

      let pathParams = {
        'platform': platform
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
        '/social/feed/{platform}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProfile operation.
     * @callback module:api/SocialServiceApi~getUserProfileCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {Object} opts Optional parameters
     * @param {String} opts.simple  (default to 'false')
     * @param {module:api/SocialServiceApi~getUserProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getUserProfile(username, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserProfile");
      }

      let pathParams = {
        'username': username
      };
      let queryParams = {
        'simple': opts['simple']
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
        '/social/profiles/{username}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProfile_0 operation.
     * @callback module:api/SocialServiceApi~getUserProfile_0Callback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} username 
     * @param {module:api/SocialServiceApi~getUserProfile_0Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */
    getUserProfile_0(username, callback) {
      let postBody = null;
      // verify the required parameter 'username' is set
      if (username === undefined || username === null) {
        throw new Error("Missing the required parameter 'username' when calling getUserProfile_0");
      }

      let pathParams = {
        'username': username
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
        '/social/profiles/{username}/simple', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
