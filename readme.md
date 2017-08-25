Chatler
========================

Web games platfrom

Technology
----------------
- Docker
- MongoDb 3.5
- Nodejs 8.3


Getting Started with Docker and Docker Compose for Local Development
--------------------------------------------------------------------

### Install Docker

https://docs.docker.com/installation/

### Install Docker Compose

http://docs.docker.com/compose/install/

### Install the app's

In the project ./book/dev/ (where the `Makefile` file is located), run:

##### 1. Build

```
make build_all
```

##### 2. bootstrap

```
make bootstrap_all
```

##### 3. db

```
make shell_mongoshell
```


After that we have 
--------------------------------------------------------------------

### To run any command inside the Django Docker container, simply prepend:

```
make shell_fronter
```

This will start the containers in the debug mode. And then in container run:

```
runserv.sh
```

After that, open browswer and link `localhost:8080` 




Addition commands 
--------------------------------------------------------------------

### When you need finish all containers:

```
make down
```


### For help all make commands

```
make help
```


### View the images

```
make images
```

### View the volumes

```
make volumes
```

### Clear untagged Docker containers

```
make clear
```

### To view runing Docker containers

```
make ps
```
