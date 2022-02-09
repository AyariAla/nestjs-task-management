import { TaskStatus } from '../tasks.model';

export class GetTasksFilerDto {
  status?: TaskStatus;
  search?: string;
}
