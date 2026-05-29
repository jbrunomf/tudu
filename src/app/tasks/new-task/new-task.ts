import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TasksService} from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) userId!: number;
  @Output() close = new EventEmitter<void>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  constructor(private service: TasksService) {
  }

  onCancel($event: Event) {
    this.close.emit();
  }

  protected onSubmit(enteredTitle: string, enteredSummary: string, enteredDueDate: string) {
    this.service.addTask({title: enteredTitle, summary: enteredSummary, dueDate: enteredDueDate}, this.userId);
    this.close.emit();
  }
}
