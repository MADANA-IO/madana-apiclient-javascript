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

import ApiClient from '../ApiClient';

/**
 * The JsonEnvironmentPublishingRequest model module.
 * @module model/JsonEnvironmentPublishingRequest
 * @version 0.4.15-master.10
 */
class JsonEnvironmentPublishingRequest {
    /**
     * Constructs a new <code>JsonEnvironmentPublishingRequest</code>.
     * 
     * @alias module:model/JsonEnvironmentPublishingRequest
     */
    constructor() { 
        
        JsonEnvironmentPublishingRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonEnvironmentPublishingRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonEnvironmentPublishingRequest} obj Optional instance to populate.
     * @return {module:model/JsonEnvironmentPublishingRequest} The populated <code>JsonEnvironmentPublishingRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonEnvironmentPublishingRequest();

            if (data.hasOwnProperty('isPublic')) {
                obj['isPublic'] = ApiClient.convertToType(data['isPublic'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('ipfsPrimaryPeer')) {
                obj['ipfsPrimaryPeer'] = ApiClient.convertToType(data['ipfsPrimaryPeer'], 'String');
            }
            if (data.hasOwnProperty('packages')) {
                obj['packages'] = ApiClient.convertToType(data['packages'], 'String');
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} isPublic
 */
JsonEnvironmentPublishingRequest.prototype['isPublic'] = undefined;

/**
 * 
 * @member {String} name
 */
JsonEnvironmentPublishingRequest.prototype['name'] = undefined;

/**
 * 
 * @member {String} uuid
 */
JsonEnvironmentPublishingRequest.prototype['uuid'] = undefined;

/**
 * 
 * @member {String} content
 */
JsonEnvironmentPublishingRequest.prototype['content'] = undefined;

/**
 * 
 * @member {String} size
 */
JsonEnvironmentPublishingRequest.prototype['size'] = undefined;

/**
 * 
 * @member {String} ipfsPrimaryPeer
 */
JsonEnvironmentPublishingRequest.prototype['ipfsPrimaryPeer'] = undefined;

/**
 * 
 * @member {String} packages
 */
JsonEnvironmentPublishingRequest.prototype['packages'] = undefined;

/**
 * 
 * @member {String} ipfsHash
 */
JsonEnvironmentPublishingRequest.prototype['ipfsHash'] = undefined;

/**
 * 
 * @member {String} description
 */
JsonEnvironmentPublishingRequest.prototype['description'] = undefined;






export default JsonEnvironmentPublishingRequest;

