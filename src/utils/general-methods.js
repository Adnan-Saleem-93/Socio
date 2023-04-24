import jwt_decode from 'jwt-decode'

export const parseJWT = (token) => {
  var decodedToken = jwt_decode(token)
  return decodedToken
}
