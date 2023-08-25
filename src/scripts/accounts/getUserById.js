import { readData } from "../services/api.js";

export const getUserById = async id => {
  const user = await readData(`users/${id}`)
  return user
}