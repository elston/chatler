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
# target: ===== misc ======== - ============================

# target: up - start all contaner in project
.PHONY: up
up:
	@docker-compose \
		-p $(PROJECT) \
		-f run.yml \
		up -d --no-build --no-recreate		

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




