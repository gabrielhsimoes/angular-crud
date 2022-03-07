# AngularCrud

Acesse: https://www.youtube.com/watch?v=wNx44Hdvp1s&t=7s para dar continuidade ao projeto

## Sistema CRUD Módulo 1

Video: 23:44

![image](https://user-images.githubusercontent.com/72312920/156959297-4d17b0dc-9acb-4e5e-984d-15a9e9b9d2e6.png)

## Instalação da Aplicação

Antes de usar o git clone para a sua maquina local, criar uma pasta para poder adicionaar o db.json e rodar o http://localhost:3000/itens

npm install -g json-server - PARA INSTALAR O API Fake

Create a db.json file with some data

{  
	"itens":[  
	{  
		"id":1,
		"nome":"Item 1"
	},
	{  
		"id":2,
		"nome":"Item 2"
	}
	]
}

Depois rode a aplicação:
json-server --watch db.json
