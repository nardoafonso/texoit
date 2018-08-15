import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { ListComponent } from "./list/list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes =[
    { path: '', component: FormComponent },
    { path: 'form', component: FormComponent , children:[
        {path: ':key', component: FormComponent}
    ]},
    { path: 'list',component:ListComponent},
    {path:'not-found', component: PageNotFoundComponent},
    {path:'**',redirectTo:'/not-found'} 
  ]  
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}