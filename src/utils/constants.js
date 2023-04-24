export const ColorPalette = {
  BLUE_NCS: '#2E86AB',
  BLUE_NCS_HOVER: '#2d6983',
  DARK_LIVER_HORSES: '#564138',
  GREEN_YELLOW_CRAYOIA: '#F6F5AE',
  MAXIMUM_YELLOW: '#F5F749',
  CINNEBAR: '#F24236',
  WHITE: '#FFFFFF',
  BORDER_COLOR: '#00000063',
}

export const CommonTexts = {
  APP_HEADER: 'Socio',
}

export const MenuNames = {
  PROFILE_MENU: 'profile-menu',
}

export const MenuButtons = {
  ProfileMenu: {
    ID: 'basic-button',
    TEXT: 'Profile',
  },
}

export const Genders = {
  MALE: 'Male',
  FEMALE: 'Female',
}

export const FormTypes = {
  TEXT: 'text',
  TEXTAREA: 'textarea',
  EMAIL: 'email',
  PASSWORD: 'password',
  FILE: 'file',
  RADIO: 'radio',
}

export const centerAlignItem = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
}

export const URLs = {
  BASE_URL: 'http://localhost:5000',
}
export const endpoints = {
  Posts: {
    CREATE_POST: '/posts',
    GET_POSTS: '/posts',
    GET_POST_BY_ID: '/posts',
    DELETE_POST: '/posts/delete',
    LIKE_POST: '/posts/like',
    UNLIKE_POST: '/posts/unlike',
  },
  Auth: {LOG_IN: '/auth/login', SIGN_UP: '/auth/sign-up'},
}

export const NotificationTypes = {
  SUCCESS: 'success',
  ERROR: 'error',
}

export const justifySpaceBetweenFlexboxRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

export const justifyCenterFlexboxRow = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}
export const columnStartAlignedFlexbox = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'flex-start',
}
export const columnCenterAlignedFlexbox = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'center',
}

export const Icons = {
  SHARE: 'material-symbols:share',
  LIKE: 'fa:thumbs-up',
  AVATAR: 'carbon:user-avatar-filled',
  AVATAR_ALT: 'carbon:user-avatar-filled-alt',
  MENU_VERTICAL: 'carbon:overflow-menu-vertical',
  MENU_HORIZONTAL: 'carbon:overflow-menu-horizontal',
  SETTINGS: 'material-symbols:settings',
  LOG_OUT: 'fluent:sign-out-20-filled',
  ADD: 'material-symbols:add',
  ERROR: 'material-symbols:error-circle-rounded',
  DELETE: 'material-symbols:delete-outline',
}
