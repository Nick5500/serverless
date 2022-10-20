"use strict";
import { loadSequelize } from "../sequelize";
import { getOneUserById, create, getAllUsers, updateUserById, deleteOneById } from './user-service';
import { User } from "../models/user.model";
import { MessageUtil } from "../error/message";
import { ErrorMessages } from "../constants/error-messages";

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

export async function getUserById(event: any): Promise<User> {
  await loadSequelize();

  return getOneUserById(event.pathParameters?.id);
}

export async function getUsers(): Promise<User[]> {
  await loadSequelize();
  return getAllUsers();
}

export async function updateUser(event: any): Promise<User> {
  await loadSequelize();

  const body = JSON.parse(event.body);
  return updateUserById(event.pathParameters.id, body);
}

export async function deleteUserById(event: any): Promise<string> {
  await loadSequelize();

  const isUserDeleted = await deleteOneById(event.pathParameters.id);

  if (!isUserDeleted) {
    return MessageUtil.success({
      message: ErrorMessages.USER_NOT_DELETED
    });
  }

  return MessageUtil.success({
    message: ErrorMessages.USER_DELETED,
  });
}