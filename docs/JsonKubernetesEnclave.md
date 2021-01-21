# MadanaApiclient.JsonKubernetesEnclave

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**signerIdent** | **String** |  | [optional] 
**attestationServer** | **String** |  | [optional] 
**portMapping** | **{String: String}** |  | [optional] 
**status** | **String** |  | [optional] 
**environment** | [**JsonEnvironment**](JsonEnvironment.md) |  | [optional] 
**startupCMD** | **String** |  | [optional] 
**ports** | [**[JsonEnclavePort]**](JsonEnclavePort.md) |  | [optional] 
**internalIdent** | **String** |  | [optional] 
**wgInterface** | [**JsonWireguardInterface**](JsonWireguardInterface.md) |  | [optional] 
**wireguardPublicKey** | **String** |  | [optional] 
**publicIdent** | **String** |  | [optional] 
**process** | [**JsonProcess**](JsonProcess.md) |  | [optional] 
**wireguardServer** | **String** |  | [optional] 
**internalRemoteControlServer** | **String** |  | [optional] 
**endingTime** | **String** |  | [optional] 
**consoleOutput** | **String** |  | [optional] 
**enclaveInputstream** | **Object** |  | [optional] 
**startupTime** | **String** |  | [optional] 
**enclaveIdent** | **String** |  | [optional] 
**internalWireguardServer** | **String** |  | [optional] 
**internalAttesationServer** | **String** |  | [optional] 
**remoteControlServer** | **String** |  | [optional] 
**kubernetesEnclave** | [**JsonKubernetesEnclave**](JsonKubernetesEnclave.md) |  | [optional] 
**isUsingInitContainer** | **Boolean** |  | [optional] 
**podPhase** | **String** |  | [optional] 
**debugInfo** | **String** |  | [optional] 
**enclaveDeploymentEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**enclavePodEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**wireguardPort** | **Number** |  | [optional] 
**attestationPort** | **Number** |  | [optional] 
**enclaveReplicaSetEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**remoteControlIP** | **String** |  | [optional] 


