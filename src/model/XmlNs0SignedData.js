/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.5.0-master.47
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import XmlNs0SignedDataAllOf from './XmlNs0SignedDataAllOf';

/**
 * The XmlNs0SignedData model module.
 * @module model/XmlNs0SignedData
 * @version 0.5.0-master.47
 */
class XmlNs0SignedData {
    /**
     * Constructs a new <code>XmlNs0SignedData</code>.
     * 
     * @alias module:model/XmlNs0SignedData
     * @implements module:model/XmlNs0SignedDataAllOf
     */
    constructor() { 
        XmlNs0SignedDataAllOf.initialize(this);
        XmlNs0SignedData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0SignedData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0SignedData} obj Optional instance to populate.
     * @return {module:model/XmlNs0SignedData} The populated <code>XmlNs0SignedData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0SignedData();
            XmlNs0SignedDataAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('fingerpint')) {
                obj['fingerpint'] = ApiClient.convertToType(data['fingerpint'], 'String');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} data
 */
XmlNs0SignedData.prototype['data'] = undefined;

/**
 * 
 * @member {String} fingerpint
 */
XmlNs0SignedData.prototype['fingerpint'] = undefined;

/**
 * 
 * @member {String} signature
 */
XmlNs0SignedData.prototype['signature'] = undefined;


// Implement XmlNs0SignedDataAllOf interface:
/**
 * 
 * @member {String} data
 */
XmlNs0SignedDataAllOf.prototype['data'] = undefined;
/**
 * 
 * @member {String} fingerpint
 */
XmlNs0SignedDataAllOf.prototype['fingerpint'] = undefined;
/**
 * 
 * @member {String} signature
 */
XmlNs0SignedDataAllOf.prototype['signature'] = undefined;




export default XmlNs0SignedData;

