module.exports = {
  name: 'generate:controller',
  alias: 'g:c',
  description: 'Create Controller',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    if(!parameters.first){
      error('Controller name must be specified.')
      return
    }

    await template.generate({
      template: 'controller.js',
      target:`src/controllers/${parameters.first}Controller.js`,
      props: {name: parameters.first}
    })

    success(`Controller ${parameters.first} created !`)

  }
}
