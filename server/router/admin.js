/**
 * /* ==============================================
 * // DEPENDENCIES
 * ==============================================
 *
 * @format
 */

// Import Express
const express = require("express");

// Instantiate Express Router
const adminRouter = express.Router();

// Import routes
const { deleteAccount, resetPw, findAccount } = require("../controllers/admin");

// Import validation middleware
const { validateDeleteAccount } = require("../validation/admin");

// Import authentication middleware
const verifyAccessToken = require("../middleware/verifyAccessToken");

/* =========================================
// ROUTER
========================================= */

// Reset password
adminRouter.patch("/reset_pw", resetPw);

// Gets id, username & role id for a user
adminRouter.get("/find_account/:username", verifyAccessToken, findAccount);

// Deletes all data and account for a user
adminRouter.delete("/delete_account", verifyAccessToken, validateDeleteAccount, deleteAccount);

/* =========================================
// EXPORTS
========================================= */

module.exports = adminRouter;
