import { serve, serveFile } from "./deps.js";

const handleRequest = async (request) => {
  const url = new Url(request.url)
  const path = url.pathname
  const parts = path.split("/")
  console.log(url)
  if(request.method === "POST" && parts[0] === "api"){
    return
  }
};

serve(handleRequest, { port: 7778 });
