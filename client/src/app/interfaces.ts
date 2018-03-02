export interface User {
  username: string;
  password: string;
  _id: any;
}

export interface Message {
  message: string;
  type: string;
}

export interface Notification {
  message: string;
  type: string;
}

export interface Game {
  name: string;
  creator: any;
  questions: Array<any>;
  timeToAnswer: number;
  timeToStart: number;
  status: string;
  players: Array<any>;
  ranking: Array<any>;
}

