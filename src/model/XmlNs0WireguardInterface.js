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
import XmlNs0NetworkInterface from './XmlNs0NetworkInterface';
import XmlNs0WireguardInterfaceAllOf from './XmlNs0WireguardInterfaceAllOf';

/**
 * The XmlNs0WireguardInterface model module.
 * @module model/XmlNs0WireguardInterface
 * @version 0.4.15-master.10
 */
class XmlNs0WireguardInterface {
    /**
     * Constructs a new <code>XmlNs0WireguardInterface</code>.
     * 
     * @alias module:model/XmlNs0WireguardInterface
     * @implements module:model/XmlNs0NetworkInterface
     * @implements module:model/XmlNs0WireguardInterfaceAllOf
     */
    constructor() { 
        XmlNs0NetworkInterface.initialize(this);XmlNs0WireguardInterfaceAllOf.initialize(this);
        XmlNs0WireguardInterface.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0WireguardInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0WireguardInterface} obj Optional instance to populate.
     * @return {module:model/XmlNs0WireguardInterface} The populated <code>XmlNs0WireguardInterface</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0WireguardInterface();
            XmlNs0NetworkInterface.constructFromObject(data, obj);
            XmlNs0WireguardInterfaceAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} address
 */
XmlNs0WireguardInterface.prototype['address'] = undefined;

/**
 * 
 * @member {String} name
 */
XmlNs0WireguardInterface.prototype['name'] = undefined;

/**
 * 
 * @member {String} port
 */
XmlNs0WireguardInterface.prototype['port'] = undefined;


// Implement XmlNs0NetworkInterface interface:
/**
 * 
 * @member {String} address
 */
XmlNs0NetworkInterface.prototype['address'] = undefined;
/**
 * 
 * @member {String} name
 */
XmlNs0NetworkInterface.prototype['name'] = undefined;
// Implement XmlNs0WireguardInterfaceAllOf interface:
/**
 * 
 * @member {String} port
 */
XmlNs0WireguardInterfaceAllOf.prototype['port'] = undefined;




export default XmlNs0WireguardInterface;

