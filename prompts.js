module.exports = [{
    type: 'list',
    name: 'preset',
    message: 'Select from one of the following presets to scaffold your Vue project:',
    choices: [{
        name: 'Base (A basic Vuetify application)',
        value: 'base'
      },
      {
        name: 'Essential (An Essential Vuetify application)',
        value: 'Essential'
      },
      {
        name: 'Recommended (A recommended Vuetify application)',
        value: 'recommended'
      },
    ],
    default: 'base',
  },
  {
    type: 'list',
    name: 'materialStudy',
    message: 'What material-study do you want to add to your Vue project?',
    choices: [{
        name: "None (default)",
        value: "default"
      },
      {
        name: 'Basil',
        value: 'basil',
      }, {
        name: 'Crane',
        value: 'crane',
      }, {
        name: 'Fortnightly',
        value: 'fortnightly',
      }, {
        name: 'Owl',
        value: 'owl',
      }, {
        name: 'Rally',
        value: 'rally',
      }, {
        name: 'Reply',
        value: 'reply',
      }, {
        name: 'Shrine',
        value: 'shrine',
      }
    ]
  },
  {
    type: 'confirm',
    name: 'materialStudyPreset',
    message: 'Do you want to use a material-study preset?',
    default: 'false'
  }
]