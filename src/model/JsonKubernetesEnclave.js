/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.53
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonEnclavePort from './JsonEnclavePort';
import JsonEnclaveProcess from './JsonEnclaveProcess';
import JsonEnvironment from './JsonEnvironment';
import JsonKubernetesEnclaveAllOf from './JsonKubernetesEnclaveAllOf';
import JsonProcess from './JsonProcess';
import JsonV1EventList from './JsonV1EventList';
import JsonWireguardInterface from './JsonWireguardInterface';

/**
 * The JsonKubernetesEnclave model module.
 * @module model/JsonKubernetesEnclave
 * @version 0.5.0-master.53
 */
class JsonKubernetesEnclave {
    /**
     * Constructs a new <code>JsonKubernetesEnclave</code>.
     * 
     * @alias module:model/JsonKubernetesEnclave
     * @implements module:model/JsonEnclaveProcess
     * @implements module:model/JsonKubernetesEnclaveAllOf
     */
    constructor() { 
        JsonEnclaveProcess.initialize(this);JsonKubernetesEnclaveAllOf.initialize(this);
        JsonKubernetesEnclave.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonKubernetesEnclave</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonKubernetesEnclave} obj Optional instance to populate.
     * @return {module:model/JsonKubernetesEnclave} The populated <code>JsonKubernetesEnclave</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonKubernetesEnclave();
            JsonEnclaveProcess.constructFromObject(data, obj);
            JsonKubernetesEnclaveAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('internalRemoteControlServer')) {
                obj['internalRemoteControlServer'] = ApiClient.convertToType(data['internalRemoteControlServer'], 'String');
            }
            if (data.hasOwnProperty('internalWireguardServer')) {
                obj['internalWireguardServer'] = ApiClient.convertToType(data['internalWireguardServer'], 'String');
            }
            if (data.hasOwnProperty('enclaveIdent')) {
                obj['enclaveIdent'] = ApiClient.convertToType(data['enclaveIdent'], 'String');
            }
            if (data.hasOwnProperty('attestationServer')) {
                obj['attestationServer'] = ApiClient.convertToType(data['attestationServer'], 'String');
            }
            if (data.hasOwnProperty('consoleOutput')) {
                obj['consoleOutput'] = ApiClient.convertToType(data['consoleOutput'], 'String');
            }
            if (data.hasOwnProperty('portMapping')) {
                obj['portMapping'] = ApiClient.convertToType(data['portMapping'], {'String': 'String'});
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [JsonEnclavePort]);
            }
            if (data.hasOwnProperty('remoteControlServer')) {
                obj['remoteControlServer'] = ApiClient.convertToType(data['remoteControlServer'], 'String');
            }
            if (data.hasOwnProperty('signerIdent')) {
                obj['signerIdent'] = ApiClient.convertToType(data['signerIdent'], 'String');
            }
            if (data.hasOwnProperty('wgInterface')) {
                obj['wgInterface'] = JsonWireguardInterface.constructFromObject(data['wgInterface']);
            }
            if (data.hasOwnProperty('startupTime')) {
                obj['startupTime'] = ApiClient.convertToType(data['startupTime'], 'String');
            }
            if (data.hasOwnProperty('internalAttesationServer')) {
                obj['internalAttesationServer'] = ApiClient.convertToType(data['internalAttesationServer'], 'String');
            }
            if (data.hasOwnProperty('kubernetesEnclave')) {
                obj['kubernetesEnclave'] = JsonKubernetesEnclave.constructFromObject(data['kubernetesEnclave']);
            }
            if (data.hasOwnProperty('environment')) {
                obj['environment'] = JsonEnvironment.constructFromObject(data['environment']);
            }
            if (data.hasOwnProperty('internalIdent')) {
                obj['internalIdent'] = ApiClient.convertToType(data['internalIdent'], 'String');
            }
            if (data.hasOwnProperty('startupCMD')) {
                obj['startupCMD'] = ApiClient.convertToType(data['startupCMD'], 'String');
            }
            if (data.hasOwnProperty('enclaveInputstream')) {
                obj['enclaveInputstream'] = ApiClient.convertToType(data['enclaveInputstream'], Object);
            }
            if (data.hasOwnProperty('endingTime')) {
                obj['endingTime'] = ApiClient.convertToType(data['endingTime'], 'String');
            }
            if (data.hasOwnProperty('wireguardPublicKey')) {
                obj['wireguardPublicKey'] = ApiClient.convertToType(data['wireguardPublicKey'], 'String');
            }
            if (data.hasOwnProperty('publicIdent')) {
                obj['publicIdent'] = ApiClient.convertToType(data['publicIdent'], 'String');
            }
            if (data.hasOwnProperty('wireguardServer')) {
                obj['wireguardServer'] = ApiClient.convertToType(data['wireguardServer'], 'String');
            }
            if (data.hasOwnProperty('process')) {
                obj['process'] = JsonProcess.constructFromObject(data['process']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('attestationPort')) {
                obj['attestationPort'] = ApiClient.convertToType(data['attestationPort'], 'Number');
            }
            if (data.hasOwnProperty('enclaveDeploymentEvents')) {
                obj['enclaveDeploymentEvents'] = JsonV1EventList.constructFromObject(data['enclaveDeploymentEvents']);
            }
            if (data.hasOwnProperty('enclavePodEvents')) {
                obj['enclavePodEvents'] = JsonV1EventList.constructFromObject(data['enclavePodEvents']);
            }
            if (data.hasOwnProperty('isUsingInitContainer')) {
                obj['isUsingInitContainer'] = ApiClient.convertToType(data['isUsingInitContainer'], 'Boolean');
            }
            if (data.hasOwnProperty('wireguardPort')) {
                obj['wireguardPort'] = ApiClient.convertToType(data['wireguardPort'], 'Number');
            }
            if (data.hasOwnProperty('enclaveReplicaSetEvents')) {
                obj['enclaveReplicaSetEvents'] = JsonV1EventList.constructFromObject(data['enclaveReplicaSetEvents']);
            }
            if (data.hasOwnProperty('debugInfo')) {
                obj['debugInfo'] = ApiClient.convertToType(data['debugInfo'], 'String');
            }
            if (data.hasOwnProperty('podPhase')) {
                obj['podPhase'] = ApiClient.convertToType(data['podPhase'], 'String');
            }
            if (data.hasOwnProperty('remoteControlIP')) {
                obj['remoteControlIP'] = ApiClient.convertToType(data['remoteControlIP'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} internalRemoteControlServer
 */
JsonKubernetesEnclave.prototype['internalRemoteControlServer'] = undefined;

/**
 * 
 * @member {String} internalWireguardServer
 */
JsonKubernetesEnclave.prototype['internalWireguardServer'] = undefined;

/**
 * 
 * @member {String} enclaveIdent
 */
JsonKubernetesEnclave.prototype['enclaveIdent'] = undefined;

/**
 * 
 * @member {String} attestationServer
 */
JsonKubernetesEnclave.prototype['attestationServer'] = undefined;

/**
 * 
 * @member {String} consoleOutput
 */
JsonKubernetesEnclave.prototype['consoleOutput'] = undefined;

/**
 * 
 * @member {Object.<String, String>} portMapping
 */
JsonKubernetesEnclave.prototype['portMapping'] = undefined;

/**
 * 
 * @member {Array.<module:model/JsonEnclavePort>} ports
 */
JsonKubernetesEnclave.prototype['ports'] = undefined;

/**
 * 
 * @member {String} remoteControlServer
 */
JsonKubernetesEnclave.prototype['remoteControlServer'] = undefined;

/**
 * 
 * @member {String} signerIdent
 */
JsonKubernetesEnclave.prototype['signerIdent'] = undefined;

/**
 * @member {module:model/JsonWireguardInterface} wgInterface
 */
JsonKubernetesEnclave.prototype['wgInterface'] = undefined;

/**
 * 
 * @member {String} startupTime
 */
JsonKubernetesEnclave.prototype['startupTime'] = undefined;

/**
 * 
 * @member {String} internalAttesationServer
 */
JsonKubernetesEnclave.prototype['internalAttesationServer'] = undefined;

/**
 * @member {module:model/JsonKubernetesEnclave} kubernetesEnclave
 */
JsonKubernetesEnclave.prototype['kubernetesEnclave'] = undefined;

/**
 * @member {module:model/JsonEnvironment} environment
 */
JsonKubernetesEnclave.prototype['environment'] = undefined;

/**
 * 
 * @member {String} internalIdent
 */
JsonKubernetesEnclave.prototype['internalIdent'] = undefined;

/**
 * 
 * @member {String} startupCMD
 */
JsonKubernetesEnclave.prototype['startupCMD'] = undefined;

/**
 * 
 * @member {Object} enclaveInputstream
 */
JsonKubernetesEnclave.prototype['enclaveInputstream'] = undefined;

/**
 * 
 * @member {String} endingTime
 */
JsonKubernetesEnclave.prototype['endingTime'] = undefined;

/**
 * 
 * @member {String} wireguardPublicKey
 */
JsonKubernetesEnclave.prototype['wireguardPublicKey'] = undefined;

/**
 * 
 * @member {String} publicIdent
 */
JsonKubernetesEnclave.prototype['publicIdent'] = undefined;

/**
 * 
 * @member {String} wireguardServer
 */
JsonKubernetesEnclave.prototype['wireguardServer'] = undefined;

/**
 * @member {module:model/JsonProcess} process
 */
JsonKubernetesEnclave.prototype['process'] = undefined;

/**
 * 
 * @member {String} status
 */
JsonKubernetesEnclave.prototype['status'] = undefined;

/**
 * 
 * @member {Number} attestationPort
 */
JsonKubernetesEnclave.prototype['attestationPort'] = undefined;

/**
 * @member {module:model/JsonV1EventList} enclaveDeploymentEvents
 */
JsonKubernetesEnclave.prototype['enclaveDeploymentEvents'] = undefined;

/**
 * @member {module:model/JsonV1EventList} enclavePodEvents
 */
JsonKubernetesEnclave.prototype['enclavePodEvents'] = undefined;

/**
 * 
 * @member {Boolean} isUsingInitContainer
 */
JsonKubernetesEnclave.prototype['isUsingInitContainer'] = undefined;

/**
 * 
 * @member {Number} wireguardPort
 */
JsonKubernetesEnclave.prototype['wireguardPort'] = undefined;

/**
 * @member {module:model/JsonV1EventList} enclaveReplicaSetEvents
 */
JsonKubernetesEnclave.prototype['enclaveReplicaSetEvents'] = undefined;

/**
 * 
 * @member {String} debugInfo
 */
JsonKubernetesEnclave.prototype['debugInfo'] = undefined;

/**
 * 
 * @member {String} podPhase
 */
JsonKubernetesEnclave.prototype['podPhase'] = undefined;

/**
 * 
 * @member {String} remoteControlIP
 */
JsonKubernetesEnclave.prototype['remoteControlIP'] = undefined;


// Implement JsonEnclaveProcess interface:
/**
 * 
 * @member {String} internalRemoteControlServer
 */
JsonEnclaveProcess.prototype['internalRemoteControlServer'] = undefined;
/**
 * 
 * @member {String} internalWireguardServer
 */
JsonEnclaveProcess.prototype['internalWireguardServer'] = undefined;
/**
 * 
 * @member {String} enclaveIdent
 */
JsonEnclaveProcess.prototype['enclaveIdent'] = undefined;
/**
 * 
 * @member {String} attestationServer
 */
JsonEnclaveProcess.prototype['attestationServer'] = undefined;
/**
 * 
 * @member {String} consoleOutput
 */
JsonEnclaveProcess.prototype['consoleOutput'] = undefined;
/**
 * 
 * @member {Object.<String, String>} portMapping
 */
JsonEnclaveProcess.prototype['portMapping'] = undefined;
/**
 * 
 * @member {Array.<module:model/JsonEnclavePort>} ports
 */
JsonEnclaveProcess.prototype['ports'] = undefined;
/**
 * 
 * @member {String} remoteControlServer
 */
JsonEnclaveProcess.prototype['remoteControlServer'] = undefined;
/**
 * 
 * @member {String} signerIdent
 */
JsonEnclaveProcess.prototype['signerIdent'] = undefined;
/**
 * @member {module:model/JsonWireguardInterface} wgInterface
 */
JsonEnclaveProcess.prototype['wgInterface'] = undefined;
/**
 * 
 * @member {String} startupTime
 */
JsonEnclaveProcess.prototype['startupTime'] = undefined;
/**
 * 
 * @member {String} internalAttesationServer
 */
JsonEnclaveProcess.prototype['internalAttesationServer'] = undefined;
/**
 * @member {module:model/JsonKubernetesEnclave} kubernetesEnclave
 */
JsonEnclaveProcess.prototype['kubernetesEnclave'] = undefined;
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
 * @member {String} startupCMD
 */
JsonEnclaveProcess.prototype['startupCMD'] = undefined;
/**
 * 
 * @member {Object} enclaveInputstream
 */
JsonEnclaveProcess.prototype['enclaveInputstream'] = undefined;
/**
 * 
 * @member {String} endingTime
 */
JsonEnclaveProcess.prototype['endingTime'] = undefined;
/**
 * 
 * @member {String} wireguardPublicKey
 */
JsonEnclaveProcess.prototype['wireguardPublicKey'] = undefined;
/**
 * 
 * @member {String} publicIdent
 */
JsonEnclaveProcess.prototype['publicIdent'] = undefined;
/**
 * 
 * @member {String} wireguardServer
 */
JsonEnclaveProcess.prototype['wireguardServer'] = undefined;
/**
 * @member {module:model/JsonProcess} process
 */
JsonEnclaveProcess.prototype['process'] = undefined;
/**
 * 
 * @member {String} status
 */
JsonEnclaveProcess.prototype['status'] = undefined;
// Implement JsonKubernetesEnclaveAllOf interface:
/**
 * 
 * @member {Number} attestationPort
 */
JsonKubernetesEnclaveAllOf.prototype['attestationPort'] = undefined;
/**
 * @member {module:model/JsonV1EventList} enclaveDeploymentEvents
 */
JsonKubernetesEnclaveAllOf.prototype['enclaveDeploymentEvents'] = undefined;
/**
 * @member {module:model/JsonV1EventList} enclavePodEvents
 */
JsonKubernetesEnclaveAllOf.prototype['enclavePodEvents'] = undefined;
/**
 * 
 * @member {Boolean} isUsingInitContainer
 */
JsonKubernetesEnclaveAllOf.prototype['isUsingInitContainer'] = undefined;
/**
 * 
 * @member {Number} wireguardPort
 */
JsonKubernetesEnclaveAllOf.prototype['wireguardPort'] = undefined;
/**
 * @member {module:model/JsonV1EventList} enclaveReplicaSetEvents
 */
JsonKubernetesEnclaveAllOf.prototype['enclaveReplicaSetEvents'] = undefined;
/**
 * 
 * @member {String} debugInfo
 */
JsonKubernetesEnclaveAllOf.prototype['debugInfo'] = undefined;
/**
 * 
 * @member {String} podPhase
 */
JsonKubernetesEnclaveAllOf.prototype['podPhase'] = undefined;
/**
 * 
 * @member {String} remoteControlIP
 */
JsonKubernetesEnclaveAllOf.prototype['remoteControlIP'] = undefined;




export default JsonKubernetesEnclave;

