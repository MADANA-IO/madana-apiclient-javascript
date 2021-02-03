/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.47
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The JsonV1ManagedFieldsEntry model module.
 * @module model/JsonV1ManagedFieldsEntry
 * @version 0.5.0-master.47
 */
class JsonV1ManagedFieldsEntry {
    /**
     * Constructs a new <code>JsonV1ManagedFieldsEntry</code>.
     * 
     * @alias module:model/JsonV1ManagedFieldsEntry
     */
    constructor() { 
        
        JsonV1ManagedFieldsEntry.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonV1ManagedFieldsEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonV1ManagedFieldsEntry} obj Optional instance to populate.
     * @return {module:model/JsonV1ManagedFieldsEntry} The populated <code>JsonV1ManagedFieldsEntry</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonV1ManagedFieldsEntry();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
            if (data.hasOwnProperty('fieldsType')) {
                obj['fieldsType'] = ApiClient.convertToType(data['fieldsType'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('fieldsV1')) {
                obj['fieldsV1'] = ApiClient.convertToType(data['fieldsV1'], Object);
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ApiClient.convertToType(data['manager'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} apiVersion
 */
JsonV1ManagedFieldsEntry.prototype['apiVersion'] = undefined;

/**
 * 
 * @member {String} operation
 */
JsonV1ManagedFieldsEntry.prototype['operation'] = undefined;

/**
 * 
 * @member {String} fieldsType
 */
JsonV1ManagedFieldsEntry.prototype['fieldsType'] = undefined;

/**
 * 
 * @member {Number} time
 */
JsonV1ManagedFieldsEntry.prototype['time'] = undefined;

/**
 * 
 * @member {Object} fieldsV1
 */
JsonV1ManagedFieldsEntry.prototype['fieldsV1'] = undefined;

/**
 * 
 * @member {String} manager
 */
JsonV1ManagedFieldsEntry.prototype['manager'] = undefined;






export default JsonV1ManagedFieldsEntry;

