import jwt, { decode } from 'jsonwebtoken'
import authConfig from '../config/auth.json'

export default (req, res, next) => {
  const authHeader = req.headers.authorization
  if(!authHeader)
    return res.status(401).send({error: "No token provided"})

  const parts = authHeader.split(' ')
  if(!parts.length === 2)
    return res.status(401).send({ error: 'Token error' })
  const [scheme, token] = parts

  if(!/^Baerer$/i.test(scheme))
    return res.status(401).send({error: 'Token malformatted '})

jwt.verify(token, authConfig.secret, (err, decode) => {
  if(err) return res.status(401).send({error: 'Token invalid'})
  req.userId = decode.id
  return next()

})
}
