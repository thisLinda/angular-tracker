import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // observables are preferred over this when dealing with asynchronous data over a server
    // this.tasks = this.taskService.getTasks();

    // "like a promise, kinda the same thing"
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      // subscribe is "like a .then, delete and then filter it out from the UI"
      .subscribe(
          () => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    console.log(task.reminder);
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => (this.tasks.push(task)));
  }
}
