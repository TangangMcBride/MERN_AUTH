import asyncHandler from "express-async-handler";

//@desc Auth user /set token
//@route POST /api/users/auth
//@access Public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Authenticated" });
});

//@desc register user
//@route POST /api/users/auth
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Registered" });
});
//@desc Logout user
//@route POST /api/users/logout
//@access Public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User LoggedOut" });
});

//@desc Get user profile
//@route GET /api/users/profile
//@access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: " Get User Profile" });
});

//@desc Update User Profile
//@route PUT /api/users/profile

//@access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User Profile" });
});
export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile
};
