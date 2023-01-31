export interface AccessRight {}

export type UserRole = 'superadmin' | 'user';

interface UserData {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  publicPhoneNumber: string;
  role: UserRole;
}

export default UserData;
