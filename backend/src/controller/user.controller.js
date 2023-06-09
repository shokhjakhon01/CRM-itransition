import { User } from "../model/user.schema.js";
import { InternalServerError } from "../utils/errors.js";

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const user = req.user;

    res.status(200).json({
      status: 200,
      message: "all users !",
      current_user: user,
      data: users,
    });
  } catch (error) {
    next(new InternalServerError(500, error.message));
  }
};

const postStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const id = req.params.id;

    const changeUserStatus = await User.findByIdAndUpdate(id, {
      $set: { status: status },
    });

    if (changeUserStatus) {
      return res
        .status(200)
        .json({ status: 200, message: `User status is changed to ${status}` });
    }
  } catch (error) {
    next(new InternalServerError(500, error.message));
  }
};

export default { getUsers, postStatus };
