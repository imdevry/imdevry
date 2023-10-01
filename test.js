import os from "os"

const interfaces = os.networkInterfaces()
const wifi = interfaces['Wi-Fi']
const ipv4 = wifi[3].address
console.log(ipv4)