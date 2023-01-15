import { Request } from 'express';

type userDeatils = {
  userName: string;
  email: string;
};

export declare namespace Express {
  export interface userDatas {
    userData: userDeatils;
  }
}
