import { observable, action, decorate } from 'mobx';

export interface UserStoreProps {
  user: {
    userName: string;
  },
  setUserName: (name: string) => void;
}
class UserStore implements UserStoreProps {
  public user = {
    userName: 'admin',
  };

  public setUserName(value: any) {
    this.user.userName = value;
  }
}

decorate(UserStore, {
  user: observable,
  setUserName: action.bound,
});

export default UserStore;
