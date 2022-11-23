FROM denoland/deno:alpine-1.26.2

EXPOSE 7778

WORKDIR /app

COPY . .

CMD [ "run", "--watch", "--allow-net", "--allow-read", "--allow-env", "--no-check", "./dist/server/entry.mjs" ]