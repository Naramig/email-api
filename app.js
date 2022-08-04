const kafka = require("./app/kafka")
const email = require("./app/email")
const {ENV} = require("./app/helpers/state")

process.on("uncaughtException", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGUSR1", cleanup);
process.on("SIGUSR2", cleanup);

(async () => {
    try {
        checkEnv()
        email.init();
        await kafka.init();
    } catch (err) {
        console.log("Ошибка при инициализации сервиса: " + (err.stack || err));
        cleanup();
    }
})();

function cleanup() {
    kafka.close()
    setTimeout(function () {
        console.log("exiting...");
        process.exit(1);
    }, 2000);
}

function checkEnv() {
    for (const data of ENV) {
        if (data in process.env) {
        } else {
            throw new Error(`${data} env IS NOT SET`)
        }
    }
}