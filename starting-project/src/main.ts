import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TasksService } from './app/tasks/new-task/tasksService';
import { InjectionToken } from '@angular/core';
import { Token } from '@angular/compiler';

 export const TasksServiceToken = new InjectionToken<TasksService>('tasks-service-token');
bootstrapApplication(AppComponent,
    {
        providers:[{
            provide:TasksServiceToken,useClass:TasksService
        }]
    }
).catch((err) => console.error(err));


    // bootstrapApplication(AppComponent,
    //     {
    //         providers:[TasksService]
    //     }).catch((err) => console.error(err));