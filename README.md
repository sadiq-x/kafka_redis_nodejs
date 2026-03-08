# Server Kafka 
## Build and Run Docker Image for create a Kafka Server
Install and run Docker Cli.
```
$ docker pull apache/kafka:4.2.0
$ docker pull apache/kafka:latest
$ docker run -p 9092:9092 apache/kafka:4.2.0
```

## Kafka server
Run the server cli where kafka is installed and configured.
* Create kafka topics.
```
./kafka-topics.sh --create --topic "crypto_markets" --bootstrap-server localhost:9092
```
* List kafka topics.
```
./kafka-topics.sh --list --bootstrap-server localhost:9092
```
* Console consumer kafka topics.
```
./kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic "crypto_market"
```
----

# Project build
* Install and initialize the npm packages.
``` 
> npm install
``` 
## Npm Packages:
1. kafkajs
2. redis



