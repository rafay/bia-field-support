# Bridge International Academies - field-support
This is a web-client project to support field agents to identify academies where in there's need
for batteries replacement for hand-held devices.

#### Project technology used
1. Angular CLI: 9.1.0
2. NodeJS 12.16.1 (NodeJS 10+ is required)

#### Prerequisites to run the project in development environment.
1. Operating System - Any (Windows / Mac / Linux)
2. NodeJS 
    - Installation Link [here](https://nodejs.org/en/)
3. Angular-CLI 
    - Run in terminal
    ```
       npm install -g @angular/cli
    ```

#### Clone the project to local directory
- Use command
    ```
  git clone https://github.com/rafay/bia-field-support.git  
    ```
#### Running the project
1. From the project directory in terminal run following once
     ```
    npm install
    ```
2. Run the project in order to open in default browser with following command
    ```
   ng serve -o
   ```
#### Running unit tests
1. Run following command for unit-tests
   ```
   npm run test
   ```
#### Following assumptions were made while working on this task
> Data that needs to be shown in UI will be populated locally from source file as shared in the proplem task. Before they application starts to load any page, the data from source file is manupulated for easing query process by applying proper aggregation/group of data by acadmyId, serialNumber and average percentage discharge value.

> For the purpose of  simplicity, used table structure for UI.

#### Further enhancement anticipations
> The heavy lifting of calculating average battery usage shall be moved to backend and served through API directly rather than having complex calculations on front end.

> The Dashboard page shows List of academies having issues with assets (in this case Batteries). But, this can be easily extended to issues with other assets as well. Ex: Tablets, Laptops, Projectors etc.

> Initial landing page Dashboard can have graphical representation of issues based on various types of assets.
