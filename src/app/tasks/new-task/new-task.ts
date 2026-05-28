import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { type NewTaskData} from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [
    FormsModule
  ],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() submit = new EventEmitter<NewTaskData>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel($event: Event) {
    this.cancel.emit();
  }


  protected onSubmit(enteredTitle: string, enteredSummary: string, enteredDueDate: string) {
    this.submit.emit({title: enteredTitle, summary: enteredSummary, dueDate: enteredDueDate});
  }
}
