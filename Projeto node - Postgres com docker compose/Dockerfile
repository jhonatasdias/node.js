FROM postgres:latest
LABEL metadadosdisciplinas Version=0.0.1
COPY database.sql ./db

# Define as variaveis de ambientes
ENV POSTGRES_USER=myuser
ENV POSTGRES_PASSWORD=mypassword

# Arguemento para personalizar o nome do banco de dados
ARG DB_NAME=mydatabase

# Criação do banco de dados
RUN /etc/init.d/postgresql start && \
    psql --command "CREATE DATABASE $DB_NAME" && \
    /etc/init.d/postgresql stop

# Definição do banco de dados a ser usado
## This optional environment variable can be used to define a different name for the default database that is created when the image is first started. If it is not specified, then the value of POSTGRES_USER will be used.
ENV POSTGRES_DB=$DB_NAME