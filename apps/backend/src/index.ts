import Fastify from "fastify"
import { createClient } from "@supabase/supabase-js"

const fastify = Fastify({ logger: true })

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY! // серверный ключ
)

fastify.get("/health", async () => {
  return { status: "ok" }
})

fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log(`🚀 backend running at ${address}`)
})
