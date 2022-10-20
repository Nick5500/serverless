"use strict";
import { loadSequelize } from "../sequelize";
import { getOneUserById, create, getAllUsers, updateUserById, deleteOneById } from './user-service';
import { User } from "../common/models/user.model";
import { MessageUtil } from "../common/error/message";
import { StatusCodes } from "../common/constants/status-code";

export async function createUser(event): Promise<User> {
  await loadSequelize();
  const request = JSON.parse(event.body);

  const userToCreate = {
    id: request.id,
    firstname: request.firstname,
    lastname: request.lastname
  }

  return create(userToCreate);
}

export async function getUserById(event: any): Promise<User | MessageUtil> {
  const id = Number(event.pathParameters?.id);

  if (isNaN(id)) {
    return MessageUtil.error(StatusCodes.BAD_REQUEST, 'Wrong id')
  }


  await loadSequelize();

  return getOneUserById(id);
}

export async function getUsers(): Promise<User[]> {
  await loadSequelize();
  return getAllUsers();
}

export async function updateUser(event: any): Promise<User | MessageUtil> {
  const id = Number(event.pathParameters?.id);

  if (isNaN(id)) {
    return MessageUtil.error(StatusCodes.BAD_REQUEST, 'Wrong id')
  }

  await loadSequelize();

  const body = JSON.parse(event.body);
  return updateUserById(id, body);
}

export async function deleteUserById(event: any): Promise<any> {
  await loadSequelize();

  return deleteOneById(event.pathParameters.id);
}