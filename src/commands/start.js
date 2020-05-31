module.exports = {
  name: 'start',
  description: 'Create estruture basic to development and debug.',
  run: async toolbox => {
    const {
      parameters,
      template,
      print: { success, error }
    } = toolbox

    await template.generate({
      template: 'launch.json',
      target:'.vscode/launch.json'
    })
    await template.generate({
      template: 'server.js',
      target:'src/server.js'
    })
    await template.generate({
      template: '.env',
      target:'.env'
    })
    await template.generate({
      template: '.gitignore',
      target:'.gitignore'
    })
    await template.generate({
      template: 'nodemon.json',
      target:'nodemon.json'
    })
    await template.generate({
      template: 'app.js',
      target:'src/app.js'
    })
    await template.generate({
      template: 'auth.js',
      target:'src/middlewares/auth.js'
    })
    await template.generate({
      template: 'auth.json',
      target:'src/config/auth.json'
    })
    await template.generate({
      template: 'connection.js',
      target:'src/database/connection.js'
    })
    await template.generate({
      template: 'forgot_password.html',
      target:'src/resources/mail/auth/forgot_password.html'
    })
    await template.generate({
      template: 'HomeController.js',
      target:'src/controllers/HomeController.js'
    })
    await template.generate({
      template: 'index.js',
      target:'index.js'
    })
    await template.generate({
      template: 'server.js',
      target:'src/server.js'
    })
    await template.generate({
      template: 'mail.json',
      target:'src/config/mail.json'
    })
    await template.generate({
      template: 'mailer.js',
      target:'src/modules/mailer.js'
    })
    await template.generate({
      template: 'routes.js',
      target:'src/routes.js'
    })
    await template.generate({
      template: 'package.json',
      target:'package.json'
    })
    
    success('Directories initialized with success!')
  },

}