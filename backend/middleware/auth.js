import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    // Extract token from the "Authorization" header (e.g., "Bearer <token>")
    
    const token = req.headers.authorization?.split(" ")[1]; 

    // If no token exists, return a 401 Unauthorized response
    if (!token) {
        return res.status(401).json({ success: false, message: "Not Authorized. Please login again." });
    }

    try {
        // Verify the token using the secret key from environment variables
        const token_decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach decoded user data (e.g., userId) to the request object
        req.body.userId = token_decoded.id; // It's a good practice to store user info in `req.user`

        // Proceed to the next middleware or route handler
        next();

    } catch (error) {
        // If there's an error in token verification, return a 401 Unauthorized response
        console.error(error);
        return res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
};

export default authUser;
