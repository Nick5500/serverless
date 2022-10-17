"use strict"

import { User } from "../models/user.model.js";

export async function getOneUserById(id) {
  const user = await User.findAll({ where: { id } });

  if (!user.length) {
    throw new Error('User is not found')
  }

  return user;
}

export async function create(body) {
  return User.create(body);
}

export async function getAllUsers() {
  return User.findAll();
}

export async function updateUserById(id, body) {
  await User.update(body, { where: { id } })
  return getOneUserById(id);
}

export async function deleteOneById(id) {
  return User.destroy({ where: { id } });
}