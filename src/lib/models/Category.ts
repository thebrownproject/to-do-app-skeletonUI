// Category class definition

export class Category {
  id: string;
  name: string;
  color: string;

  constructor(data: Partial<Category> = {}) {
    this.id = data.id || crypto.randomUUID();
    this.name = data.name || "New Category";
    this.color = data.color || "#FFFFFF"; // Default color
  }
}
