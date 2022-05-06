
# API SmartSpary
<img src="img\logoSmartSpray.png" alt="drawing" style="width:100px;"/>


*******
## Conteúdo
 0. [Introdução](#Introducao)
 1. [Pulverização](#Pulverização)
 2. [Descontaminação](#Descontaminacao)
 3. [Spray Snapshots](#SpraySnapshots)
 4. [Telemetria](#Telemetria)

*******
<div id='Introducao'/> 

# Introdução


> Base URL
>~~~
> https://smart-spray-api.eastus.cloudapp.azure.com
>~~~


>  \* (campo obrigatório)
>
  
---
---
<div id='Pulverização'/> 

# Pulverização

Módulos de histórico e criação de um registro de uma pulverização.

|Output|	Tipo|	Descrição|
| ------ | ------ | ------ |
|_id|	string|	Identificação do registro.|
|deviceId|	string|	Identificação do dispositivo.|
|timeInSeconds|	number|	Duração da pulverização em segundos.|
|weather|	object|	Dados do clima.|
|temperature|	number|	Temperatura do clima.|
|windDirection	|string	|Direção do vento .|
|windVelocity|	number|	Velocidade do vento.|
|humidity|	number|	Umidade do ar.|
|condition|	string|	Usuário que realizou a pulverização.|
|pressure|	number|	Pressão atmosférica.|
|sensation|	string|	Sensação climática.|
|createdAt|	string|	Data da execução do processo.|

---
## GET | Pulverization Health

Descrição: Retorna os dados da ultima leitura do status do pulverizador e clima.

|Parâmetros|Descrição|
|------|------|
|id*|Identificação do device id.|
|city*|Nome da cidade para consulta do clima.|
|state*|Sigla do estado para consulta do clima.|

```
/pulverizations/health/:id?city=São Bernardo do Campo&state=SP
```

### Payload 
> output
> 
> Status - 200
> ```
> {
>      "deviceId": "string",
>      "isClean": false,
>      "nozzleStatus": "ok",
>      "ph": 21.440001,,
>      "weather": {
>          "temperature": 0,
>          "windDirection": "string",
>          "windVelocity": 0,
>          "humidity": 0,
>          "condition": "string",
>          "pressure": 0,
>          "sensation": "string"
>      }
> }
> ```

---

## GET | List Pulverizations

Descrição: Retorna uma lista com todas as pulverizações realizadas anteriormente.

```
/pulverizations
```

### Payload - output

Status - 200

> ```
> [
>     {
>         "deviceId": "string",
>         "timeInSeconds": 0,
>         "weather": {
>             "temperature": 0,
>             "windDirection": "string",
>             "windVelocity": 0,
>             "humidity": 0,
>             "condition": "string",
>             "pressure": 0,
>             "sensation": "string"
>         },
>         "createdAt": "2022-05-05T01:28:20.760Z"
>     }
> ]
> ```

---
## GET | Show Pulverizations

Descrição: Retorna os dados de uma pulverizações realizada anteriormente pelo ID da pulverização.

|Parâmetros|Descrição|
|------|------|
|id*|Identificação da pulverização.|

```
/pulverizations/:id
```

### Payload 
> output
> 
> Status - 200
> ```
> {
>      "deviceId": "string",
>      "timeInSeconds": 0,
>      "weather": {
>          "temperature": 0,
>          "windDirection": "string",
>          "windVelocity": 0,
>          "humidity": 0,
>          "condition": "string",
>          "pressure": 0,
>          "sensation": "string"
>      },
>      "createdAt": "2022-05-05T02:37:08.708Z",
>      "_id": "627338508df9bb2f9d256404",
>      "__v": 0
> }
> ```

---
## POST | Create Pulverization

Descrição: Salva os dados de uma pulverização realizada.

```
/pulverizations
```

|Input|	Tipo|	Descrição|
| ------ | ------ |------ |
|deviceId|	string|	Identificação do dispositivo.|
|timeInSeconds|	number|	Duração da pulverização em segundos.|
|weather|	object|	Dados do clima.|
|temperature|	number|	Temperatura do clima.|
|windDirection	|string	|Direção do vento .|
|windVelocity|	number|	Velocidade do vento.|
|humidity|	number|	Umidade do ar.|
|condition|	string|	Usuário que realizou a pulverização.|
|pressure|	number|	Pressão atmosférica.|
|sensation|	string|	Sensação climática.|
|createdAt|	string|	Data da execução do processo.|

### Payload 

> ### Input
>
> ```
> {
>     "deviceId": "string",
>     "timeInSeconds": 0,
>     "weather": {
>         "temperature": 0,
>         "windDirection": "string",
>         "windVelocity": 0,
>         "humidity": 0,
>         "condition": "string",
>         "pressure": 0,
>         "sensation": "string"
>     },
>     "createdAt": "2022-05-05T01:28:20.760Z"
> }
> ```
> ### output
>
> Status - 200
>
> ```
> {
>      "deviceId": "string",
>      "timeInSeconds": 0,
>      "weather": {
>          "temperature": 0,
>          "windDirection": "string",
>          "windVelocity": 0,
>          "humidity": 0,
>          "condition": "string",
>          "pressure": 0,
>          "sensation": "string"
>      },
>      "createdAt": "2022-05-05T02:37:08.708Z",
>      "_id": "627338508df9bb2f9d256404",
>      "__v": 0
> }
> ```

---
## POST | Start Pulverization

Descrição: Rota que envia o comando para o dispositivo iniciar a pulverização.

```
/pulverizations/start
```

### Payload 
> ### output
>
> Status - 200
>
> ```
> {
>      "message": "Pulverization process has been successfully started"
> }
> ```

----
----
<div id='Descontaminacao'/> 

# Descontaminação

Módulo de controle, histórico e criação do registro de uma descontaminação.

|Output|	Tipo|	Descrição|
| ------ | ------ ------ |
|_id|	string|	Identificação do registro.|
|deviceId|	string|	Identificação do dispositivo.|
|timeInSeconds|	number|	Duração da do processo de descontaminação em segundos.|
|createdAt|	string|	Data da realização do processo.|

## GET | List Decontaminations

Descrição: lista os dados do processo de descontaminação salvos.

```
/decontaminations
```

### Payload 
> ### output
>
> Status - 200
>
> ```
> [
>      {
>           "_id": "624709422a745a7480fc4e56",
>           "deviceId": "limpeza-esp32",
>           "timeInSeconds": 300,
>           "createdAt": "2022-04-01T14:16:34.262Z",
>           "__v": 0
>      }
> ]

---
## GET | Show Decontamination

Descrição: Retorna da dados de uma descontaminação específica.

|Parâmetros|Descrição|
|------|------|
|id*|Identificação da descontaminação.|

```
/decontaminations/:id
```

### Payload 
> ### output
>
> Status - 200
>
> ```
> {
>      "_id": "624709422a745a7480fc4e56",
>      "deviceId": "limpeza-esp32",
>      "timeInSeconds": 300,
>      "createdAt": "2022-04-01T14:16:34.262Z",
>       "__v": 0
> }
> ```

---

## POST | Stard Decontamination

Descrição: Rota que envia o comando para o dispositivo iniciar a descontaminação.

```
/decontaminations/start
```

### Payload 
> ### output
>
> Status - 200
>
> ```
> {
>      "message": "Decontamination process has been successfully started"
> }
> ```
---

## POST | Create Decontamination

Descrição: Salva os dados de uma descontaminação (limpeza) realizada.

```
/decontaminations
```

|Input|	Tipo|	Descrição|
| ------ | ------ ------ |
|deviceId|	string|	Identificação do dispositivo.|
|timeInSeconds|	number|	Duração da do processo de descontaminação em segundos.|
|createdAt|	string|	Data da realização do processo.|

### Payload 

> ### Input
>
> ```
> {
>     "deviceId": "string",
>     "timeInSeconds": 0,
>     "createdAt": "2022-05-05T01:28:20.760Z"
> }
> ```
> ### output
>
> Status - 200
>
> ```
> {
>      "deviceId": "string",
>      "timeInSeconds": 0,
>      "cycle": "pulverization",
>      "createdAt": "2022-05-05T01:28:20.760Z",
>      "_id": "627328308df9bb2f9d256400",
>      "__v": 0
> }
> ```

----
----
<div id='SpraySnapshots'/> 

# Spray Snapshots
Módulo de histórico e criação de um registro de um processo (limpeza ou pulverização).

|Output|	Tipo|	Descrição|
| ------ | ------ ------ |
|_id	|string	|Identificação da leitura.|
|deviceId|	string|	Identificação do dispositivo que realizou a leitura.|
|isClean|	boolean|	Informa de o equipamento está limpo.|
|cycle|	string|	Processo executado.|
|ph	|number	|Leitura do pH.|
|tb	|number	|Leitura da turbidez .|
|createdAt|string|Data da leitura|

## GET | List Snapshots

Descrição: lista os snapshots salvos.

```
/spray-snapshots
```

### Payload 
> ### output
>
> Status - 200
>
> ```
> [
>      {
>           "deviceId": "string",
>           "ph": 0,
>           "tb": 0,
>           "isClean": false,
>           "nozzleStatus": "ok",
>           "cycle": "pulverization",
>           "createdAt": "2022-05-05T01:28:20.760Z",
>           "_id": "627328308df9bb2f9d256400",
>           "__v": 0
>      }
> ]

---
## GET | Show Snapshot

Descrição: Retorna da dados de um snapshot específico.

|Parâmetros|Descrição|
|------|------|
|id*|Identificação do snapshot.|

```
/spray-snapshots/:id
```

### Payload 
> ### output
>
> Status - 200
>
> ```
> {
>      "deviceId": "string",
>      "ph": 0,
>      "tb": 0,
>      "isClean": false,
>      "nozzleStatus": "ok",
>      "cycle": "pulverization",
>      "createdAt": "2022-05-05T01:28:20.760Z",
>      "_id": "627328308df9bb2f9d256400",
>      "__v": 0
> }
> ``

---
## POST | Create Snapshot

Descrição: Salva os dados de uma pulverização realizada.

```
/spray-snapshots
````

|Input|	Tipo|	Descrição|
| ------ | ------ ------ |
|deviceId|	string|	Identificador do dispositivo.|
|ph	|number	|Leitura do pH.|
|tb	|number	|Leitura da turbidez .|
|isClean|	boolean|	Informa se está limpo.|
|nozzleStatus	|boolean	| Informa o status dos bicos do pulverizador.|
|cycle|	string|	Processo executado.|
|createdAt|	string|	Data da execução do processo.|

### Payload 

> ### Input
>
> ```
> {
>     "deviceId": "string",
>     "ph": 0,
>     "tb": 0,
>     "isClean": false,
>     "nozzleStatus": "ok",
>     "cycle": "pulverization",
>     "createdAt": "2022-05-05T01:28:20.760Z"
> }
> ```
> ### output
>
> Status - 200
>
> ```
> {
>      "deviceId": "string",
>      "ph": 0,
>      "tb": 0,
>      "isClean": false,
>      "nozzleStatus": "ok",
>      "cycle": "pulverization",
>      "createdAt": "2022-05-05T01:28:20.760Z",
>      "_id": "627328308df9bb2f9d256400",
>      "__v": 0
> }
> ```

----
----
<div id='Telemetria'/> 

# Telemetria

Módulos de consulta aos dados dos sensores durante os processos.


## GET | Lista pH e Turbidez

Descrição: Retorna uma lista das leituras de pH e durbidez durante os processos.


```
/telemetries/ph-turbidity
```

|Output|	Tipo|	Descrição|
| ------ | ------ ------ |
|_id	|string	|Identificação da leitura.|
|deviceId|	string|	Identificação do dispositivo que realizou a leitura.|
|isClean|	boolean|	Informa de o equipamento está limpo.|
|isPulverizing|	boolean|	Status do processo de pulverização.|
|ph	|number	|Leitura do pH.|
|tb	|number	|Leitura da turbidez .|
|createdAt|string|Data da leitura|


> ### output
>
> Status - 200
>
> ```
> [
>     {
>        "_id": "626de2590475a6bc66d67461",
>        "deviceId": "P01D01",
>        "isClean": false,
>        "isPulverizing": true,
>        "ph": 21.440001,
>        "tb": 3000,
>        "createdAt": "2022-05-01T01:28:57.234Z"
>     }
> ]
> ```

----
## GET | Lista Telemetria da Vazão

Descrição: Retorna uma lista das leituras de pH e durbidez durante os processos.


```
/telemetries/flow-rate
```

|Output|	Tipo|	Descrição|
| ------ | ------ |------ |
|_id	|string	|Identificação da leitura.|
|deviceId |string |	Identificação do dispositivo que realizou a leitura.|
|isPulverizing |boolean |	Status do processo de pulverização.|
|sensor1 |number|Leitura no sensor 1.|
|sensor2 |number|Leitura no sensor 2.|
|sensor3 |number|Leitura no sensor 3|
|sector |string|Setor da leitura.|
|quantityObstructed	|number	|Quantidade de bicos obstruidos.|
|createdAt |string |Data da leitura|


> ### output
>
> Status - 200
>
> ```
> [
>     {
>        "_id": "62609d27ffbd2a364aace7ce",
>        "deviceId": "P01D02",
>        "isPulverizing": true,
>        "sensor1": 2.86,
>        "sensor2": 0.36,
>        "sensor3": 2.5,
>        "status": "ok",
>        "sector": "null",
>        "quantityObstructed": 0,
>        "createdAt": "2022-05-01T01:28:57.234Z"
>     }
> ]
> ```
