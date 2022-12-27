// json-server --watch db.json
// https://www.npmjs.com/package/json-server
import { Task } from './Task';

export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
  {
    id: 4,
    text: 'Delete Test',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];