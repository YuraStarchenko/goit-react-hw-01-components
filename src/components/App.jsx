import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

import { Statistics } from './Statistics/Statistics';
import data from './Statistics/data.json';

import { FriendList } from './Friend/FriendList/FriendList';
import friends from './Friend/friends.json';

import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile user={user} />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

      <GlobalStyle />
    </Container>
  );
};
