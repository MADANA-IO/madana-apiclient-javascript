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
import JsonV1EventSeries from './JsonV1EventSeries';
import JsonV1EventSource from './JsonV1EventSource';
import JsonV1ObjectMeta from './JsonV1ObjectMeta';
import JsonV1ObjectReference from './JsonV1ObjectReference';

/**
 * The JsonV1Event model module.
 * @module model/JsonV1Event
 * @version 0.5.0-master.47
 */
class JsonV1Event {
    /**
     * Constructs a new <code>JsonV1Event</code>.
     * 
     * @alias module:model/JsonV1Event
     */
    constructor() { 
        
        JsonV1Event.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>JsonV1Event</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JsonV1Event} obj Optional instance to populate.
     * @return {module:model/JsonV1Event} The populated <code>JsonV1Event</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new JsonV1Event();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('reason')) {
                obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = JsonV1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('reportingInstance')) {
                obj['reportingInstance'] = ApiClient.convertToType(data['reportingInstance'], 'String');
            }
            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('firstTimestamp')) {
                obj['firstTimestamp'] = ApiClient.convertToType(data['firstTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('series')) {
                obj['series'] = JsonV1EventSeries.constructFromObject(data['series']);
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('related')) {
                obj['related'] = JsonV1ObjectReference.constructFromObject(data['related']);
            }
            if (data.hasOwnProperty('lastTimestamp')) {
                obj['lastTimestamp'] = ApiClient.convertToType(data['lastTimestamp'], 'Number');
            }
            if (data.hasOwnProperty('involvedObject')) {
                obj['involvedObject'] = JsonV1ObjectReference.constructFromObject(data['involvedObject']);
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = JsonV1EventSource.constructFromObject(data['source']);
            }
            if (data.hasOwnProperty('action')) {
                obj['action'] = ApiClient.convertToType(data['action'], 'String');
            }
            if (data.hasOwnProperty('eventTime')) {
                obj['eventTime'] = ApiClient.convertToType(data['eventTime'], 'Number');
            }
            if (data.hasOwnProperty('reportingComponent')) {
                obj['reportingComponent'] = ApiClient.convertToType(data['reportingComponent'], 'String');
            }
        }
        return obj;
    }


}

/**
 * 
 * @member {String} type
 */
JsonV1Event.prototype['type'] = undefined;

/**
 * 
 * @member {String} reason
 */
JsonV1Event.prototype['reason'] = undefined;

/**
 * @member {module:model/JsonV1ObjectMeta} metadata
 */
JsonV1Event.prototype['metadata'] = undefined;

/**
 * 
 * @member {String} reportingInstance
 */
JsonV1Event.prototype['reportingInstance'] = undefined;

/**
 * 
 * @member {String} apiVersion
 */
JsonV1Event.prototype['apiVersion'] = undefined;

/**
 * 
 * @member {Number} firstTimestamp
 */
JsonV1Event.prototype['firstTimestamp'] = undefined;

/**
 * 
 * @member {String} kind
 */
JsonV1Event.prototype['kind'] = undefined;

/**
 * @member {module:model/JsonV1EventSeries} series
 */
JsonV1Event.prototype['series'] = undefined;

/**
 * 
 * @member {String} message
 */
JsonV1Event.prototype['message'] = undefined;

/**
 * 
 * @member {Number} count
 */
JsonV1Event.prototype['count'] = undefined;

/**
 * @member {module:model/JsonV1ObjectReference} related
 */
JsonV1Event.prototype['related'] = undefined;

/**
 * 
 * @member {Number} lastTimestamp
 */
JsonV1Event.prototype['lastTimestamp'] = undefined;

/**
 * @member {module:model/JsonV1ObjectReference} involvedObject
 */
JsonV1Event.prototype['involvedObject'] = undefined;

/**
 * @member {module:model/JsonV1EventSource} source
 */
JsonV1Event.prototype['source'] = undefined;

/**
 * 
 * @member {String} action
 */
JsonV1Event.prototype['action'] = undefined;

/**
 * 
 * @member {Number} eventTime
 */
JsonV1Event.prototype['eventTime'] = undefined;

/**
 * 
 * @member {String} reportingComponent
 */
JsonV1Event.prototype['reportingComponent'] = undefined;






export default JsonV1Event;

