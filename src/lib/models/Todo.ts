// Todo class definition
export class Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: string;
  priority: string;
  dueDate: Date;
  createdAt: Date;
  lastUpdated: Date;

  constructor(data: Partial<Todo> = {}) {
    this.id = data.id || crypto.randomUUID();
    this.title = data.title || "";
    this.description = data.description || "";
    this.completed = data.completed || false;
    this.category = data.category || "default";
    this.priority = data.priority || "normal";
    this.dueDate = data.dueDate || new Date();
    this.createdAt = data.createdAt || new Date();
    this.lastUpdated = data.lastUpdated || new Date();
  }

  // Toggle completion status
  toggleCompletion() {
    this.completed = !this.completed;
    this.lastUpdated = new Date();
  }

  // Update data within the Todo object
  Update(data: Partial<Todo>) {
    if (data.title) this.title = data.title;
    if (data.description) this.description = data.description;
    if (data.category) this.category = data.category;
    if (data.priority) this.priority = data.priority;
    if (data.dueDate) this.dueDate = new Date(data.dueDate);
    this.lastUpdated = new Date();
  }
}
