import { serve } from "./deps";

const handleRequest = async(request) => {
  const pathname = new URL(request.url).pathname
  console.log(pathname)

  if(request.method === "GET" && pathname === "/users"){
    console.log("trying to get user")
  }
  
  if(request.method === "GET" && pathname === "/users"){
    console.log("trying to get user")
  }
}


serve(handleRequest, { port: 7779})