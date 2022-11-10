export interface UsersType {
  id: string;
  name: string;
  email: string;
  active: boolean;
  type: string;
}

export interface UsersTypeMutation {
  name: string;
  email: string;
  active: boolean;
  type: string;
}