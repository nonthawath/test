const mongoose = require('mongoose');

var documentSchema = new mongoose.Schema({
    count:{
        type: String,
    },
    fullName: {
        type: String,
        required: 'โปรดระบุชื่อนามสกุลให้ถูกต้อง'
    },
    date: {
        type: String,
    },
    time: {
        type: String
    },
    typeCustomer: {
        type: String
    },
    total: {
        type: String
    },
    slipNumber: {
        type: String
    }
});

//กำหนดชื่อของ documentSchema ว่า Document
mongoose.model('Document', documentSchema);
