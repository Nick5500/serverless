"use strict"

import { User } from "../models/user.model";
import { MessageUtil } from "../error/message";

export async function getOneUserById(id: string): Promise<any> {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return MessageUtil.error(404, 'User is not found');
  }

  return MessageUtil.success(user);
}

export async function create(body: any): Promise<User> {
  const user = await User.create(body);

  return MessageUtil.success(user);
}

export async function getAllUsers(): Promise<User[]> {
  const users = await User.findAll();

  return MessageUtil.success(users);
}

export async function updateUserById(id: string, body: any): Promise<any> {
  await User.update(body, { where: { id } })
  const updatedUser = await User.findOne({ where: { id } });

  if (!updatedUser) {
    return MessageUtil.error(404, 'User is not found');
  }

  return MessageUtil.success(updatedUser);
}

export async function deleteOneById(id: string): Promise<number> {
  return User.destroy({ where: { id } });
}