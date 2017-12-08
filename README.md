# Poc Angular 2 Lazy Load

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Steps to make a lazy load of module

ng new poc-angular2-lazy-load --routing

### 1º Add link in the app component

```html
<button routerLink="/lazy/load">Click to load</button>
<router-outlet></router-outlet>
```
### 2º Generate your “Lazy” Module

```bash
ng g module lazy --flat
ng g component lazy-parent --module lazy
ng g component lazy-child --module lazy
```

import RouterModule and add our route:

```javascript
const routes: Routes = [
    { path: 'load', component: LazyParentComponent }
];
```

### 3º Point the app router to lazy module

```javascript
const routes: Routes = [
  { 
    path: 'lazy', 
    loadChildren: './modules/lazy/lazy.module#LazyModule'
  }
];
```

### 4º Test

Open browser on http://localhost:4200/ 
with the inspector open, click on buton, and check our "x.chunk.js" have been calling
