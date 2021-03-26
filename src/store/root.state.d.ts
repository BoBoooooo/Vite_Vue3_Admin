import { RouterState } from './modules/router/state';
import { AppState } from './modules/app/state';
import { UserState } from './modules/user/state';

export type RootState = {
  user: UserState;
  app: AppState;
  router: RouterState
};
