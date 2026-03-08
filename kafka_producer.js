import { Kafka } from "kafkajs";
import http from "http";

const kafka = new Kafka({
    clientId: "kafka-a",
    brokers:["localhost:9092"]
}); 

const producer = kafka.producer()
await producer.connect()

await producer.send({
    topic:"crypto_market",
    messages: [{value:"Topic one"}]
})

await producer.send({
    topic:"crypto_markets",
    messages: [{value:"Topic two"}]
})
await producer.disconnect()