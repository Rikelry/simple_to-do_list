export type Task = Readonly<{
  id: string;
  title: string;
  done: boolean;
}>;

export type Filter = 'All' | 'Active' | 'Completed';
