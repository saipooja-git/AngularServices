import { Component, ElementRef, Inject, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from './tasksService';
import { TasksServiceToken } from '../../../main';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');
  private tasksService: TasksService;


  constructor(@Inject(TasksServiceToken) private tService:TasksService){
    this.tasksService = tService;
  }


  onAddTask(title: string, description: string) {
    this.tasksService.addTask({title : title,description:description});
    this.formEl()?.nativeElement.reset();
  }
}
