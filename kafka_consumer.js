import http from "http";
import { Kafka } from "kafkajs";

const PORT = 8080;

const app = http.createServer();



const kafka = new Kafka({
    clientId: "kafka-a",
    brokers: ["localhost:9092"]
})

const consumer_one = kafka.consumer({ groupId: "sadiq" })
const consumer_two = kafka.consumer({ groupId: "sadiqs" })

await consumer_one.subscribe({ topic: "crypto_market", fromBeginning: false })
await consumer_one.run({
    eachMessage: async ({message}) => {
        console.log({
            value: message.value.toString(),
        })
    },
})


await consumer_two.subscribe({ topic: "crypto_markets", fromBeginning: false })
await consumer_two.run({
    eachMessage: async ({message}) => {
        console.log({
            value: message.value.toString(),
        })
    },
})


app.listen((PORT), () => {
    console.log("Server hosted on port " + PORT)
})