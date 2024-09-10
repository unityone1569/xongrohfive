export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  dpId: string;
  dpUrl: URL | string;
  file: File[];
};

export type INewPost = {
  userId: string;
  content: string;
  file: File[];
  tags?: string;
};

export type IUpdatePost = {
  postId: string;
  content: string;
  mediaId: string;
  mediaUrl: URL;
  file: File[];
  location?: string;
  tags?: string;
};

export type IUser = {
  id: string;
  name: string;
  hometown: string;
  username: string;
  email: string;
  dpUrl: string;
  bio: string;
};

export type INewUser = {
  name: string;
  hometown: string;
  email: string;
  username: string;
  password: string;
};
