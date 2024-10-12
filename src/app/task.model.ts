// src/app/task.model.ts
export class Task {
    id?: number;
    title: string;
    description: string;
    isCompleted: boolean;
  
    constructor() {
      this.title = '';
      this.description = '';
      this.isCompleted = false;
    }
  }
  