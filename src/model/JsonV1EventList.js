/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.30
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonV1Event from './JsonV1Event';
import JsonV1ListMeta from './JsonV1ListMeta';

/**
 * The JsonV1EventList model module.
 * @module model/JsonV1EventList
 * @version 0.5.0-master.30
 */
class JsonV1EventList {
    /**
     * Constructs a new <code>JsonV1EventList</code>.
     * 
     * @alias module:model/JsonV1EventList
     */
    constructor() { 
        
        JsonV1EventList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonV1EventList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonV1EventList} obj Optional instance to populate.
     * @return {module:model/JsonV1EventList} The populated <code>JsonV1EventList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonV1EventList();

            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = JsonV1ListMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [JsonV1Event]);
            }
            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} kind
 */
JsonV1EventList.prototype['kind'] = undefined;

/**
 * @member {module:model/JsonV1ListMeta} metadata
 */
JsonV1EventList.prototype['metadata'] = undefined;

/**
 * 
 * @member {Array.<module:model/JsonV1Event>} items
 */
JsonV1EventList.prototype['items'] = undefined;

/**
 * 
 * @member {String} apiVersion
 */
JsonV1EventList.prototype['apiVersion'] = undefined;






export default JsonV1EventList;

