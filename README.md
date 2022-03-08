# AngularCrud

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Install json-server (https://github.com/typicode/json-server):

```
npm install -g json-server
```

Create a `db.json` file with some data

 ```json
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
 ```
Start JSON Server

```bash
json-server --watch db.json
```

Now if you go to [http://localhost:3000/itens/1](http://localhost:3000/itens/1), you'll get

```json
{  
    "id":1,
    "nome":"Item 1"
}
```

Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Conclusão de Paginação
- Sistema CRUD

