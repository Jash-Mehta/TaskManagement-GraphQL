const Task = require('../Model/taskModel');
const User = require('../Model/userModel');
const Comment = require('../Model/commentModel');

const commentResolvers = {
  Query: {
    getComment: async (parent, args) => {
      const comment = await Comment.findById(args.id).populate('taskId').populate('userId');
      if (!comment) {
        throw new Error('Comment not found');
      }
      return comment;
    },
    getComments: async (parent, args) => {
      return await Comment.find().populate('taskId').populate('userId');
    }
  },

  Mutation: {
    createComment: async (parent, args) => {
      const { taskId, userId, comment } = args;
      if (!comment) {
        throw new Error('Comment cannot be null');
      }

      const newComment = new Comment({
        taskId,
        userId,
        comment,
      });

      try {
        await newComment.save();
        return newComment;
      } catch (error) {
        console.error('Error creating comment:', error);
        throw new Error('Error creating comment');
      }
    }
  },

  Comment: {
    taskId: async (parent) => {
      return await Task.findById(parent.taskId);
    },
    userId: async (parent) => {
      return await User.findById(parent.userId);
    }
  }
};

module.exports = commentResolvers;
