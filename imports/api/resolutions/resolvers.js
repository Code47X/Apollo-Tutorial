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
};
