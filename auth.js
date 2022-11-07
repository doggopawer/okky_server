import jwt from "jsonwebtoken";

const secretKey = 'nmu21y4%Hh&KhfW3jlb7a!@4sGoF2aR3';

export function createToken(email) {
    return jwt.sign({
        email
    }, secretKey);
}

export function verifyToken(token) {
    try {
        var decoded = jwt.verify(token, secretKey);
        console.log("해독완료",decoded);
        return true;
    } catch(err) {
        // err
        console.log(err);
        return false;
    }
}

