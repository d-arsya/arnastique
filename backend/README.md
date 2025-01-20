# Arnastique Backend API

> Version 1.0

Arnastique Backend API description

## Path Table

| Method | Path | Description |
| :- | :- | :- |
| `PATCH` | [/api/user](#patchapiuser) |  |
| `DELETE` | [/api/user](#deleteapiuser) |  |
| `POST` | [/api/wallet](#postapiwallet) |  |
| `GET` | [/api/wallet](#getapiwallet) |  |
| `GET` | [/api/wallet/{id}](#getapiwalletid) |  |
| `PATCH` | [/api/wallet/{id}](#patchapiwalletid) |  |
| `DELETE` | [/api/wallet/{id}](#deleteapiwalletid) |  |
| `POST` | [/api/category](#postapicategory) |  |
| `GET` | [/api/category](#getapicategory) |  |
| `GET` | [/api/category/{id}](#getapicategoryid) |  |
| `PATCH` | [/api/category/{id}](#patchapicategoryid) |  |
| `DELETE` | [/api/category/{id}](#deleteapicategoryid) |  |
| `POST` | [/api/transaction](#postapitransaction) |  |
| `GET` | [/api/transaction](#getapitransaction) |  |
| `GET` | [/api/transaction/{id}](#getapitransactionid) |  |
| `PATCH` | [/api/transaction/{id}](#patchapitransactionid) |  |
| `DELETE` | [/api/transaction/{id}](#deleteapitransactionid) |  |
| `POST` | [/api/auth/register](#postapiauthregister) |  |
| `POST` | [/api/auth/login](#postapiauthlogin) |  |

## Path Details

***

### PATCH /api/user

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
  name:string,
  email:string,
  password:string,
  avatar:string,
}
```

#### Responses

- 200 

***

### DELETE /api/user

- Security  
bearer  

#### Responses

- 200 

***

### POST /api/wallet

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
  name:string
}
```

#### Responses

- 201 

***

### GET /api/wallet

- Security  
bearer  

#### Responses

- 200 

***

### GET /api/wallet/{id}

- Security  
bearer  

#### Responses

- 200 

***

### PATCH /api/wallet/{id}

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
  name:string
}
```

#### Responses

- 200 

***

### DELETE /api/wallet/{id}

- Security  
bearer  

#### Responses

- 200 

***

### POST /api/category

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
  name: string
}
```

#### Responses

- 201 

***

### GET /api/category

- Security  
bearer  

#### Responses

- 200 

***

### GET /api/category/{id}

- Security  
bearer  

#### Responses

- 200 

***

### PATCH /api/category/{id}

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
}
```

#### Responses

- 200 

***

### DELETE /api/category/{id}

- Security  
bearer  

#### Responses

- 200 

***

### POST /api/transaction

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
  name: string
  description: string
  type: enum[DEBIT, CREDIT]
  amount: number
  walletId: string
  categoryId: string
}
```

#### Responses

- 201 

***

### POST /api/transaction

- Security  
bearer  

#### Responses

- 200 

***

### POST /api/transaction/{id}

- Security  
bearer  

#### Responses

- 200 

***

### POST /api/transaction/{id}

- Security  
bearer  

#### RequestBody

- application/json

```ts
{
}
```

#### Responses

- 200 

***

### DELETE /api/transaction/{id}

- Security  
bearer  

#### Responses

- 200 

***

### POST /api/auth/register

#### RequestBody

- application/json

```ts
{
  name: string
  email: string
  password: string
}
```

#### Responses

- 201 

***

### POST /api/auth/login

#### RequestBody

- application/json

```ts
{
  email: string
  password: string
}
```

#### Responses

- 200 
