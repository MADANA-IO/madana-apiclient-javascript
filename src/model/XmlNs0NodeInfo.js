/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.17
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import XmlNs0IPFSSystemInfo from './XmlNs0IPFSSystemInfo';
import XmlNs0NodeInfoAllOf from './XmlNs0NodeInfoAllOf';

/**
 * The XmlNs0NodeInfo model module.
 * @module model/XmlNs0NodeInfo
 * @version 0.4.14-master.17
 */
class XmlNs0NodeInfo {
    /**
     * Constructs a new <code>XmlNs0NodeInfo</code>.
     * 
     * @alias module:model/XmlNs0NodeInfo
     * @implements module:model/XmlNs0NodeInfoAllOf
     */
    constructor() { 
        XmlNs0NodeInfoAllOf.initialize(this);
        XmlNs0NodeInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0NodeInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0NodeInfo} obj Optional instance to populate.
     * @return {module:model/XmlNs0NodeInfo} The populated <code>XmlNs0NodeInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0NodeInfo();
            XmlNs0NodeInfoAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('connectionURL')) {
                obj['connectionURL'] = ApiClient.convertToType(data['connectionURL'], 'String');
            }
            if (data.hasOwnProperty('cpuFamily')) {
                obj['cpuFamily'] = ApiClient.convertToType(data['cpuFamily'], 'String');
            }
            if (data.hasOwnProperty('cpuFrequency')) {
                obj['cpuFrequency'] = ApiClient.convertToType(data['cpuFrequency'], 'String');
            }
            if (data.hasOwnProperty('cpuLogicalCount')) {
                obj['cpuLogicalCount'] = ApiClient.convertToType(data['cpuLogicalCount'], 'Number');
            }
            if (data.hasOwnProperty('cpuModel')) {
                obj['cpuModel'] = ApiClient.convertToType(data['cpuModel'], 'String');
            }
            if (data.hasOwnProperty('cpuPhysicalCores')) {
                obj['cpuPhysicalCores'] = ApiClient.convertToType(data['cpuPhysicalCores'], 'Number');
            }
            if (data.hasOwnProperty('hardwareBaseboard')) {
                obj['hardwareBaseboard'] = ApiClient.convertToType(data['hardwareBaseboard'], 'String');
            }
            if (data.hasOwnProperty('hardwareFirmware')) {
                obj['hardwareFirmware'] = ApiClient.convertToType(data['hardwareFirmware'], 'String');
            }
            if (data.hasOwnProperty('ipfsInfo')) {
                obj['ipfsInfo'] = XmlNs0IPFSSystemInfo.constructFromObject(data['ipfsInfo']);
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = ApiClient.convertToType(data['memory'], 'String');
            }
            if (data.hasOwnProperty('operatingSystem')) {
                obj['operatingSystem'] = ApiClient.convertToType(data['operatingSystem'], 'String');
            }
            if (data.hasOwnProperty('operatingSystemUptime')) {
                obj['operatingSystemUptime'] = ApiClient.convertToType(data['operatingSystemUptime'], 'Number');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'String');
            }
            if (data.hasOwnProperty('processors')) {
                obj['processors'] = ApiClient.convertToType(data['processors'], ['String']);
            }
            if (data.hasOwnProperty('publicKey')) {
                obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} connectionURL
 */
XmlNs0NodeInfo.prototype['connectionURL'] = undefined;

/**
 * 
 * @member {String} cpuFamily
 */
XmlNs0NodeInfo.prototype['cpuFamily'] = undefined;

/**
 * 
 * @member {String} cpuFrequency
 */
XmlNs0NodeInfo.prototype['cpuFrequency'] = undefined;

/**
 * 
 * @member {Number} cpuLogicalCount
 */
XmlNs0NodeInfo.prototype['cpuLogicalCount'] = undefined;

/**
 * 
 * @member {String} cpuModel
 */
XmlNs0NodeInfo.prototype['cpuModel'] = undefined;

/**
 * 
 * @member {Number} cpuPhysicalCores
 */
XmlNs0NodeInfo.prototype['cpuPhysicalCores'] = undefined;

/**
 * 
 * @member {String} hardwareBaseboard
 */
XmlNs0NodeInfo.prototype['hardwareBaseboard'] = undefined;

/**
 * 
 * @member {String} hardwareFirmware
 */
XmlNs0NodeInfo.prototype['hardwareFirmware'] = undefined;

/**
 * @member {module:model/XmlNs0IPFSSystemInfo} ipfsInfo
 */
XmlNs0NodeInfo.prototype['ipfsInfo'] = undefined;

/**
 * 
 * @member {String} memory
 */
XmlNs0NodeInfo.prototype['memory'] = undefined;

/**
 * 
 * @member {String} operatingSystem
 */
XmlNs0NodeInfo.prototype['operatingSystem'] = undefined;

/**
 * 
 * @member {Number} operatingSystemUptime
 */
XmlNs0NodeInfo.prototype['operatingSystemUptime'] = undefined;

/**
 * 
 * @member {String} owner
 */
XmlNs0NodeInfo.prototype['owner'] = undefined;

/**
 * 
 * @member {Array.<String>} processors
 */
XmlNs0NodeInfo.prototype['processors'] = undefined;

/**
 * 
 * @member {String} publicKey
 */
XmlNs0NodeInfo.prototype['publicKey'] = undefined;

/**
 * 
 * @member {String} status
 */
XmlNs0NodeInfo.prototype['status'] = undefined;


// Implement XmlNs0NodeInfoAllOf interface:
/**
 * 
 * @member {String} connectionURL
 */
XmlNs0NodeInfoAllOf.prototype['connectionURL'] = undefined;
/**
 * 
 * @member {String} cpuFamily
 */
XmlNs0NodeInfoAllOf.prototype['cpuFamily'] = undefined;
/**
 * 
 * @member {String} cpuFrequency
 */
XmlNs0NodeInfoAllOf.prototype['cpuFrequency'] = undefined;
/**
 * 
 * @member {Number} cpuLogicalCount
 */
XmlNs0NodeInfoAllOf.prototype['cpuLogicalCount'] = undefined;
/**
 * 
 * @member {String} cpuModel
 */
XmlNs0NodeInfoAllOf.prototype['cpuModel'] = undefined;
/**
 * 
 * @member {Number} cpuPhysicalCores
 */
XmlNs0NodeInfoAllOf.prototype['cpuPhysicalCores'] = undefined;
/**
 * 
 * @member {String} hardwareBaseboard
 */
XmlNs0NodeInfoAllOf.prototype['hardwareBaseboard'] = undefined;
/**
 * 
 * @member {String} hardwareFirmware
 */
XmlNs0NodeInfoAllOf.prototype['hardwareFirmware'] = undefined;
/**
 * @member {module:model/XmlNs0IPFSSystemInfo} ipfsInfo
 */
XmlNs0NodeInfoAllOf.prototype['ipfsInfo'] = undefined;
/**
 * 
 * @member {String} memory
 */
XmlNs0NodeInfoAllOf.prototype['memory'] = undefined;
/**
 * 
 * @member {String} operatingSystem
 */
XmlNs0NodeInfoAllOf.prototype['operatingSystem'] = undefined;
/**
 * 
 * @member {Number} operatingSystemUptime
 */
XmlNs0NodeInfoAllOf.prototype['operatingSystemUptime'] = undefined;
/**
 * 
 * @member {String} owner
 */
XmlNs0NodeInfoAllOf.prototype['owner'] = undefined;
/**
 * 
 * @member {Array.<String>} processors
 */
XmlNs0NodeInfoAllOf.prototype['processors'] = undefined;
/**
 * 
 * @member {String} publicKey
 */
XmlNs0NodeInfoAllOf.prototype['publicKey'] = undefined;
/**
 * 
 * @member {String} status
 */
XmlNs0NodeInfoAllOf.prototype['status'] = undefined;




export default XmlNs0NodeInfo;

