const Announcement = require('./../Model/announcementModel');
const User = require('./../Model/userModel');

const announcementResolver = {
  Query: {
    getAnnouncement: async (parent, args) => {
      try {
        const announcement = await Announcement.findById(args.id).populate('createdBy');
        if (!announcement) {
          throw new Error('Announcement not found');
        }
        return announcement;
      } catch (error) {
        console.error('Error fetching announcement:', error);
        throw new Error('Error fetching announcement');
      }
    },
    getAnnouncements: async () => {
      try {
        return await Announcement.find().populate('createdBy');
      } catch (error) {
        console.error('Error fetching announcements:', error);
        throw new Error('Error fetching announcements');
      }
    }
  },
  Mutation: {
    createAnnouncement: async (parent, args) => {
      const { title, createdBy, startdate, enddate } = args;
      const newAnnouncement = new Announcement({
        title,
        createdBy,
        startdate,
        enddate
      });

      try {
        await newAnnouncement.save();
        return newAnnouncement;
      } catch (error) {
        console.error('Error creating announcement:', error);
        throw new Error('Error creating announcement');
      }
    }
  },
  Announcement: {
    createdBy: async (parent) => {
      try {
        return await User.findById(parent.createdBy);
      } catch (error) {
        console.error('Error fetching user for announcement:', error);
        throw new Error('Error fetching user for announcement');
      }
    }
  }
};

module.exports = announcementResolver;
