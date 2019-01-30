module.exports = {


  friendlyName: 'View salary',


  description: 'Display "Salary" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/salary'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
