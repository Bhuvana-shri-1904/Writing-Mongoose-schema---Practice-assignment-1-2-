const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true
      },
      roles: {
        Type: [String],
        default: ['user', 'admin'] 
      },
      Profile: {
        firstname: {
            type: String,  
        },
        lastname: {
            type: String,
        },
        age: {
            type: Number,
        },
      },
      lastLogin: {
        type: Date,
      },
    })

    
module.export = module.mongoose('users',userSchma);

