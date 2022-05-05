
<img src="img\logoSmartSpray.png" alt="drawing" style="width:100px;"/>

# API SmartSpary


*******
## Conteúdo
 1. [Pulverização](#Pulverização)
 2. [Descontaminação](#Descontaminação)
 3. [Spray Snapshots](#SpraySnapshots)
 4. [Telemetria](#Telemetria)

*******

<div id='Pulverização'/> 

# Pulverização

Módulos de histórico e criação de um registro de uma pulverização.

> * (campo obrigatório)
>

## GET | Lista todas as pulverizações

Descrição: Retorna uma lista com todas as pulverizações realizadas anteriormente.

|Output|	Tipo|	Descrição|
| ------------- | ------------- |------------- |
|id| string|Identificação da pulverização.|
|date| string|	Data de realização da pulverização.|
|duration|	number|	Duração da pulverização em segundos.
|weatherStatus|	string|	Status do Clima durante a pulverização.|
|user|	string|	Usuário que realizou a pulverização.|
|sprayStatusIsOk|	boolean|	Informa se a pulverização foi realizada com status do pulverizador "Ok" .|

### Payload - output

Status - 200

> ```
> [
>     {
>         "id": "string",
>         "date": "Date",
>         "duration": 999,
>         "weatherStatus": "string",
>         "userName": "string",
>         "sprayStatusIsOk": true
>     }
> ]
> ```

---
## GET | Pulverização por ID

Descrição: Retorna os dados de uma pulverizações realizada anteriormente pelo ID da pulverização.

Parâmetros	Descrição

id*	Identificação da pulverização.

```
/pulverizations/{id}
```

|Output|	Tipo|	Descrição|
| ------------- | ------------- |------------- |
|id	|string	|Identificação da pulverização.|
|date|	string|	Data de realização da pulverização.|
|duration|	number|	Duração da pulverização em segundos.|
|weatherStatus|	string|	Status do Clima durante a pulverização.|
|user	|string	|Usuário que realizou a pulverização.|
|sprayStatusIsOk	|boolean	|Informa se a pulverização foi realizada com status do pulverizador "Ok" .|

### Payload - output

Status - 200

> ```
> {
>     "id": "string",
>     "date": "Date",
>     "duration": 999,
>     "weatherStatus": "string",
>     "userName": "string",
>     "sprayStatusIsOk": true
> }
> ```

---
## POST | Pulverização

Descrição: Salva os dados de uma pulverização realizada.

```
/pulverizations
```

|Input|	Tipo|	Descrição|
| ------------- | ------------- |------------- |
|date*|	string|	Data de realização da pulverização.|
|durativo*|	number|	Duração da pulverização em segundos.|
|weatherStatus|	string|	Status do Clima durante a pulverização.|
|user*|	string|	Usuário que realizou a pulverização.|
|sprayStatusIsOk*	|boolean	|Informa se a pulverização foi realizada com status do pulverizador "Ok" .|

### Payload 

> ### Input
>
> ```
> {
>     "date": "Date",
>     "duration": 999,
>     "weatherStatus": "string",
>     "userName": "string",
>     "sprayStatusIsOk": true
> }
> ```
> ### output
>
> Status - 200
>
> ```
> {
>     "id": "string",
>     "date": "Date",
>     "duration": 999,
>     "weatherStatus": "string",
>     "userName": "string",
>     "sprayStatusIsOk": true
> }
> ```

---
## GET | Enviar Mensagem

Descrição: Envia mensagem de comando para o HubIoT.

|Parâmetros	|Descrição	|Valores aceitos|
| ------------- | ------------- |------------- |
|message*	|Mensagem a ser enviada para a nuvem. |Pulverização, Limpeza.|

----
----
<div id='Descontaminação'/> 

# Descontaminação

Módulos de histórico e criação de um registro de uma pulverização.

> * (campo obrigatório)

----
----
<div id='SpraySnapshots'/> 

# Spray Snapshots
Módulos de histórico e criação de um registro de uma pulverização.

> * (campo obrigatório)

----
----
<div id='Telemetria'/> 

# Telemetria

Módulos de histórico e criação de um registro de uma pulverização.

> * (campo obrigatório)
>