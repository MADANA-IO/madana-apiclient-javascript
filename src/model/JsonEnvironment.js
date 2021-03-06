/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.56
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonRunConfig from './JsonRunConfig';

/**
 * The JsonEnvironment model module.
 * @module model/JsonEnvironment
 * @version 0.5.0-master.56
 */
class JsonEnvironment {
    /**
     * Constructs a new <code>JsonEnvironment</code>.
     * 
     * @alias module:model/JsonEnvironment
     */
    constructor() { 
        
        JsonEnvironment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonEnvironment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonEnvironment} obj Optional instance to populate.
     * @return {module:model/JsonEnvironment} The populated <code>JsonEnvironment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonEnvironment();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('defaultRunConfiguration')) {
                obj['defaultRunConfiguration'] = JsonRunConfig.constructFromObject(data['defaultRunConfiguration']);
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
            }
            if (data.hasOwnProperty('rootHashOffset')) {
                obj['rootHashOffset'] = ApiClient.convertToType(data['rootHashOffset'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], ['String']);
            }
            if (data.hasOwnProperty('packages')) {
                obj['packages'] = ApiClient.convertToType(data['packages'], ['String']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('published')) {
                obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('roothash')) {
                obj['roothash'] = ApiClient.convertToType(data['roothash'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} name
 */
JsonEnvironment.prototype['name'] = undefined;

/**
 * @member {module:model/JsonRunConfig} defaultRunConfiguration
 */
JsonEnvironment.prototype['defaultRunConfiguration'] = undefined;

/**
 * 
 * @member {String} ipfsHash
 */
JsonEnvironment.prototype['ipfsHash'] = undefined;

/**
 * 
 * @member {String} rootHashOffset
 */
JsonEnvironment.prototype['rootHashOffset'] = undefined;

/**
 * 
 * @member {Array.<String>} content
 */
JsonEnvironment.prototype['content'] = undefined;

/**
 * 
 * @member {Array.<String>} packages
 */
JsonEnvironment.prototype['packages'] = undefined;

/**
 * 
 * @member {String} description
 */
JsonEnvironment.prototype['description'] = undefined;

/**
 * 
 * @member {Boolean} published
 */
JsonEnvironment.prototype['published'] = undefined;

/**
 * 
 * @member {String} uuid
 */
JsonEnvironment.prototype['uuid'] = undefined;

/**
 * 
 * @member {String} roothash
 */
JsonEnvironment.prototype['roothash'] = undefined;

/**
 * 
 * @member {String} size
 */
JsonEnvironment.prototype['size'] = undefined;






export default JsonEnvironment;

