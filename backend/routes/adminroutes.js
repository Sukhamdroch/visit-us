const router = require('express').Router()
const citycontroller = require("../controllers/citycontroller")
const hotelcontroller = require("../controllers/hotelcontroller")
const locationcontroller = require("../controllers/locationcontroller")
const packagecontroller = require("../controllers/packagecontroller")
const transportcontroller = require("../controllers/transportcontroller")
const dashboardcontroller = require("../controllers/dashboardcontroller")
const usercontroller = require("../controllers/usercontroller")
const multer  = require('multer')

const citystorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/city')
    },
    filename: function (req, file, cb) {
      // console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      // console.log(uniqueSuffix+ file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix+ file.originalname)
    }
  })

  const cityupload = multer({ storage:citystorage })

  
const hotelstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/hotel')
    },
    filename: function (req, file, cb) {
    //   console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(uniqueSuffix+ file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix+ file.originalname)
    }
  })
     const hotelupload = multer({ storage: hotelstorage })

  
const locationstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/location')
    },
    filename: function (req, file, cb) {
    //   console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(uniqueSuffix+ file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix+ file.originalname)
    }
  })
  const locationupload = multer({ storage: locationstorage })


  const packagestorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/package')
    },
    filename: function (req, file, cb) {
    //   console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(uniqueSuffix+ file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix+ file.originalname)
    }
  })

  const packageupload = multer({ storage: packagestorage })
  

  const transportstorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/transport')
    },
    filename: function (req, file, cb) {
    //   console.log(file)
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      console.log(uniqueSuffix+ file.originalname)
      cb(null, file.fieldname + '-' + uniqueSuffix+ file.originalname)
    }
  })

  const transportupload = multer({ storage: transportstorage })



router.post("/login", usercontroller.login)
router.post("/register", usercontroller.register)

router.use(require('../config/middleware'))
// dashboard
router.post("/admindashboard", dashboardcontroller.dashboard)
router.post("/userdashboard", dashboardcontroller.dashboarduser)

//addcity start
router.post("/addcity",cityupload.single('city_image'), citycontroller.addcity)
router.post("/getallcity", citycontroller.getallcity)
router.post("/singlecity", citycontroller.getsingle)
router.post("/updatecity", cityupload.single('city_image'), citycontroller.update)
//addcity end

//addhotel start
router.post("/addhotel",hotelupload.single('hotel_image'), hotelcontroller.addhotel)
router.post("/getallhotel", hotelcontroller.getallhotel)
router.post("/singlehotel", hotelcontroller.getsingle)
router.post("/updatehotel",hotelupload.single('hotel_image'), hotelcontroller.update)
//addhotel end


//addlocation start
router.post("/addlocation", locationupload.single('location_image'), locationcontroller.addlocation)
router.post("/getalllocation", locationcontroller.getalllocation)
router.post("/singlelocation", locationcontroller.getsingle)
router.post("/updatelocation",locationupload.single('location_image'), locationcontroller.update)
//addlocation end

//addpackage start
router.post("/addpackage", packageupload.single('package_image'), packagecontroller.addpackage)
router.post("/getallpackage", packagecontroller.getallpackage)
router.post("/singlepackage", packagecontroller.getsingle)
router.post("/updatepackage",  packageupload.single('package_image'), packagecontroller.update)
//addpackage end

//addtransport start
router.post("/addtransport", transportupload.single('transport_image'), transportcontroller.addtransport)
router.post("/getalltransport", transportcontroller.getalltransport)
router.post("/singletransport", transportcontroller.getsingle)
router.post("/updatetransport", transportupload.single('transport_image'), locationcontroller.update)
//addtransport end

module.exports = router