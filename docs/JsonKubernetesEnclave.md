# MadanaApiclient.JsonKubernetesEnclave

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**wgInterface** | [**JsonWireguardInterface**](JsonWireguardInterface.md) |  | [optional] 
**environment** | [**JsonEnvironment**](JsonEnvironment.md) |  | [optional] 
**startupCMD** | **String** |  | [optional] 
**internalRemoteControlServer** | **String** |  | [optional] 
**consoleOutput** | **String** |  | [optional] 
**endingTime** | **String** |  | [optional] 
**startupTime** | **String** |  | [optional] 
**remoteControlServer** | **String** |  | [optional] 
**ports** | [**[JsonEnclavePort]**](JsonEnclavePort.md) |  | [optional] 
**kubernetesEnclave** | [**JsonKubernetesEnclave**](JsonKubernetesEnclave.md) |  | [optional] 
**wireguardServer** | **String** |  | [optional] 
**internalWireguardServer** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**wireguardPublicKey** | **String** |  | [optional] 
**enclaveIdent** | **String** |  | [optional] 
**internalIdent** | **String** |  | [optional] 
**publicIdent** | **String** |  | [optional] 
**process** | [**JsonProcess**](JsonProcess.md) |  | [optional] 
**internalAttesationServer** | **String** |  | [optional] 
**signerIdent** | **String** |  | [optional] 
**enclaveInputstream** | **Object** |  | [optional] 
**attestationServer** | **String** |  | [optional] 
**portMapping** | **{String: String}** |  | [optional] 
**enclaveReplicaSetEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**wireguardPort** | **Number** |  | [optional] 
**attestationPort** | **Number** |  | [optional] 
**enclaveDeploymentEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**enclavePodEvents** | [**JsonV1EventList**](JsonV1EventList.md) |  | [optional] 
**isUsingInitContainer** | **Boolean** |  | [optional] 
**podPhase** | **String** |  | [optional] 
**debugInfo** | **String** |  | [optional] 
**remoteControlIP** | **String** |  | [optional] 


