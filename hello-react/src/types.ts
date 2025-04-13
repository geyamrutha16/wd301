export interface Task {
  id: number;
  title: string;
  dueDate: string; // format: YYYY-MM-DD
  description?: string; // optional
}
