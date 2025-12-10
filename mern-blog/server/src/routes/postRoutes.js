const express = require("express");
const Post = require("../models/Posts");
const router = express.Router();


// GET /api/notes?userId=abc123 -> List (optionally filter by userId) => READ
router.get("/", async (req, res) => {
    const { postId } = req.query;
    const filter = postId ? { postId } : {};
    const posts = await Post.find(filter).sort({ createdAt: -1});
    res.json(posts);
});

// POST  /api/notes   -> Create (optionally attach userId )  => CREATE
router.post("/", async(req, res)=>{
    const { title, content, userId } = req.body;
    
    if (!title) return res.status(400).json({ message: "Please provide a Title for your post."});

    const post = await Post.create({ title, content, postId });
    res.status(201).json(post);
});

// PUT /api/notes/:id   UPDATE
router.put("/:id", async(req, res)=>{
    const { id } = req.params;
    const { title, content } = req.body;

    const updated = await Post.findByIdAndUpdate(
        id,
        { $set: { title, content }},
        { new: true }
    );

    if (!updated) return res.status(404).json({ message: "Post not found."});
    res.json(updated);
});

// DELETE /api/notes/:id   DELETE
router.delete("/:id", async (req, res)=>{
    const { id } = req.params;
    const result = await Post.deleteOne({ _id: id});
    if (result.deleteOne == 0) return res.status(404).json({ message: "Post not found."});
    res.json({ ok: true });
});


module.exports = router;