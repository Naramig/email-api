const {Kafka} = require("kafkajs");
const {sendEmail} = require("./helpers/utils");

exports.consumer = null;

exports.init = async () => {
    try {
        const kafka = new Kafka({
            "clientId": "myapp",
            "brokers": [process.env.KAFKA_URL],
            "ssl": false
        })

        exports.consumer = kafka.consumer({"groupId": "test"});
        console.log("Connection...")
        await exports.consumer.connect()
        console.log("connected")

        exports.consumer.subscribe(
            {
                "topic": "Users",
                "fromBeginning": true
            }
        );

        await run()
    } catch (e) {
        console.log("Error", e);
    }
}

async function run() {
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    await exports.consumer.run({
        "eachMessage": async result => {
            console.log("RVD Msg ", result.message.value.toString(), "On partition", result.partition)
            try {
                await sendEmail(result.message.value.toString())
            } catch (e) {
                console.log(e);
            }
            await sleep(1000)
        }
    })
}

exports.close = async () => {
    if (exports.consumer) {
        await exports.consumer.disconnect();
    }
}