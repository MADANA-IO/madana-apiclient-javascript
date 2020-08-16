/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.4.14-master.16
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonEnvironment from './JsonEnvironment';
import JsonProcess from './JsonProcess';
import JsonWireguardInterface from './JsonWireguardInterface';

/**
 * The JsonEnclaveProcess model module.
 * @module model/JsonEnclaveProcess
 * @version 0.4.14-master.16
 */
class JsonEnclaveProcess {
    /**
     * Constructs a new <code>JsonEnclaveProcess</code>.
     * 
     * @alias module:model/JsonEnclaveProcess
     */
    constructor() { 
        
        JsonEnclaveProcess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonEnclaveProcess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonEnclaveProcess} obj Optional instance to populate.
     * @return {module:model/JsonEnclaveProcess} The populated <code>JsonEnclaveProcess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonEnclaveProcess();

            if (data.hasOwnProperty('remoteControlServer')) {
                obj['remoteControlServer'] = ApiClient.convertToType(data['remoteControlServer'], 'String');
            }
            if (data.hasOwnProperty('process')) {
                obj['process'] = JsonProcess.constructFromObject(data['process']);
            }
            if (data.hasOwnProperty('signerIdent')) {
                obj['signerIdent'] = ApiClient.convertToType(data['signerIdent'], 'String');
            }
            if (data.hasOwnProperty('internalAttesationServer')) {
                obj['internalAttesationServer'] = ApiClient.convertToType(data['internalAttesationServer'], 'String');
            }
            if (data.hasOwnProperty('attestationServer')) {
                obj['attestationServer'] = ApiClient.convertToType(data['attestationServer'], 'String');
            }
            if (data.hasOwnProperty('internalRemoteControlServer')) {
                obj['internalRemoteControlServer'] = ApiClient.convertToType(data['internalRemoteControlServer'], 'String');
            }
            if (data.hasOwnProperty('wgInterface')) {
                obj['wgInterface'] = JsonWireguardInterface.constructFromObject(data['wgInterface']);
            }
            if (data.hasOwnProperty('endingTime')) {
                obj['endingTime'] = ApiClient.convertToType(data['endingTime'], 'String');
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = JsonEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('internalIdent')) {
                obj['internalIdent'] = ApiClient.convertToType(data['internalIdent'], 'String');
            }
            if (data.hasOwnProperty('consoleOutput')) {
                obj['consoleOutput'] = ApiClient.convertToType(data['consoleOutput'], 'String');
            }
            if (data.hasOwnProperty('wireguardPublicKey')) {
                obj['wireguardPublicKey'] = ApiClient.convertToType(data['wireguardPublicKey'], 'String');
            }
            if (data.hasOwnProperty('startupTime')) {
                obj['startupTime'] = ApiClient.convertToType(data['startupTime'], 'String');
            }
            if (data.hasOwnProperty('enclaveIdent')) {
                obj['enclaveIdent'] = ApiClient.convertToType(data['enclaveIdent'], 'String');
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
 * @member {String} remoteControlServer
 */
JsonEnclaveProcess.prototype['remoteControlServer'] = undefined;

/**
 * @member {module:model/JsonProcess} process
 */
JsonEnclaveProcess.prototype['process'] = undefined;

/**
 * 
 * @member {String} signerIdent
 */
JsonEnclaveProcess.prototype['signerIdent'] = undefined;

/**
 * 
 * @member {String} internalAttesationServer
 */
JsonEnclaveProcess.prototype['internalAttesationServer'] = undefined;

/**
 * 
 * @member {String} attestationServer
 */
JsonEnclaveProcess.prototype['attestationServer'] = undefined;

/**
 * 
 * @member {String} internalRemoteControlServer
 */
JsonEnclaveProcess.prototype['internalRemoteControlServer'] = undefined;

/**
 * @member {module:model/JsonWireguardInterface} wgInterface
 */
JsonEnclaveProcess.prototype['wgInterface'] = undefined;

/**
 * 
 * @member {String} endingTime
 */
JsonEnclaveProcess.prototype['endingTime'] = undefined;

/**
 * @member {module:model/JsonEnvironment} environment
 */
JsonEnclaveProcess.prototype['environment'] = undefined;

/**
 * 
 * @member {String} internalIdent
 */
JsonEnclaveProcess.prototype['internalIdent'] = undefined;

/**
 * 
 * @member {String} consoleOutput
 */
JsonEnclaveProcess.prototype['consoleOutput'] = undefined;

/**
 * 
 * @member {String} wireguardPublicKey
 */
JsonEnclaveProcess.prototype['wireguardPublicKey'] = undefined;

/**
 * 
 * @member {String} startupTime
 */
JsonEnclaveProcess.prototype['startupTime'] = undefined;

/**
 * 
 * @member {String} enclaveIdent
 */
JsonEnclaveProcess.prototype['enclaveIdent'] = undefined;

/**
 * 
 * @member {String} status
 */
JsonEnclaveProcess.prototype['status'] = undefined;






export default JsonEnclaveProcess;

