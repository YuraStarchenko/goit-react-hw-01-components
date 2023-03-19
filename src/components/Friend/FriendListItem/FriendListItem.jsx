import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friends: { avatar, name, isOnline } }) => {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
