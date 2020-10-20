# Comandos de Terminal do projeto

    yarn init -y
    yarn tsc --init (.tsconfig)
    yarn add typeorm sqlite3


# Bibliotecas

    yarn add express
    yarn add @types/express -D
    yarn add typescript -D
    yarn add ts-node-dev -D


#   Criação de Migrations

    yarn typeorm
    yarn typeorm migration:create -n create_orphanages
    yarn typeorm migration:run
    yarn typeorm migration:revert

#   Software para visualizar os dados do sqlite
    Beekeeper Studio 