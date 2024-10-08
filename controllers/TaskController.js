require("dotenv").config()
const Task = require('../models/Task')


const TaskController = {
  
    async create(req, res) {
        try {
          const { title } = req.body;
          const task = new Task({ title, completed: false });
          await task.save();
          res.status(201).send({ message: 'Tarea creada con éxito', task });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error al crear la tarea' });
        }
      },

      async getAll(req, res) {
        try {
          const tasks = await Task.find();
          res.status(200).send(tasks);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error al obtener las tareas' });
        }
      },

      async getById(req, res) {
        try {
          const task = await Task.findById(req.params._id);
          if (!task) {
            return res.status(404).send({ message: 'Tarea no encontrada' });
          }
          res.status(200).send(task);
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error al obtener la tarea' });
        }
      },

      async markAsCompleted(req, res) {
        try {
          const task = await Task.findByIdAndUpdate(
            req.params._id,
            { completed: true },
            { new: true }
          );
          if (!task) {
            return res.status(404).send({ message: 'Tarea no encontrada' });
          }
          res.status(200).send({ message: 'Tarea marcada como completada', task });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error al actualizar la tarea' });
        }
      },

      async updateTitle(req, res) {
        try {
          const { title } = req.body;
          if (!title) {
            return res.status(400).send({ message: 'El título es obligatorio' });
          }
    
          const task = await Task.findByIdAndUpdate(
            req.params._id,
            { title },
            { new: true }
          );
          if (!task) {
            return res.status(404).send({ message: 'Tarea no encontrada' });
          }
          res.status(200).send({ message: 'Título de la tarea actualizado', task });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error al actualizar la tarea' });
        }
      },
    
      async delete(req, res) {
        try {
          const task = await Task.findByIdAndDelete(req.params._id);
          if (!task) {
            return res.status(404).send({ message: 'Tarea no encontrada' });
          }
          res.status(200).send({ message: 'Tarea eliminada con éxito' });
        } catch (error) {
          console.error(error);
          res.status(500).send({ message: 'Error al eliminar la tarea' });
        }
      }
}

module.exports = TaskController