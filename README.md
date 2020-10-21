# Solución del taller
### Mateo Castro Muñoz
## Servicios
Para llevar a cabo el consumo de los datos del **owner** se realizaron los siguientes servicios (guardados en el directorio *"/shared/owner"*):
**getAll():** Obtiene todos los owners. Hace uso del método get de HTTP.
**get(id):** Obtiene el owner identificado por el id que recibe como parámetro. Hace uso del método get de HTTP.
**save(owner):** Crea o actualiza el owner que recibe como parámetro dependiendo de si éste ya existe o no. Hace uso de los métodos put y post de HTTP.
**unlinkCar(dni):** Elimina la relación entre un owner y un car cuando se elimina el owner identificado por el dni que recibe como parámetro.
**remove(href, dni):** Hace el llamado del servicio **unlinkCar(dni)** para eliminar la relación del owner identificado con el dni que recibe como parámetro y posteriormente elimina el owner. Hace uso del método delete de HTTP.
## Componentes
Para desplegar la lista de *Owners*  se creó el componente **owner-list**.
Para editar, crear y eliminar un owner se creó el componente **owner-edit**.

>**Nota [1]:** El componente car-edit fue modificado para desplegar una lista con todos los owners existentes, con el fin de poder asociar uno a un car.
>**Nota [2]:** El componente car-list fue modificado para mostrar el nombre del owner asociado a un car en la lista.

# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
