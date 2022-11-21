import { serve } from "./deps.js";
import { grade } from "./grade.js";
import { executeQuery } from "./database.js"
const handleRequest = async (request) => {
  if(request.method === "POST"){
    const formData = await request.formData()
    const code = formData.get("code");
    const result = await grade(code);

    return new Response(JSON.stringify({ result: result }));
  }
  if(request.method === "GET"){
    const exercises = await executeQuery("SELECT * FROM exercises")
    const ex_rows = exercises.rows
    return new Response(JSON.stringify({ex_rows}))
  }
};

serve(handleRequest, { port: 7777 });
