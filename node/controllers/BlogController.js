import BlogModel from "../models/BlogModel.js";

// METODOS PARA EL CRUD

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await BlogModel.findAll();
    res.json(blogs);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findAll({
      where: { id: req.params.id },
    });
    res.json(blog);
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    await BlogModel.create(req.body);
    res.json({
      message: "'registro creado",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    await BlogModel.update(req.body, {
      where: { id: req.params.id },
    });
    res.json({
      message: "registro actualizado",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    await BlogModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: "registro eliminado correctamente",
    });
  } catch (err) {
    res.json({ message: err.message });
  }
};
