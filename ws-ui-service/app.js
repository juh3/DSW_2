import { delay, serve } from "./deps.js";

const sockets = new Set();

const createWebSocketConnection = (request) => {
  console.log("Creating WS connection");
  const { socket, response } = Deno.upgradeWebSocket(request);

  socket.onopen = () => socket.send("Connection created");
  socket.onmessage = (e) => console.log(`Received a message: ${e.data}`);

  socket.onclose = () => {
    console.log("WS closed");
    sockets.delete(socket);
  };
  socket.onerror = (e) => console.error("WS error:", e);

  sockets.add(socket);

  return response;
};

const handleRequest = async (request) => {
  const pathname = new URL(request.url).pathname;
  console.log(pathname);

  if (pathname === "/ping") {
    await delay(2000);
    sockets.forEach((socket) => socket.send(`Pong sent at ${new Date()}`));
  } else if (pathname === "/connect") {
    return createWebSocketConnection(request);
  }

  return new Response(200);
};

serve(handleRequest, { port: 7779 });
