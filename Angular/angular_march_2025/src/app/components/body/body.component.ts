import { Component } from '@angular/core';
import { ElectronicsComponent } from '../electronics/electronics.component';
import { DataBindingComponent } from '../data-binding/data-binding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UserListComponent } from '../user-list/user-list.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { Demo1Component } from '../demo1/demo1.component';
import { ParentComponent } from '../parent/parent.component';
import { Demo2Component } from '../demo2/demo2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { Messsage1Component } from '../messsage1/messsage1.component';
import { Messsage2Component } from '../messsage2/messsage2.component';
import { FormDemo1Component } from '../form-demo1/form-demo1.component';
import { FormDemo2Component } from '../form-demo2/form-demo2.component';
import { FormDemo3Component } from '../form-demo3/form-demo3.component';
import { FormDemo4Component } from '../form-demo4/form-demo4.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  imports: [
    // ElectronicsComponent
    //DataBindingComponent,
    // DirectivesComponent,
    // UserListComponent,
    // ProductListComponent,
    // Demo1Component,
    // ParentComponent,
    // Demo2Component,
    // HttpDemo1Component,
    // HttpDemo2Component,
    // ObservableDemo1Component,
    // ObservableDemo2Component,
    // ObservableDemo3Component,
    // SubjectDemo1Component,
    // Messsage1Component,
    // Messsage2Component,
    // FormDemo1Component,
    // FormDemo2Component,
    // FormDemo3Component,
    // FormDemo4Component,
    RouterOutlet
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean = true;
}
