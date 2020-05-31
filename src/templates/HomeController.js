const index = (req, res) => {
  let users = ['Lukas', 'Conka']
  
  return res.json({ users})
}

export default {
  index
}

