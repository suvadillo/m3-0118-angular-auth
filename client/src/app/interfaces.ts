export interface User {
  username: string;
  password: string;
  _id: number;
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
  _id: number;
  name: string;
  creator: any;
  questions: Array<any>;
  timeToAnswer: number;
  timeToStart: number;
  status: string;
  players: Array<any>;
  ranking: Array<any>;
}

export interface Question {
  _id: number;
  question: string;
  options: Array<any>;
  imgUrl: string;
  correctOption: number;
  category: string;
  dificulty: string;
}

