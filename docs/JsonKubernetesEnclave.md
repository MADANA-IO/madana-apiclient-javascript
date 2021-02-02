# MadanaApiclient.JsonKubernetesEnclave

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startupCMD** | **String** |  | [optional] 
**enclaveInputstream** | **Object** |  | [optional] 
**remoteControlServer** | **String** |  | [optional] 
**internalIdent** | **String** |  | [optional] 
**consoleOutput** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**internalAttesationServer** | **String** |  | [optional] 
**wgInterface** | [**JsonWireguardInterface**](JsonWireguardInterface.md) |  | [optional] 
**internalWireguardServer** | **String** |  | [optional] 
**startupTime** | **String** |  | [optional] 
**internalRemoteControlServer** | **String** |  | [optional] 
**ports** | [**[JsonEnclavePort]**](JsonEnclavePort.md) |  | [optional] 
**portMapping** | **{String: String}** |  | [optional] 
**signerIdent** | **String** |  | [optional] 
**environment** | [**JsonEnvironment**](JsonEnvironment.md) |  | [optional] 
**wireguardPublicKey** | **String** |  | [optional] 
**endingTime** | **String** |  | [optional] 
**kubernetesEnclave** | [**JsonKubernetesEnclave**](JsonKubernetesEnclave.md) |  | [optional] 
**enclaveIdent** | **String** |  | [optional] 
**process** | [**JsonProcess**](JsonProcess.md) |  | [optional] 
**publicIdent** | **String** |  | [optional] 
**attestationServer** | **String** |  | [optional] 
**wireguardServer** | **String** |  | [optional] 
**wireguardPort** | **Number** |  | [optional] 
**attestationPort** | **Number** |  | [optional] 
**isUsingInitContainer** | **Boolean** |  | [optional] 
**debugInfo** | **String** |  | [optional] 
**enclaveDeploymentEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**remoteControlIP** | **String** |  | [optional] 
**enclavePodEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**podPhase** | **String** |  | [optional] 
**enclaveReplicaSetEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 


