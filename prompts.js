module.exports = [
  {
    type: 'list',
    name: 'preset',
    message: 'Select from one of the following presets to scaffold your Vue project:',
    choices: [
      {
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
  }
]
