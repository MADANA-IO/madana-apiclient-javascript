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
import XmlNs0EnclavePort from './XmlNs0EnclavePort';
import XmlNs0EnclaveProcessAllOf from './XmlNs0EnclaveProcessAllOf';
import XmlNs0Environment from './XmlNs0Environment';
import XmlNs0InputStream from './XmlNs0InputStream';
import XmlNs0Process from './XmlNs0Process';
import XmlNs0WireguardInterface from './XmlNs0WireguardInterface';

/**
 * The XmlNs0EnclaveProcess model module.
 * @module model/XmlNs0EnclaveProcess
 * @version 0.5.0-master.10
 */
class XmlNs0EnclaveProcess {
    /**
     * Constructs a new <code>XmlNs0EnclaveProcess</code>.
     * 
     * @alias module:model/XmlNs0EnclaveProcess
     * @extends module:model/XmlNs0EnclaveProcessAllOf
     * @implements module:model/XmlNs0EnclaveProcessAllOf
     */
    constructor() { 
        XmlNs0EnclaveProcessAllOf.initialize(this);
        XmlNs0EnclaveProcess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0EnclaveProcess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0EnclaveProcess} obj Optional instance to populate.
     * @return {module:model/XmlNs0EnclaveProcess} The populated <code>XmlNs0EnclaveProcess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0EnclaveProcess();
            XmlNs0EnclaveProcessAllOf.constructFromObject(data, obj);
            XmlNs0EnclaveProcessAllOf.constructFromObject(data, obj);

        }
        return obj;
    }


}


// Implement XmlNs0EnclaveProcessAllOf interface:
/**
 * 
 * @member {String} attestationServer
 */
XmlNs0EnclaveProcessAllOf.prototype['attestationServer'] = undefined;
/**
 * 
 * @member {String} consoleOutput
 */
XmlNs0EnclaveProcessAllOf.prototype['consoleOutput'] = undefined;
/**
 * 
 * @member {String} enclaveIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['enclaveIdent'] = undefined;
/**
 * @member {module:model/XmlNs0InputStream} enclaveInputstream
 */
XmlNs0EnclaveProcessAllOf.prototype['enclaveInputstream'] = undefined;
/**
 * 
 * @member {String} endingTime
 */
XmlNs0EnclaveProcessAllOf.prototype['endingTime'] = undefined;
/**
 * @member {module:model/XmlNs0Environment} environment
 */
XmlNs0EnclaveProcessAllOf.prototype['environment'] = undefined;
/**
 * 
 * @member {String} internalAttesationServer
 */
XmlNs0EnclaveProcessAllOf.prototype['internalAttesationServer'] = undefined;
/**
 * 
 * @member {String} internalIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['internalIdent'] = undefined;
/**
 * 
 * @member {String} internalRemoteControlServer
 */
XmlNs0EnclaveProcessAllOf.prototype['internalRemoteControlServer'] = undefined;
/**
 * 
 * @member {String} internalWireguardServer
 */
XmlNs0EnclaveProcessAllOf.prototype['internalWireguardServer'] = undefined;
/**
 * 
 * @member {Object} portMapping
 */
XmlNs0EnclaveProcessAllOf.prototype['portMapping'] = undefined;
/**
 * 
 * @member {Array.<module:model/XmlNs0EnclavePort>} ports
 */
XmlNs0EnclaveProcessAllOf.prototype['ports'] = undefined;
/**
 * @member {module:model/XmlNs0Process} process
 */
XmlNs0EnclaveProcessAllOf.prototype['process'] = undefined;
/**
 * 
 * @member {String} publicIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['publicIdent'] = undefined;
/**
 * 
 * @member {String} remoteControlServer
 */
XmlNs0EnclaveProcessAllOf.prototype['remoteControlServer'] = undefined;
/**
 * 
 * @member {String} signerIdent
 */
XmlNs0EnclaveProcessAllOf.prototype['signerIdent'] = undefined;
/**
 * 
 * @member {String} startupCMD
 */
XmlNs0EnclaveProcessAllOf.prototype['startupCMD'] = undefined;
/**
 * 
 * @member {String} startupTime
 */
XmlNs0EnclaveProcessAllOf.prototype['startupTime'] = undefined;
/**
 * 
 * @member {String} status
 */
XmlNs0EnclaveProcessAllOf.prototype['status'] = undefined;
/**
 * @member {module:model/XmlNs0WireguardInterface} wgInterface
 */
XmlNs0EnclaveProcessAllOf.prototype['wgInterface'] = undefined;
/**
 * 
 * @member {String} wireguardPublicKey
 */
XmlNs0EnclaveProcessAllOf.prototype['wireguardPublicKey'] = undefined;
/**
 * 
 * @member {String} wireguardServer
 */
XmlNs0EnclaveProcessAllOf.prototype['wireguardServer'] = undefined;




export default XmlNs0EnclaveProcess;

