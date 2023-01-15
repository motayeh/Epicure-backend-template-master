import { response } from "express";
import Users from "../db/models/users";
import bcrypt from "bcryptjs";
import { error } from "console";
import { report, send } from "process";
import { resolve } from "path";
import jwt from "jsonwebtoken";
export class UsersDal {
  public async createUser(user: any) {
    const saltRounds = 10;
    let token;
    const result = await Users.findOne({
      $or: [{ email: user.email }, { userName: user.userName }],
    });
    if (result) {
      return "already exist";
    } else {
      const res = new Promise((resolve, reject) => {
        bcrypt.hash(
          user.password,
          saltRounds,
          async function (err, hashedPass) {
            try {
              user = new Users({
                userName: user.userName,
                password: hashedPass,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
              });
              // try {
              //   token = jwt.sign(
              //     { userName: user.userName, email: user.email },
              //     'Secret Data'
              //   );
              // } catch (err) {
              //   return err;
              // }
              const response = await Users.create(user);
              if (response) resolve(user);
            } catch (err) {
              reject("error");
            }
          }
        );
      });

      return res;
    }
  }
  public async logIn(user: any) {
    const result = await Users.findOne({
      $or: [{ email: user.email }, { userName: user.userName }],
    });
    if (result?.password) {
      const hashedPass = user.password;
      const x = result.password;
      const { password } = user;
      const res = new Promise(async (resolve, reject) => {
        const isValid = await bcrypt.compare(password, x);
        if (isValid) resolve(result);
        else {
          reject("wrong password");
        }
      });

      return res;
    } else return `User isn't found.`;
  }

  public async findAll() {
    const data = await Users.aggregate([
      {
        $project: {
          _id: false,
          password: false,
        },
      },
    ]);
    return data;
  }
}
