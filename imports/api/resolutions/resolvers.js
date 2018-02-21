import Resolutions from './resolutions';

// Quick and dirty insert

// Resolutions.insert({
//   name: 'Test Res',
// });

export default {
  Query: {
    resolutions() {
      return Resolutions.find({}).fetch();
    },
  },
  Mutation: {
    createResolution() {
      console.log('got here');
      // mongo db insert returns the id of object your inserting
      // const resolutionId = Resolutions.insert({
      //   name: 'Test Res',
      // });
    },
  },
};
