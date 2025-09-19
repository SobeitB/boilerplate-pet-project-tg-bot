import { Bot } from "grammy"

const bot = new Bot(process.env.BOT_TOKEN!)

bot.command("start", (ctx) => ctx.reply("Привет! Я твой нумерологический бот 🔢"))

bot.start()
console.log("🤖 Bot is running...")
