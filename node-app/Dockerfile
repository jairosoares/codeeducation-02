# docker run --rm -t -v $(pwd)/:/usr/src/app -p 3000:3000 node:15 bash
#
# npm install express --save
#
# docker build -t hello-express .
# docker run -p 3000:3000 hello-express
#
# docker network create -d bridge node-network
# docker network rm node-network
# docker network ls
# 
# docker push jairosoares/hello-express     #PUBLICANDO NO DockerHub
# docker images | grep nome-tal             #FILTRA DE BUSCA DE IMAGEM
# docker rm -f nome-container               #MATANDO CONTAINER

FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

# if production (faster and reliable):
# RUN npm ci --only=production
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]