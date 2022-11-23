import { serve,} from "./deps.js";
import { grade } from "./grade.js";
import { executeQuery } from "./database.js"
import { v1 } from "https://deno.land/std@0.91.0/uuid/mod.ts";


const handleRequest = async (request) => {
  const pathname = new URL(request.url).pathname;
  console.log("first request ? ")
  console.log("- -- ---")
  console.log("pathname", pathname)
  if(request.method === "POST" && pathname === "/" ){
    const formData = await request.formData()
    const code = formData.get("code");
    const result = await grade(code);
    return new Response(JSON.stringify({ result: result }));
  }


  if(pathname === "/api/users" && request.method === "GET"){
    
    console.log("api/users")
    const user_id = v1.generate()
    console.log("generated userid", user_id)
    await executeQuery("INSERT INTO users (user_id) VALUES ($user_id)", { user_id: user_id})
    
    return new Response(JSON.stringify({user_id: user_id}))
    }
}

serve(handleRequest,{ port: 7777 });
