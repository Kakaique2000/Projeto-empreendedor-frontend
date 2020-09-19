import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewJobComponent } from './new-job.component';


@NgModule({
    declarations: [NewJobComponent],
    imports: [ ReactiveFormsModule, CommonModule, RouterModule, FormsModule]
})
export class NewJobModule{

}