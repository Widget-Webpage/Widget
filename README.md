# Widget

# Clone Repo
$ git clone https://github.com/Widget-Webpage/Widget.git

# Set up Packages
Download Anaconda Package Manager for Python3.8\
https://docs.conda.io/en/latest/miniconda.html

Setup Environment from Environment.yml file\
$ conda env create -f environment.yml 

Activate Conda environment\
$ conda activate Widget

# Recreate Conda environment after changes to environment file
Delete Environemnt 
$ conda remove --name Widget --all

Setup Environment from Environment.yml file\
$ conda env create -f environment.yml 

Activate Conda environment\
$ conda activate Widget

# Run Website
Navigate to top level directory\
$ python3 manage.py runserver

Webserver should run on localhost:8000
