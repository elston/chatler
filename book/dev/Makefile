export PROJECT = chatler
export NODE_ENV = dev

# ...
export API_URL_WEBPACK = http://backer:8000
export API_URL_NGINX = http://backer:8000
# ..
export CHAT_URL_WEBPACK = ws://chat:8000
export CHAT_URL_NGINX = http://chat:8000

# ....
export DB_NAME = chatler
export DB_USER = usermaster
export DB_PASSWORD = passmaster
export DB_ADMIN_USER = adminmaster
export DB_ADMIN_PASSWORD = passmaster

# ...
include ../../security.sh
export EMAIL_USER = $(GMAIL_COM_USER)
export EMAIL_PASS = $(GMAIL_COM_PASS)

# target:
# target: all - Default target. Does nothing
.PHONY: all
all:
	@echo "Hello $(LOGNAME), nothing to do by default"


# target: help - Display callable targets
.PHONY: help
help:
	@egrep "^# target:|-\ .+" [Mm]akefile --color=auto|column -t -s -



# target:
# target: ===== pull ======== - ============================

# target: pull_mongo - pull mongodb images
.PHONY: pull_mongo
pull_mongo:
	@echo "---> pull mongo:3.5"
	@docker pull mongo:3.5

# target: pull_node - pull node images
.PHONY: pull_node
pull_node:
	@echo "---> pull node:8.3-slim"
	@docker pull node:8.3-slim

# target: pull_nginx - pull nginx images
.PHONY: pull_nginx
pull_nginx:
	@echo "---> pull nginx:1.13.5-alpine"	
	@docker pull nginx:1.13.5-alpine

# target: pull_all - pull base images
.PHONY: pull_all
pull_all:
	@make pull_mongo
	@make pull_node
	@make pull_nginx


# target:
# target: ===== build ======= - ============================

# target: build_storage - build storage image
.PHONY: build_storage
build_storage:
	@echo "---> build storage"
	@docker-compose \
		-p $(PROJECT) \
		-f build.yml \
		build storage


# target: build_fronter - build fronter image
.PHONY: build_fronter
build_fronter:
	@echo "---> build fronter"	
	@docker-compose \
		-p $(PROJECT) \
		-f build.yml \
		build \
		fronter

# target: build_backer - build backer image
.PHONY: build_backer
build_backer:
	@echo "---> build backer"	
	@docker-compose \
		-p $(PROJECT) \
		-f build.yml \
		build \
		backer

# target: build_chat - build chat image
.PHONY: build_chat
build_chat:
	@echo "---> build chat"	
	@docker-compose \
		-p $(PROJECT) \
		-f build.yml \
		build \
		chat

# target: build_all - build all images
.PHONY: build_all
build_all:
	@make build_storage
	@make build_fronter
	@make build_backer
	@make build_chat	


# target:
# target: ===== bootstrap === - ============================

# target: bootstrap_storage - bootstrap storage contaner
.PHONY: bootstrap_storage
bootstrap_storage:
	@echo "---> bootstrap storage"	
	@docker-compose \
		-p $(PROJECT) \
		-f bootstrap.yml \
		run \
		-d \
		storage


# target: bootstrap_fronter - bootstrap fronter contaner
.PHONY: bootstrap_fronter
bootstrap_fronter:
	@echo "---> bootstrap fronter"	
	@docker-compose \
		-p $(PROJECT) \
		-f bootstrap.yml \
		run \
		--rm \
		fronter


# target: bootstrap_backer - bootstrap backer contaner
.PHONY: bootstrap_backer
bootstrap_backer:
	@echo "---> bootstrap backer"	
	@docker-compose \
		-p $(PROJECT) \
		-f bootstrap.yml \
		run \
		--rm \
		backer


# target: bootstrap_chat - bootstrap chat contaner
.PHONY: bootstrap_chat
bootstrap_chat:
	@echo "---> bootstrap chat"	
	@docker-compose \
		-p $(PROJECT) \
		-f bootstrap.yml \
		run \
		--rm \
		chat				


# target: bootstrap_all - bootstrap all images
.PHONY: bootstrap_all
bootstrap_all:
	@make bootstrap_storage
	@make bootstrap_fronter
	@make bootstrap_backer	



# target:
# target: ===== shell ======= - ============================

# target: shell_router - shell router container
.PHONY: shell_router
shell_router:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		-f shell.yml \
		run \
		--rm \
		--service-ports \
		--name $(PROJECT)_router_1 \
		router

# target: shell_mongoshell - shell mongoshell container
.PHONY: shell_mongoshell
shell_mongoshell:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		run \
		--rm \
		--name $(PROJECT)_mongoshell_1 \
		mongoshell


# target: shell_fronter - shell fronter container
.PHONY: shell_fronter
shell_fronter:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		-f shell.yml \
		run \
		--rm \
		--service-ports \
		--name $(PROJECT)_fronter_1 \
		fronter



# target: shell_backer - shell backer container
.PHONY: shell_backer
shell_backer:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		run \
		--rm \
		--service-ports \
		--name $(PROJECT)_backer_1 \
		backer


# target: shell_chat - shell chat container
.PHONY: shell_chat
shell_chat:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		run \
		--rm \
		--service-ports \
		--name $(PROJECT)_chat_1 \
		chat		

# target:
# target: ===== misc ======== - ============================

# target: down - shutdown all contaner in project
.PHONY: down
down:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		down	


# target: ps - watch all process all contaner in project
.PHONY: ps
ps:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		ps

# target: clear - clear untuged images in project
.PHONY: clear
clear:
	@../../scripts/clear_untagged.sh


# target: images - show all images in project
.PHONY: images
images:
	@docker images |grep $(PROJECT)


# target: volumes - show all volumes in project
.PHONY: volumes
volumes:
	@docker volume ls |grep $(PROJECT)


# target: rmi - remove all images in project
.PHONY: rmi
rmi:
	@docker rmi `docker images |grep $(PROJECT) |xargs -L1 | awk '{print $1}'`


# target: rmvol - remove all volumes in project
.PHONY: rmvol
rmvol:
	@docker volume rm `docker volume ls |grep $(PROJECT) |xargs -L1 | awk "{print $2}"`
# ...




