/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.0.1-master.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import XmlNs0IPFSSystemInfoAllOf from './XmlNs0IPFSSystemInfoAllOf';

/**
 * The XmlNs0IPFSSystemInfo model module.
 * @module model/XmlNs0IPFSSystemInfo
 * @version 0.0.1-master.2
 */
class XmlNs0IPFSSystemInfo {
    /**
     * Constructs a new <code>XmlNs0IPFSSystemInfo</code>.
     * 
     * @alias module:model/XmlNs0IPFSSystemInfo
     * @extends module:model/XmlNs0IPFSSystemInfoAllOf
     * @implements module:model/XmlNs0IPFSSystemInfoAllOf
     */
    constructor() { 
        XmlNs0IPFSSystemInfoAllOf.initialize(this);
        XmlNs0IPFSSystemInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0IPFSSystemInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0IPFSSystemInfo} obj Optional instance to populate.
     * @return {module:model/XmlNs0IPFSSystemInfo} The populated <code>XmlNs0IPFSSystemInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0IPFSSystemInfo();
            XmlNs0IPFSSystemInfoAllOf.constructFromObject(data, obj);
            XmlNs0IPFSSystemInfoAllOf.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement XmlNs0IPFSSystemInfoAllOf interface:
/**
 * 
 * @member {String} agentVersion
 */
XmlNs0IPFSSystemInfoAllOf.prototype['agentVersion'] = undefined;
/**
 * 
 * @member {String} id
 */
XmlNs0IPFSSystemInfoAllOf.prototype['id'] = undefined;
/**
 * 
 * @member {String} protocolVersion
 */
XmlNs0IPFSSystemInfoAllOf.prototype['protocolVersion'] = undefined;
/**
 * 
 * @member {String} publicKey
 */
XmlNs0IPFSSystemInfoAllOf.prototype['publicKey'] = undefined;
/**
 * 
 * @member {String} swarmConnection
 */
XmlNs0IPFSSystemInfoAllOf.prototype['swarmConnection'] = undefined;




export default XmlNs0IPFSSystemInfo;

