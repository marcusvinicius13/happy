# Comandos de Terminal do projeto

    yarn init -y
    yarn tsc --init (.tsconfig)
    yarn add typeorm sqlite3
    yarn add express-async-errors
    yarn add yup
    yarn add cors


# Bibliotecas

    yarn add express
    yarn add multer
    yarn add typescript -D
    yarn add ts-node-dev -D
    yarn add @types/cors -D
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

#   Adicionando o Cors

    O cors é adicionado para que aplicações que não esteja no mesmo owner que o nosso backend, não tenham acesso ao mesmo.
    Vou criar de uma maneira mais simples, apenas para acessar, 
    mas sei que pode ser configurada caso o sistema esteja em produção para que um cliente específico possa ter acesso!


#   Fim 

    Finalizado back-end da aplicação.
