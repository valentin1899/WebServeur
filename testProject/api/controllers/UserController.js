/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var path = require("path");

module.exports = {

      moncompte: function (req, res){
      var data = {};

      data.medata ={
      title: "Bonjour, bienvenue",
      content: "Vous etes connecté"
      };

     data.user = req.user;


     console.log(req.user);

     return res.view("moncompte", data);
},

     uploadavatar : function (req, res){

     var where = {id: req.user.id};

     req.file('avatar').upload({
       dirname: require('path').resolve(sails.config.appPath, 'assets/images/avatar')
     },function (err, uploadedFiles) {
       if (err) return res.negotiate(err);

       console.log(uploadedFiles[0]);
       console.log(path.basename(uploadedFiles[0].fd));


       User.update(where)
               //  .populate('avatarurl')
                 .exec(function (error, user) {
                   console.log(user);
                   data.user = user;
                   return res.view('moncompte', data);
                 });

       return res.json({
         message: uploadedFiles.length + ' file(s) uploaded successfully!'
       });
     });

     }


      };


