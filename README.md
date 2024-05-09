# NascarUI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Updating NASCAR driver scores

- Update the nascar-driver.json file with the new driver/data following the format I used already for the fake scores implemented for the 6 drivers in the file already. THE SCORES MUST BE IN ORDER FROM SLOWEST TO FASTEST for the logic to work correctly. Make sure the path to the avatar img is setup like the other drivers alredy in the file.
- If the driver is a new one, different than the drivers already in the file, you will need to add a cropped avatar image of them similar to the existing ones in the 'nascar-avatars' folder in the 'img' folder of the 'assets' folder.
- Additionally the path for the avatar for a new driver will also need to be added to the inToAvatar method of the leaderboard.component.ts file. Follow same protocol as other image paths in that file. The number for the case statement will need to match the number used for the avatar when inserted into the User db (see api readme for more info on getting driver data in the DB), avatar number for drivers must start after 14. I started at 20 for the ones I already implemented with fake scores.

## Connect to the API

- To connect to the API all you have to do is put the root of the API URL in the environment.ts file, replacing the url that is already there.

## Install Packages

Run `npm install` to install all packages needed for the project to build.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

# NASCAR.UI
