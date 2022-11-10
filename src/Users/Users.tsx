import React from 'react';
import UserItem from "./UserItem";
import {UsersType} from "../types";

interface Props {
  users: UsersType[];
}

const Users:React.FC<Props> = ({users}) => {
  return (
    <div className='w-50'>
      {users.map(user => (
        <UserItem key={user.id} user={user}/>
      ))}
    </div>
  );
};

export default Users;