import React from 'react';
import { User } from '../../node_modules/next-auth/index';
import Image from 'next/image';
import { Avatar } from './ui/avatar';

type Props = {
  user: Pick<User, 'name' | 'image'>;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user.image ? (
        <div className="relative w-full h-full aspect-square">
          <Image
            fill
            src={user.image}
            alt="profile image"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <Avatar>
          <span className="sr-only">{user?.name}</span>
        </Avatar>
      )}
    </Avatar>
  );
};

export default UserAvatar;
