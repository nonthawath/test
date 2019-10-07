const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Document = mongoose.model('Document');





router.get('/',(req,res)=>{
    res.render("document/showOrEdit",{
        viewTitle : "Show Document"
    });
});

router.get('/list', (req, res) => {
    Document.find((err, docs) => {
        if (!err) {
            res.render("document/showOrEdit", {
                list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

router.get('/delete/:id', (req, res) => {
    Document.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/document/list');
        }
        else { console.log('Error in employee delete :' + err); }
    });
});


module.exports = router;