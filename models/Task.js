const mongoose = require('mongoose')
const ObjectId = mongoose.SchemaTypes.ObjectId

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
          },
          completed: {
            type: Boolean,
            default: false
          }
    }, 
    { timestamps: true }
)

const Task = mongoose.model('Task', TaskSchema)
module.exports = Task