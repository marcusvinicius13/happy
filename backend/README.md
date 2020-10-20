# Comandos de Terminal do projeto

    yarn init -y
    yarn tsc --init (.tsconfig)
    yarn add typeorm sqlite3
    yarn add express-async-errors


# Bibliotecas

    yarn add express
    yarn add multer
    yarn add typescript -D
    yarn add ts-node-dev -D
    yarn add @types/multer -D
    yarn add @types/express -D


#   Criação de Migrations

    yarn typeorm
    yarn typeorm migration:create -n create_orphanages
    yarn typeorm migration:create -n create-images
    yarn typeorm migration:run
    yarn typeorm migration:revert

#   Software para visualizar os dados do sqlite
    Beekeeper Studio 

#   Trabalhando com Upload de imagens

    Vamos guardar as imagens em disco, porem vamos guardar o nome dos arquivos em banco de dados, 
    por isso vamos criar uma nova tabela no banco de dados, para guardar essas informaçóes.
