
import { serve } from "./deps.js"

const handleRequest = async(request) => {
  const pathname = new URL(request.url).pathname;
  if(request.method === "POST" && pathname === "/queue"){
    console.log("grading service HELLo")
    console.log("------------")
    console.log(request)
    console.log("------------")
    console.log(await request.body())
    const body = await request.body({type: "json"})
    console.log("body", body)
  }
  return new Response(JSON.stringify("mnad"))
}

serve(handleRequest, { port: 7779 })
