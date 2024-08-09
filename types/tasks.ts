export interface TaskPropsResponse {
  success: string;
  data: TaskProps[];
}
export interface TaskProps {
  name: string;
  description: string;
  priority: string;
  dueDate: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export interface CreateTaskProps {
  name: string;
  description: string;
  // priority: string;
  reminder: string;
  reminderType: string;
}

export interface UserTaskFetchProps {
  tasks: TaskPropsResponse | undefined;
  isLoading: boolean;
  error: any;
}
