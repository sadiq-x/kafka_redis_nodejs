//Import the libraries
import { Kafka } from "kafkajs";
import http from "http";

//Initialize Kafka
const kafka = new Kafka({
    clientId: "kafka-a",
    brokers:["localhost:9092"]
}); 

const producer = kafka.producer() //Create kafka producer
await producer.connect() //Connect to the producer

//Stream message to send for the consumer
await producer.send({
    topic:"crypto_market",
    messages: [{value:"Topic one"}]
})

//Test the second producer sending message
await producer.send({
    topic:"crypto_markets",
    messages: [{value:"Topic two"}]
})

//Disconnect producer
await producer.disconnect()