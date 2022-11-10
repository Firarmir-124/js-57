import React from 'react';
import {UsersType} from "../types";

interface Props {
  user: UsersType;
}

const UserItem:React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="card-title">
          <span className='pe-2'>Имя: {user.name}</span>
          <span>Почта: {user.email}</span>
        </div>
        <div className="characteristics">
          <span className="card-text pe-2"><small className="text-muted">{user.type || 'user'}</small></span>
          <span className="card-text"><small style={{color: user.active ? 'green' : 'red'}}>{user.active ? 'активный' : 'неактивный'}</small></span>
        </div>
      </div>
    </div>
  );
};

export default UserItem;