FROM mongo:3.5
MAINTAINER Den Elston "4665284@gmail.com"

# ...
RUN apt-get update && apt-get install -y --no-install-recommends locales
RUN sh -c "echo 'LANG="'"'"ru_RU.UTF-8"'"'"' > /etc/default/locale"
ENV LANG='ru_RU.UTF-8' LANGUAGE='ru_RU:ru' LC_ALL='ru_RU.UTF-8'
RUN localedef -i ru_RU -f UTF-8 ru_RU.UTF-8

