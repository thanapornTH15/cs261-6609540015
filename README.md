# Repository for individual work in CS261 course
This repository has two branches: 'master' and 'master-frontend'. Each branch contains files in the work process, which are divided into two phases:
1. 'master' : Frontend part to interact with users
2. 'master-frontend' : Frontend part that adds Backend code to allow web pages to call/verify data with the TU's database by calling the TU API and displaying the identity verification results on the web page.

## This is 'master-frontend' branch
This contains two folders:
- Frontend/
> .html
> .css
> .js
> .json
> .png (images)
> .gitignore
- Server-Setup/
> .dockerfile (docker image for build & run on Docker)

You can install the latest version of this project by **cloning only the master-frontend branch** using the command:  

`git clone -b master-frontend https://github.com/thanapornTH15/cs261-6609540015.git`  

or select the download option via **Code > Download Zip** and then extract the zip file to access the working folder.  

The last two lines of the **DockerContainer_NodeJS.dockerfile** file contain the commands used to build and run the docker image to create a NodeJS server.
**Note that** these commands only work properly if you build the docker file in the same location as the `frontend` and `server-setup` folders, so use the code with caution.