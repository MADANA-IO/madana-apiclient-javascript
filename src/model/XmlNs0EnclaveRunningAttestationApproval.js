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
import XmlNs0EnclaveProcess from './XmlNs0EnclaveProcess';
import XmlNs0EnclaveRunningAttestation from './XmlNs0EnclaveRunningAttestation';
import XmlNs0EnclaveRunningAttestationApprovalAllOf from './XmlNs0EnclaveRunningAttestationApprovalAllOf';
import XmlNs0NodeInfo from './XmlNs0NodeInfo';

/**
 * The XmlNs0EnclaveRunningAttestationApproval model module.
 * @module model/XmlNs0EnclaveRunningAttestationApproval
 * @version 0.4.15-master.5
 */
class XmlNs0EnclaveRunningAttestationApproval {
    /**
     * Constructs a new <code>XmlNs0EnclaveRunningAttestationApproval</code>.
     * 
     * @alias module:model/XmlNs0EnclaveRunningAttestationApproval
     * @implements module:model/XmlNs0EnclaveRunningAttestation
     * @implements module:model/XmlNs0EnclaveRunningAttestationApprovalAllOf
     */
    constructor() { 
        XmlNs0EnclaveRunningAttestation.initialize(this);XmlNs0EnclaveRunningAttestationApprovalAllOf.initialize(this);
        XmlNs0EnclaveRunningAttestationApproval.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0EnclaveRunningAttestationApproval</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0EnclaveRunningAttestationApproval} obj Optional instance to populate.
     * @return {module:model/XmlNs0EnclaveRunningAttestationApproval} The populated <code>XmlNs0EnclaveRunningAttestationApproval</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0EnclaveRunningAttestationApproval();
            XmlNs0EnclaveRunningAttestation.constructFromObject(data, obj);
            XmlNs0EnclaveRunningAttestationApprovalAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('enclaveProcess')) {
                obj['enclaveProcess'] = XmlNs0EnclaveProcess.constructFromObject(data['enclaveProcess']);
            }
            if (data.hasOwnProperty('nodeInfo')) {
                obj['nodeInfo'] = XmlNs0NodeInfo.constructFromObject(data['nodeInfo']);
            }
            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/XmlNs0EnclaveProcess} enclaveProcess
 */
XmlNs0EnclaveRunningAttestationApproval.prototype['enclaveProcess'] = undefined;

/**
 * @member {module:model/XmlNs0NodeInfo} nodeInfo
 */
XmlNs0EnclaveRunningAttestationApproval.prototype['nodeInfo'] = undefined;

/**
 * 
 * @member {String} approved
 */
XmlNs0EnclaveRunningAttestationApproval.prototype['approved'] = undefined;


// Implement XmlNs0EnclaveRunningAttestation interface:
/**
 * @member {module:model/XmlNs0EnclaveProcess} enclaveProcess
 */
XmlNs0EnclaveRunningAttestation.prototype['enclaveProcess'] = undefined;
/**
 * @member {module:model/XmlNs0NodeInfo} nodeInfo
 */
XmlNs0EnclaveRunningAttestation.prototype['nodeInfo'] = undefined;
// Implement XmlNs0EnclaveRunningAttestationApprovalAllOf interface:
/**
 * 
 * @member {String} approved
 */
XmlNs0EnclaveRunningAttestationApprovalAllOf.prototype['approved'] = undefined;




export default XmlNs0EnclaveRunningAttestationApproval;

