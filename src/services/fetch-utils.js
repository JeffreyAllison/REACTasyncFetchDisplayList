import { client } from './client.js';

export async function getAmps() {
  const response = await client.from('amp').select('*');

  return response.body;
}

export async function getWaterBodies() {
  const response = await client.from('bodies_of_water').select('*');

  return response.body;
}

export async function getCandies() {
  const response = await client.from('candies').select('*');

  return response.body;
}

export async function getTeaKinds() {
  const response = await client.from('kinds_of_tea').select('*');

  return response.body;
}
