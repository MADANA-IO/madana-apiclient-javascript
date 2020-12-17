/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.10
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonMDNSocialUserObject from './JsonMDNSocialUserObject';
import JsonMDNUserCredentials from './JsonMDNUserCredentials';
import JsonMDNUserSetting from './JsonMDNUserSetting';

/**
 * The JsonMDNUserAllOf model module.
 * @module model/JsonMDNUserAllOf
 * @version 0.5.0-master.10
 */
class JsonMDNUserAllOf {
    /**
     * Constructs a new <code>JsonMDNUserAllOf</code>.
     * @alias module:model/JsonMDNUserAllOf
     */
    constructor() { 
        
        JsonMDNUserAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonMDNUserAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonMDNUserAllOf} obj Optional instance to populate.
     * @return {module:model/JsonMDNUserAllOf} The populated <code>JsonMDNUserAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonMDNUserAllOf();

            if (data.hasOwnProperty('socialAccounts')) {
                obj['socialAccounts'] = ApiClient.convertToType(data['socialAccounts'], [JsonMDNSocialUserObject]);
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('mail')) {
                obj['mail'] = ApiClient.convertToType(data['mail'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('settings')) {
                obj['settings'] = ApiClient.convertToType(data['settings'], [JsonMDNUserSetting]);
            }
            if (data.hasOwnProperty('credentials')) {
                obj['credentials'] = JsonMDNUserCredentials.constructFromObject(data['credentials']);
            }
            if (data.hasOwnProperty('guid')) {
                obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Array.<module:model/JsonMDNSocialUserObject>} socialAccounts
 */
JsonMDNUserAllOf.prototype['socialAccounts'] = undefined;

/**
 * 
 * @member {String} lastName
 */
JsonMDNUserAllOf.prototype['lastName'] = undefined;

/**
 * 
 * @member {String} mail
 */
JsonMDNUserAllOf.prototype['mail'] = undefined;

/**
 * 
 * @member {String} firstName
 */
JsonMDNUserAllOf.prototype['firstName'] = undefined;

/**
 * 
 * @member {Array.<module:model/JsonMDNUserSetting>} settings
 */
JsonMDNUserAllOf.prototype['settings'] = undefined;

/**
 * @member {module:model/JsonMDNUserCredentials} credentials
 */
JsonMDNUserAllOf.prototype['credentials'] = undefined;

/**
 * 
 * @member {String} guid
 */
JsonMDNUserAllOf.prototype['guid'] = undefined;






export default JsonMDNUserAllOf;

