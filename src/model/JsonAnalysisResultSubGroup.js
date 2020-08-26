/**
 * madana-api
 * <h1>API Quickstart Guide</h1>        <p>This documentation contains a Quickstart Guide, a few <a href=\"downloads.html\">sample clients</a>  for download and information about the available  <a href=\"resources.html\">endpoints</a>  and  <a href=\"data.html\">DataTypes</a>  </p>     <p>The <a target=\"_blank\" href=\"http://madana-explorer-staging.eu-central-1.elasticbeanstalk.com/login\">  MADANA Explorer</a> can be used to verify the interactions with the API</p>           <p>Internal use only. For more information visit <a href=\"https://www.madana.io\">www.madana.io</a></p>         <br> <br>
 *
 * The version of the OpenAPI document: 0.4.12
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import JsonAnalysisResult from './JsonAnalysisResult';
import JsonAnalysisResultSubGroupAllOf from './JsonAnalysisResultSubGroupAllOf';
import JsonAnalysisVisualization from './JsonAnalysisVisualization';

/**
 * The JsonAnalysisResultSubGroup model module.
 * @module model/JsonAnalysisResultSubGroup
 * @version 0.4.12
 */
class JsonAnalysisResultSubGroup {
    /**
     * Constructs a new <code>JsonAnalysisResultSubGroup</code>.
     * 
     * @alias module:model/JsonAnalysisResultSubGroup
     * @extends module:model/JsonAnalysisResult
     * @implements module:model/JsonAnalysisResult
     * @implements module:model/JsonAnalysisResultSubGroupAllOf
     */
    constructor() { 
        JsonAnalysisResult.initialize(this);JsonAnalysisResultSubGroupAllOf.initialize(this);
        JsonAnalysisResultSubGroup.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonAnalysisResultSubGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonAnalysisResultSubGroup} obj Optional instance to populate.
     * @return {module:model/JsonAnalysisResultSubGroup} The populated <code>JsonAnalysisResultSubGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonAnalysisResultSubGroup();
            JsonAnalysisResult.constructFromObject(data, obj);
            JsonAnalysisResult.constructFromObject(data, obj);
            JsonAnalysisResultSubGroupAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} filter
 */
JsonAnalysisResultSubGroup.prototype['filter'] = undefined;


// Implement JsonAnalysisResult interface:
/**
 * 
 * @member {String} rawBytes
 */
JsonAnalysisResult.prototype['rawBytes'] = undefined;
/**
 * 
 * @member {String} description
 */
JsonAnalysisResult.prototype['description'] = undefined;
/**
 * 
 * @member {Array.<module:model/JsonAnalysisResultSubGroup>} subGroups
 */
JsonAnalysisResult.prototype['subGroups'] = undefined;
/**
 * @member {module:model/JsonAnalysisVisualization} visualization
 */
JsonAnalysisResult.prototype['visualization'] = undefined;
// Implement JsonAnalysisResultSubGroupAllOf interface:
/**
 * 
 * @member {String} filter
 */
JsonAnalysisResultSubGroupAllOf.prototype['filter'] = undefined;




export default JsonAnalysisResultSubGroup;
