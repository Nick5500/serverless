"use strict"

import { User } from "../common/models/user.model";
import { MessageUtil } from "../common/error/message";
import { StatusCodes } from "../common/constants/status-code";
import { ErrorMessage } from "../common/constants/error-message";

export async function getOneUserById(id: number): Promise<any> {
  const user = await User.findOne({ where: { id } });

  if (!user) {
    return MessageUtil.error(StatusCodes.NOT_FOUND, ErrorMessage.USER_NOT_FOUND);
  }

  return MessageUtil.success(user);
}

export async function create(body: any): Promise<User> {
  const user = await User.create(body);

  return MessageUtil.success(user, StatusCodes.CREATED);
}

export async function getAllUsers(): Promise<User[]> {
  const users = await User.findAll();

  return MessageUtil.success(users);
}

export async function updateUserById(id: number, body: any): Promise<any> {
  await User.update(body, { where: { id } })
  const updatedUser = await User.findOne({ where: { id } });

  if (!updatedUser) {
    return MessageUtil.error(StatusCodes.NOT_FOUND, ErrorMessage.USER_NOT_FOUND);
  }

  return MessageUtil.success(updatedUser);
}

export async function deleteOneById(id: string): Promise<any> {
  await User.destroy({ where: { id } });

  return MessageUtil.success({}, StatusCodes.NO_CONTENT);
}