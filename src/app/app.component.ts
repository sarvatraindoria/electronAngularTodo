import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
tasks: string[] = [];
    taskOne: string;

    addToList() {
        if (this.taskOne)
            this.tasks.push(this.taskOne);
        this.taskOne = '';
    }

    deleteSite(myTask) {
       
        if (this.tasks.indexOf(myTask, 0) > -1)
            this.tasks.splice(this.tasks.indexOf(myTask, 0), 1);
    }
}
