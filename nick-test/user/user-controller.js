"use strict";
import { loadSequelize } from "../sequelize.js";
import { getOneUserById, create, getAllUsers, updateUserById, deleteOneById } from './user-service.js';

export async function createUser(event) {
  await loadSequelize();
  const request = JSON.parse(event.body);

  const userToCreate = {
    id: request.id,
    firstname: request.firstname,
    lastname: request.lastname
  }

  const createdUser = await create(userToCreate);
  return JSON.stringify(createdUser, null, 2);
}

export async function getUserById(event) {
  await loadSequelize();

  const user = await getOneUserById(event.pathParameters?.id);

  return JSON.stringify(user, null, 2)
}

export async function getsUser(event) {
  await loadSequelize();
  const users = await getAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify({users}, null, 2),
  }
}

export async function updateUser(event) {
  await loadSequelize();

  const body = JSON.parse(event.body);
  const updatedUser = await updateUserById(event.pathParameters.id, body);

  return JSON.stringify(updatedUser);
}

export async function deleteUserById(event) {
  await loadSequelize();

  const isUserDeleted = await deleteOneById(event.pathParameters.id);

  if (!isUserDeleted) {
    return JSON.stringify('User was not deleted');
  }

  return JSON.stringify('User was deleted');
}