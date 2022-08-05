# Email-API

## Description
Сервис обрабатывает сообщения из Kafka и отправляет email.
## Requirements
* NodeJS
* Apache Kafka
* Zookeeper
## Config
* SMTP_USER - username for Simple Mail Transfer Protocol for mail.ru
* SMTP_PASS - password for Simple Mail Transfer Protocol
* KAFKA_URL - address of Kafka brokers
* KAFKA_CLIENT_ID - client id
* KAFKA_TOPIC - topic
## Local run
### Running with CLI:
```$ npm start```<br>

Be sure to pass necessary env variables or prepare your env somehow. For example create a conf-file file in your working directory and use this command to export the variables to the environment:
```
$ set -o allexport
$ source conf-file
$ set +o allexport
```
### Docker
You can run a service in docker container by running ```./restart.sh```<br>
Or you can use docker compose ([link](https://github.com/Naramig/testAppDocumentation))
