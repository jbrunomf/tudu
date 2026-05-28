export interface TaskModel {
  id: number;
  userId: number;
  title: string;
  summary: string;
  dueDate: string;
}


export interface NewTaskData {
  title: string,
  summary: string,
  dueDate: string
}
