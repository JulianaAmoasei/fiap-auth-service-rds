import sendResponse from '../utils/sendResponse';
import init from '../database/dbConnect';
import UserModel from '../models/User';

async function createUser (event: any) {
const user = JSON.parse(event.body);
  try {
    await init();
    const newUser = await UserModel.create(user)
    return sendResponse(200, newUser);
  } catch (error) {
    console.error(error, 'deu algum erro');
    return sendResponse(400, error);
  }
};

export { createUser };
