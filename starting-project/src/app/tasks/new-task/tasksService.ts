import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "../task.model";
import { LoggingService } from "../../logging.service";

// @Injectable({
//   providedIn: "root",
// })
export class TasksService {
  // Signal to hold an array of tasks
  private tasks = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.tasks.asReadonly();
  // Method to add a task
  addTask(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(), // Unique ID for the task
      status: "OPEN", // Default status
    };

    // Update the signal's value to include the new task
    this.tasks.update((currentTasks) => [...currentTasks, newTask]);
    this.loggingService.log('ADDED task with title'+taskData.title  );
  }

  updateTaskStatus(taskId:string,newStatus:TaskStatus){
    this.tasks.update((oldTasks)=>oldTasks.map((task)=>task.id===taskId ? {...task,status:newStatus}:task))
    this.loggingService.log('Chnged the status '+newStatus);

  }
   
  
  
}
