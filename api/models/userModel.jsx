// 3rd Party Imports
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

/** ================================|| userModel ||=================================== 
 
        -   Defines a Mongoose schema for User 
        -   Implements automatic password hashing on save and supports password 
            validation against the hashed password in the database. 
        -   Utilizes bcryptjs for secure password handling. **/

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {      // Mongoose pre-save middleware. This function runs automatically before a document is saved to the database.
    if (!this.isModified('password')) {             // Checks if the password field has been modified
        next();                                     // Prevents re-hashing a password that has already been hashed.
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;