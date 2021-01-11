# MadanaApiclient.JsonKubernetesEnclave

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enclaveIdent** | **String** |  | [optional] 
**portMapping** | **{String: String}** |  | [optional] 
**wireguardPublicKey** | **String** |  | [optional] 
**signerIdent** | **String** |  | [optional] 
**internalIdent** | **String** |  | [optional] 
**internalRemoteControlServer** | **String** |  | [optional] 
**ports** | [**[JsonEnclavePort]**](JsonEnclavePort.md) |  | [optional] 
**publicIdent** | **String** |  | [optional] 
**enclaveInputstream** | **Object** |  | [optional] 
**kubernetesEnclave** | [**JsonKubernetesEnclave**](JsonKubernetesEnclave.md) |  | [optional] 
**internalWireguardServer** | **String** |  | [optional] 
**internalAttesationServer** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**wgInterface** | [**JsonWireguardInterface**](JsonWireguardInterface.md) |  | [optional] 
**consoleOutput** | **String** |  | [optional] 
**remoteControlServer** | **String** |  | [optional] 
**startupCMD** | **String** |  | [optional] 
**attestationServer** | **String** |  | [optional] 
**endingTime** | **String** |  | [optional] 
**process** | [**JsonProcess**](JsonProcess.md) |  | [optional] 
**startupTime** | **String** |  | [optional] 
**environment** | [**JsonEnvironment**](JsonEnvironment.md) |  | [optional] 
**wireguardServer** | **String** |  | [optional] 
**wireguardPort** | **Number** |  | [optional] 
**debugInfo** | **String** |  | [optional] 
**isUsingInitContainer** | **Boolean** |  | [optional] 
**enclavePodEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**podPhase** | **String** |  | [optional] 
**remoteControlIP** | **String** |  | [optional] 
**enclaveReplicaSetEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**attestationPort** | **Number** |  | [optional] 
**enclaveDeploymentEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 


