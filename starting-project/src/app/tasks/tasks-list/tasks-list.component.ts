import { Component, computed, inject, signal } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksService } from '../new-task/tasksService';
import { CommonModule } from '@angular/common'; // Import CommonModule for Angular directives like *ngFor
import { TasksServiceToken } from '../../../main';
import { TASK_STATUS_OPTIONS, TaskStatusOptions, taskStatusOptionsProvider } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css'],
  imports: [TaskItemComponent, CommonModule], // Import CommonModule and TaskItemComponent
  providers:[taskStatusOptionsProvider]
})
export class TasksListComponent {
  private tasksService = inject(TasksServiceToken);

  // Signal for selected filter
  selectedFilter = signal<string>('all');
  taskStatusOptions = inject(TASK_STATUS_OPTIONS);  

  // Computed signal for tasks based on the filter
  tasks = computed(() => {
    const allTasks = this.tasksService.allTasks(); // Assuming allTasks is a signal
    switch (this.selectedFilter()) {
      case 'open':
        return allTasks.filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return allTasks.filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
        return allTasks.filter((task) => task.status === 'DONE');
      default:
        return allTasks; // Default case should return all tasks
    }
  });

  // Method to update the filter
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }

  
}



