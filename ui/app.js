import { serve, serveFile } from "./deps.js";

const handleRequest = async (request) => {
  const url = new Url(request.url)
  const path = url.pathname
  const parts = path.split("/")
  console.log(url)
  
};

serve(handleRequest, { port: 7778 });
