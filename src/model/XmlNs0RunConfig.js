/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.15-master.5
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import XmlNs0DiskConfig from './XmlNs0DiskConfig';
import XmlNs0RunConfigAllOf from './XmlNs0RunConfigAllOf';

/**
 * The XmlNs0RunConfig model module.
 * @module model/XmlNs0RunConfig
 * @version 0.4.15-master.5
 */
class XmlNs0RunConfig {
    /**
     * Constructs a new <code>XmlNs0RunConfig</code>.
     * 
     * @alias module:model/XmlNs0RunConfig
     * @extends module:model/XmlNs0RunConfigAllOf
     * @implements module:model/XmlNs0RunConfigAllOf
     */
    constructor() { 
        XmlNs0RunConfigAllOf.initialize(this);
        XmlNs0RunConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0RunConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0RunConfig} obj Optional instance to populate.
     * @return {module:model/XmlNs0RunConfig} The populated <code>XmlNs0RunConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0RunConfig();
            XmlNs0RunConfigAllOf.constructFromObject(data, obj);
            XmlNs0RunConfigAllOf.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement XmlNs0RunConfigAllOf interface:
/**
 * 
 * @member {Array.<String>} args
 */
XmlNs0RunConfigAllOf.prototype['args'] = undefined;
/**
 * 
 * @member {Array.<module:model/XmlNs0DiskConfig>} disk_config
 */
XmlNs0RunConfigAllOf.prototype['disk_config'] = undefined;
/**
 * 
 * @member {Object} environment
 */
XmlNs0RunConfigAllOf.prototype['environment'] = undefined;
/**
 * 
 * @member {String} run
 */
XmlNs0RunConfigAllOf.prototype['run'] = undefined;




export default XmlNs0RunConfig;

