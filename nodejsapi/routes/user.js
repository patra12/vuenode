const express = require("express");
const router = express.Router();
var session = require('express-session');
const multer = require("multer");
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const getConnection = require('../db/connection');
/*-------------------------------------------------- */
// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy


router.use(bodyParser.json())

router.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

router.use(passport.initialize());

router.use(passport.session());

/*------------------------------------------------- */

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});
var upload = multer({ storage: storage });

router.post("/user_create", upload.single("image"), function (req, res, next) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var fileinfo = req.file.filename;
  var email = req.body.email;
  var phone = req.body.phone;
  var country = req.body.country;
  const queryString =
    "INSERT INTO users (firstname, lastname,image,email,phone,country) VALUES (?, ?, ?, ?, ?, ?)";
  getConnection.query(
    queryString,
    [firstname, lastname, fileinfo, email, phone, country],
    (err, results, fields) => {
      if (err) {
        console.log("Faild to insert: " + err);
        res.sendStatus(500);
        return;
      }
      console.log("Inserted a new user with: ", results.insertId);
      res.end();
    }
  );

  res.end;
});

/*router.post('/profile', function(req,res){
    //const name=req.body.name
    upload(req, res, function(err){
       
        const queryString="INSERT INTO profile (image) VALUES (?)"
    getConnection.query(queryString, [imgx], (err, results, fields) =>{
        if(err){
        }
        res.json({
            success:true,
            message: 'Image uploaded =>'+imgx,
            
        })
    })
})
})*/

// For database connection MYSQL
// function getConnection() {
//   return mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     database: "users"
//   });
// }

// For Testing URL
router.post("/messages", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

// For list user
router.get("/user", (req, res) => {
  console.log("Fetching user id: " + req.params.id);
  const connection = getConnection;
  connection.query("SELECT * FROM Users", (err, rows, fields) => {
    if (err) {
      console.log("Failed to query execution: " + err);
      res.sendStatus(500);
      res.send();
      return;
    }
    console.log("I think we fetched users successfully");
    res.json(rows);
  });
});

// For individual users deatils
router.get("/user/:id", (req, res) => {

  console.log("Fetching user id: " + req.params.id);
  const connection = getConnection;
  const userId = req.params.id;
  const queryString = "SELECT * FROM users WHERE id=?";
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query execution: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched users successfully");
    res.json(rows);
  });
});

// For individual cms deatils
router.get("/cms/:id", (req, res) => {
  console.log("Fetching user id: " + req.params.id);
  const connection = getConnection;
  const userId = req.params.id;
  const queryString = "SELECT * FROM cms WHERE id=?";
  connection.query(queryString, [userId], (err, rows, fields) => {
    if (err) {
      console.log("Failed to query execution: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched users successfully");
    res.json(rows);
  });
});

// For user creation
router.post('/user_create', (req, res) => {
    console.log("Trying to create a new user")
	res.send(req.body);
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const email=req.body.email
    const phone=req.body.phone
    const country=req.body.country
    //const profileImage = req.body.profileImage;
    
      const queryString="INSERT INTO users (firstname, lastname, email, phone, country) VALUES (?, ?, ?, ?, ?)"
    getConnection.query(queryString, [firstname, lastname, email, phone, country ], (err, results, fields) =>{
        if(err){
            console.log("Faild to insert: "+err)
            res.sendStatus(500)
            return
        }
        console.log("Inserted a new user with: ", results.insertId);
          res.end()  
        })
              
    res.send(req.body);
})

// For CMS page list
router.get("/cms", (req, res) => {
  const connection = getConnection;
  connection.query("SELECT * FROM cms", (err, rows, fields) => {
    if (err) {
      console.log("Failed to query execution: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched page successfully");
    res.json(rows);
  });
});

// For Add CMS page if image prasent
router.post("/addcms", upload.single("image"), function (req, res, next) {
  console.log("Trying to create a new page add cms");
  var title = req.body.title;
  var alias = req.body.alias;
  var description = req.body.description;
  var metatitle = req.body.metatitle;
  var metakeywords = req.body.metakeywords;
  var metadescription = req.body.metadescription;
  var image = req.file.filename;
  queryString =
    "INSERT INTO cms (title, alias, description, metatitle, metakeywords, metadescription,image) VALUES ( ?, ?, ?, ?, ?, ?,? )";
  getConnection.query(
    queryString,
    [
      title,
      alias,
      description,
      metatitle,
      metakeywords,
      metadescription,
      image
    ],
    (err, results, fields) => {
      if (err) {
        console.log("Faild to insert: " + err);
        res.sendStatus(500);
        return;
      }
      console.log("Inserted a new user with: ", results.insertId);
      res.end();
    }
  );
  res.end;
});

// // For Add CMS page if image prasent
// router.post("/addcms", upload.single("image"), function (req, res, next) {
//   console.log("Trying to create a new page add cms");
//   var title = req.body.title;
//   var alias = req.body.alias;
//   var description = req.body.description;
//   var metatitle = req.body.metatitle;
//   var metakeywords = req.body.metakeywords;
//   var metadescription = req.body.metadescription;
//   var image = req.file.filename;
//   queryString =
//     "INSERT INTO cms (title, alias, description, metatitle, metakeywords, metadescription,image) VALUES ( ?, ?, ?, ?, ?, ?,? )";
//   getConnection.query(
//     queryString,
//     [
//       title,
//       alias,
//       description,
//       metatitle,
//       metakeywords,
//       metadescription,
//       image
//     ],
//     (err, results, fields) => {
//       if (err) {
//         console.log("Faild to insert: " + err);
//         res.sendStatus(500);
//         return;
//       }
//       console.log("Inserted a new user with: ", results.insertId);
//       res.end();
//     }
//   );
//   res.end;
// });

// For Add CMS page if image not prasent
router.post("/addcmsi", upload.single("image"), function (req, res) {
  console.log("Trying to create a new page add cms");
  var title = req.body.title;
  var alias = req.body.alias;
  var description = req.body.description;
  var metatitle = req.body.metatitle;
  var metakeywords = req.body.metakeywords;
  var metadescription = req.body.metadescription;
  // var image = req.file.filename;
  queryString =
    "INSERT INTO cms (title, alias, description, metatitle, metakeywords, metadescription,image) VALUES ( '"+title+"','"+alias+"','"+description+"',' "+metatitle+"',' "+metakeywords+"','"+metadescription+"','')";
    console.log(queryString);
  getConnection.query(
    queryString,
    (err, results, fields) => {
      if (err) {
        console.log("Faild to insert: " + err);
        res.sendStatus(500);
        return;
      }
      console.log("Inserted a new user with: ", results.insertId);
      res.end();
    }
  );
  res.end;
});



//For edit page individual cms detailse
router.get("/editcms/:id", (req, res) => {
  console.log("Fetching page id: " + req.params.id);
  const connection = getConnection;
  connection.query(
    "SELECT * FROM cms where id=" + req.params.id,
    (err, rows, fields) => {
      if (err) {
        console.log("Failed to query execution: " + err);
        res.sendStatus(500);
        res.end();
        return;
      }
      console.log("I think we fetched page successfully");
      //raw image name from database
      const hold = rows[0].image;
      //modifying json in image field (adding proper url along with image) 
      rows[0].image = "http://localhost:3003/image/" + hold;
      res.json(rows);
    }
  );
});


router.get('/image/:imgName', (req, res) => {
  let current_folder = __dirname;
  let root = current_folder.substr(0, current_folder.length - 7);
  let uploaded_image = root + "/uploads/" + req.params.imgName;
  res.sendFile(uploaded_image);
});

//For edit post value of individual cms detailse with image
router.post("/editpostcmsi/:id", upload.single("image"), function (
  req,
  res,
  next
) {
  const connection = getConnection;
  connection.query(
    "UPDATE cms SET title=?,alias=?,description=?,metatitle=?,metakeywords=?,metadescription=?, image=? where id=?",
    [
      req.body.title,
      req.body.alias,
      req.body.description,
      req.body.metatitle,
      req.body.metakeywords,
      req.body.metadescription,
      req.file.filename,
      req.params.id
    ],
    function (err, results, fields) {
      if (err) {
        console.log("Faild to update: " + err);
        res.sendStatus(500);
        return;
      }
      res.end();
    }
  );
  res.end;
});

//For edit post value of individual cms detailse without image
router.post("/editpostcms/:id", upload.single("image"), function (
  req,
  res,
  next
) {
  const connection = getConnection;
  connection.query(
    "UPDATE cms SET title=?,alias=?,description=?,metatitle=?,metakeywords=?,metadescription=? where id=?",
    [
      req.body.title,
      req.body.alias,
      req.body.description,
      req.body.metatitle,
      req.body.metakeywords,
      req.body.metadescription,
      // req.file.filename,
      req.params.id
    ],
    function (err, results, fields) {
      if (err) {
        console.log("Faild to update: " + err);
        res.sendStatus(500);
        return;
      }
      res.end();
    }
  );
  res.end;
});


//for delete a single cms detailse
router.get('/cmsdel/:id', (req, res) => {
  const connection = getConnection;
  connection.query('DELETE FROM cms WHERE id  = ' + req.params.id, (err, rows) => {
    if (err) {
      console.log(err);
    }
    console.log("deleted");
    res.send("Data has been deleted with ID = " + req.params.id);
  });
});

// For CMS page list
router.get("/cms", (req, res) => {
  console.log("Fetching page id: " + req.params.id);
  const connection = getConnection;
  connection.query("SELECT * FROM cms", (err, rows, fields) => {
    if (err) {
      console.log("Failed to query execution: " + err);
      res.sendStatus(500);
      res.end();
      return;
    }
    console.log("I think we fetched page successfully");
    res.json(rows);
  });
});

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

router.post('/auth', function(request, response) {
  var md5 = require('md5');
	var username = request.body.username;
  var password =request.body.password;
  var crypted = md5(password);
 
  console.log(password);
  console.log(crypted);
  
	if (username && password) {
    var login = "SELECT * FROM users WHERE username = '"+username+"' AND password = '"+crypted+"'";
    console.log(login);
    const connection = getConnection;
		connection.query(login, function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
        //response.redirect('/dashboard');
        response.send(' Correct ');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

router.post("/test",(req,res)=>{
  console.log(req.body);
  console.log(res);
  res.send(req.body.username);
})


module.exports = router;
