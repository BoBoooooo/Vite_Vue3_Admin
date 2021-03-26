export interface AppState {
  sidebar: {
    opened: boolean; // 侧边栏隐藏状态
  };
}

const appState: AppState = {
  sidebar: {
    opened: true,
  },
};

export default appState;
