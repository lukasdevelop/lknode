import app from './app'

app.listen(process.env.PORT|| 3333, () => {
  console.log('Server ON at PORT', process.env.PORT)
})
