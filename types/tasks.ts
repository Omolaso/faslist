export interface TaskProps {
  title: string;
  subtitle: string;
  priority: string;
  time: string;
}

export interface CreateTaskProps {
  name: string;
  description: string;
  // priority: string;
  reminder: string;
  reminderType: string;
}
