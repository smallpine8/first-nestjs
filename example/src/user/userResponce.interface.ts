import { User } from './user.entity';

export interface UserResponce {
  message?: string
  responce?: {
    user?: User,
    users?: User[]
  }
}