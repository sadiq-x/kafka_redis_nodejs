//Import libraries
import http from "http";
import { Kafka } from "kafkajs";

//Variable
const PORT = 8080;

//Http create server
const app = http.createServer();

//Initialize Kafka
const kafka = new Kafka({
    clientId: "kafka-a",
    brokers: ["localhost:9092"]
})

//Create kafka consumer
const consumer_one = kafka.consumer({ groupId: "sadiq" })
const consumer_two = kafka.consumer({ groupId: "sadiqs" })

//Subscription of topic 
await consumer_one.subscribe({ topic: "crypto_market", fromBeginning: false })
await consumer_one.run({
    eachMessage: async ({message}) => {
        console.log({
            value: message.value.toString(),
        })
    },
})

//Testing a second subscription of topic 
await consumer_two.subscribe({ topic: "crypto_markets", fromBeginning: false })
await consumer_two.run({
    eachMessage: async ({message}) => {
        console.log({
            value: message.value.toString(),
        })
    },
})

//Server loading
app.listen((PORT), () => {
    console.log("Server hosted on port " + PORT)
})