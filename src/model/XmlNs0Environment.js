/**
 * madana-api
 * <h1>Using the madana-api</h1>        <p>This documentation contains a Quickstart Guide, relating client functionality and information about the available         endpoints and used datamodels.   </p>       <p> The madana-api and its implementations are still in heavy development. This means that there may be problems in our protocols, or there may be mistakes in our implementations. We take security vulnerabilities very seriously. If you discover a security issue, please bring it to our attention right away! If you find a vulnerability that may affect live deployments -- for example, by exposing a remote execution exploit -- please send your report privately to info@madana.io. Please DO NOT file a public issue. If the issue is a protocol weakness that cannot be immediately exploited or something not yet deployed, just discuss it openly   </p>   <br>   <p> Note: Not all functionality might be acessible without having accquired and api-license token. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a> </p>       <br>
 *
 * The version of the OpenAPI document: 0.0.1-master.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import XmlNs0EnvironmentAllOf from './XmlNs0EnvironmentAllOf';
import XmlNs0RunConfig from './XmlNs0RunConfig';

/**
 * The XmlNs0Environment model module.
 * @module model/XmlNs0Environment
 * @version 0.0.1-master.1
 */
class XmlNs0Environment {
    /**
     * Constructs a new <code>XmlNs0Environment</code>.
     * 
     * @alias module:model/XmlNs0Environment
     * @implements module:model/XmlNs0EnvironmentAllOf
     */
    constructor() { 
        XmlNs0EnvironmentAllOf.initialize(this);
        XmlNs0Environment.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>XmlNs0Environment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/XmlNs0Environment} obj Optional instance to populate.
     * @return {module:model/XmlNs0Environment} The populated <code>XmlNs0Environment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new XmlNs0Environment();
            XmlNs0EnvironmentAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('content')) {
                obj['content'] = ApiClient.convertToType(data['content'], ['String']);
            }
            if (data.hasOwnProperty('defaultRunConfiguration')) {
                obj['defaultRunConfiguration'] = XmlNs0RunConfig.constructFromObject(data['defaultRunConfiguration']);
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('packages')) {
                obj['packages'] = ApiClient.convertToType(data['packages'], ['String']);
            }
            if (data.hasOwnProperty('published')) {
                obj['published'] = ApiClient.convertToType(data['published'], 'Boolean');
            }
            if (data.hasOwnProperty('rootHashOffset')) {
                obj['rootHashOffset'] = ApiClient.convertToType(data['rootHashOffset'], 'String');
            }
            if (data.hasOwnProperty('roothash')) {
                obj['roothash'] = ApiClient.convertToType(data['roothash'], 'String');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {Array.<String>} content
 */
XmlNs0Environment.prototype['content'] = undefined;

/**
 * @member {module:model/XmlNs0RunConfig} defaultRunConfiguration
 */
XmlNs0Environment.prototype['defaultRunConfiguration'] = undefined;

/**
 * 
 * @member {String} description
 */
XmlNs0Environment.prototype['description'] = undefined;

/**
 * 
 * @member {String} ipfsHash
 */
XmlNs0Environment.prototype['ipfsHash'] = undefined;

/**
 * 
 * @member {String} name
 */
XmlNs0Environment.prototype['name'] = undefined;

/**
 * 
 * @member {Array.<String>} packages
 */
XmlNs0Environment.prototype['packages'] = undefined;

/**
 * 
 * @member {Boolean} published
 */
XmlNs0Environment.prototype['published'] = undefined;

/**
 * 
 * @member {String} rootHashOffset
 */
XmlNs0Environment.prototype['rootHashOffset'] = undefined;

/**
 * 
 * @member {String} roothash
 */
XmlNs0Environment.prototype['roothash'] = undefined;

/**
 * 
 * @member {String} size
 */
XmlNs0Environment.prototype['size'] = undefined;

/**
 * 
 * @member {String} uuid
 */
XmlNs0Environment.prototype['uuid'] = undefined;


// Implement XmlNs0EnvironmentAllOf interface:
/**
 * 
 * @member {Array.<String>} content
 */
XmlNs0EnvironmentAllOf.prototype['content'] = undefined;
/**
 * @member {module:model/XmlNs0RunConfig} defaultRunConfiguration
 */
XmlNs0EnvironmentAllOf.prototype['defaultRunConfiguration'] = undefined;
/**
 * 
 * @member {String} description
 */
XmlNs0EnvironmentAllOf.prototype['description'] = undefined;
/**
 * 
 * @member {String} ipfsHash
 */
XmlNs0EnvironmentAllOf.prototype['ipfsHash'] = undefined;
/**
 * 
 * @member {String} name
 */
XmlNs0EnvironmentAllOf.prototype['name'] = undefined;
/**
 * 
 * @member {Array.<String>} packages
 */
XmlNs0EnvironmentAllOf.prototype['packages'] = undefined;
/**
 * 
 * @member {Boolean} published
 */
XmlNs0EnvironmentAllOf.prototype['published'] = undefined;
/**
 * 
 * @member {String} rootHashOffset
 */
XmlNs0EnvironmentAllOf.prototype['rootHashOffset'] = undefined;
/**
 * 
 * @member {String} roothash
 */
XmlNs0EnvironmentAllOf.prototype['roothash'] = undefined;
/**
 * 
 * @member {String} size
 */
XmlNs0EnvironmentAllOf.prototype['size'] = undefined;
/**
 * 
 * @member {String} uuid
 */
XmlNs0EnvironmentAllOf.prototype['uuid'] = undefined;




export default XmlNs0Environment;

