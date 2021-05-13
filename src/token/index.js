import jwt from 'jsonwebtoken';

function decodeJWT(token){
    return jwt.decode(token);
}

export { decodeJWT };
