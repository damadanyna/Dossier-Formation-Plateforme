import BaseModel from '../lib/BaseModel';

export type UserRole = 'superadmin' | 'user';

export interface UserData {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  phoneNumber?: string;
  publicPhoneNumber?: string;
  role: UserRole;
}

export class User extends BaseModel<UserData> {
  protected static override get _collectionName() {
    return 'users';
  }

  get fullName() {
    return `${this.data.firstName} ${this.data.lastName}`;
  }
}

export default User;
