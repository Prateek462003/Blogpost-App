const router = require("express").Router();
const { updateBlog, deleteBlog, createBlog, getAllBlogs, getBlog } = require("../Controllers/blogController");

// CREATE
router.post("/", createBlog);

// READ
router.get("/", getAllBlogs);
router.get("/:id", getBlog);

// UPDATE
router.put("/", updateBlog);

// DELETE
router.delete("/:id", deleteBlog);

module.exports = router;