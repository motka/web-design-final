# web-design-final 
Project structure
This mono-repo contains 2 projects:

backend: Backend NestJS (NodeJS) project. 
ui: User Interface Angular project.
 
This project was generated using Nx. Visit the Nx Documentation to learn more.

How-to run this application
To run one of the projects, execute the following command:

ng serve --project {project-name}
(shorter version works as well: ng serve {project-name})
To run the end to end application locally (UI to Backend) with the backend mock data, 
run the following commands in order in different terminal windows:

ng serve --project ui
ng serve --project backend
ng serve --project backend-mock
 
Lint check the UI application

Run: ng lint --project ui
Unit test the UI application 
To run the unit tests continuously, run: ng test --watch --project ui
To run the unit tests once, run: ng test ui
Track the unit test code coverage with the command: ng test --no-watch --code-coverage --project ui then open ./coverage/index.html in your browser
 
Generate code for the UI application with the following commands:

Generate module my-module: ng g m my-module --project=ui
Generate page component my-home-page in module home: ng g c home/pages/my-home-page --project=ui --module=home
Generate component my-component in module home: ng g c home/components/my-component --project=ui --module=home
Generate model/interface my-model in folder home/models: ng g i home/models/my-model --project=ui
Generate service my-home-service in folder home/services: ng g s home/services/my-home-service --project=ui
Backend Dev
Run the Backend application with the following commands:

Prior to running the Backend application, MongoDB must be installed and seeded properly
Download and install MongoDB (see doc here)
Run MongoDB: mongod
Seed the MongoDB by running the following commands (execution order matters for the last 3 commands - run top to bottom):
npm run script_name:seed
 
Generate code for the Backend application with the following commands:

Generate module my-module: nest g mo my-module
Generate controller my-controller in module my-module and folder my-module/controllers: nest g co my-module/controllers/my-controller --flat
Generate resolver my-resolver in module my-module and folder my-module/resolvers: nest g r my-module/resolvers/my-resolver --flat
Generate service my-home-service in module my-module and folder my-module/services: nest g s my-module/services/my-service --flat
Generate TLS private key and public certificate

Generate private key run: $ openssl genrsa -out private-key.pem 1024
Create a certificate signing request file using private key run: $ openssl req -new -key private-key.pem -out csr.pem
Generate public cert using private key run: $ openssl x509 -req -in csr.pem -signkey private-key.pem -out public-cert.pem
More information about the NestJS CLI here

Other useful commands
Running unit tests
Run ng test my-app to execute the unit tests via Jest.

 
Understand your workspace
Run npm run dep-graph to see a diagram of the dependencies of your projects.
