const {Users} = require('../models/user')
const express = require('express');
const router = express.Router();

// router add data users
router.post(`/`, async (req, res) => {
    let users = new Users({
        name: req.body.name,
        picture: req.body.picture,
        phoneNumber:  req.body.phoneNumber,
        address: req.body.address
    });
    users = await users.save();
    if(!users){
        return res.status(404).send('the Users cannot be created');
    }
    res.send(users);
});

// router All data users
router.get(`/`, async (req, res) => {

    // get all data users from collections
    const usersList =  await Users.find();
    if (!usersList) {
        res.status(500).json({success: false});
    }
    res.status(200).send(usersList);
});

 // localhost:3000/api/v1/contact?name=uus?phoneNumber=081344255
router.get('/', async (req, res) => {
    let filter = {};
    if(req.query.name && req.query.number)
    {
        filter = {
            name: req.query.name.split('.'),
            phoneNumber: req.query.phoneNumber,
        }
    }

    const contact = await Users.find(filter);

    if(!contact) {
        res.status(500).json({success: false})
    }
    res.send(contact);
});

// route Update users
router.put('/:id', async (req, res) => {
    const user = await Users.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            picture: req.body.picture,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        },
        {new: true}
    );
    if (!user) {
        return res.status(500).send('the users cannot be updated');
    }
    res.send(user);
});

// route delete users
router.delete('/:id', (req, res) => {
    Users.findByIdAndRemove(req.params.id).then(users =>{
        if (users) {
            return res.status(200).json({success: true, message: "the user is deleted!"});
        } else {
            return res.status(404).json({success: false, message: "user not found!"});
        }
    }).catch(err => {
        return res.status(404).json({success: false, error: err});
    });
});


// paging
router.get('/:page', async(req, res, next) => {
    const perPage = 9;
    const page = req.params.page || 1;

    Users.find({})
    .skip((perPage * page) - perPage)
    .limit(perPage)
    .exec(function(err, users) {
        Users.count().exec(function(err, count) {
            if (err) return next(err)
            res.render('/', {
                user: users,
                current: page,
                pages: Math.ceil(count/perPage)
            });
        })
    })
});

module.exports = router;