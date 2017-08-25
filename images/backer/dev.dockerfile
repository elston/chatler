FROM node:8.3-slim

# ...
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    locales    

# ...
RUN sh -c "echo 'LANG="'"'"ru_RU.UTF-8"'"'"' > /etc/default/locale"
ENV LANG='ru_RU.UTF-8' LANGUAGE='ru_RU:ru' LC_ALL='ru_RU.UTF-8'
RUN localedef -i ru_RU -f UTF-8 ru_RU.UTF-8

# ...
ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone \
    && dpkg-reconfigure -f noninteractive tzdata


