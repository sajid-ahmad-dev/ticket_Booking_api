=> to setup the ORM sequelize => npm i sequelize
=> then do => npm i sql2, mariadb (whichever db you
want to use install it as a driver)

second setup is sequelize cli

npx sequelize init => it will create folders like models, migrations, seeders

and in config folder it created the config.json => this file cannot go to github , so add it in .gitignore

{
"development": {
"username": "root", username here
"password": null, password as string
"database": "database_development",
"host": "127.0.0.1",
"dialect": "mysql" => here you can mention which database you are using
},
"test": {
"username": "root",
"password": null,
"database": "database_test",
"host": "127.0.0.1",
"dialect": "mysql"
},
"production": {
"username": "root",
"password": null,
"database": "database_production",
"host": "127.0.0.1",
"dialect": "mysql"
}
}
