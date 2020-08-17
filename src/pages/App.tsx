import React from 'react';
import { RouteComponentProps } from 'react-router';
import { inject, observer } from 'mobx-react';
import { UserStoreProps } from '@/store/userStore';
import './App.css';

interface Props extends RouteComponentProps {
  userStore?: UserStoreProps;
}

const App: React.FC<Props> = props => {
  const { user: { userName } } = props.userStore!;
  return (
    <div className="App">
      <header className="App-header">
        <h1>{userName}</h1>
      </header>
    </div>
  );
}

export default inject('userStore')(observer(App));
