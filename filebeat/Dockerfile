FROM docker.elastic.co/beats/filebeat:7.4.2

COPY config/filebeat.yml /usr/share/filebeat/filebeat.yml
USER root

RUN mkdir /var/log/server
RUN chmod go-w /usr/share/filebeat/filebeat.yml
