const Package = require("../models/packagemodel")
const City = require("../models/citymodel")
const Hotel = require("../models/hotelmodel")
const Transport = require("../models/transportmodel")

dashboard = async (req, res) => {
    totalpackage= 0
    totalcity = 0
    totalhotel = 0
    totaltransport = 0


    await Package.countDocuments().then(packagecount => {
        totalpackage = packagecount
    })

    await City.countDocuments().then(citycount => {
        totalcity = citycount
    })

    await Hotel.countDocuments().then(hotelcount => {
        totalhotel = hotelcount
    })

    await Transport.countDocuments().then(transportcount => {
        totaltransport = transportcount
    })


    res.json({
        status: 200, success: true, total_packages: totalpackage, total_citys: totalcity, total_hotels: totalhotel, total_transports: totaltransport,
    })
}

dashboarduser = async (req, res) => {
    totalpackage= 0
    totalcity = 0
    totalhotel = 0
    totaltransport = 0


    await Package.countDocuments().then(packagecount => {
        totalpackage = packagecount
    })

    await City.countDocuments().then(citycount => {
        totalcity = citycount
    })

    await Hotel.countDocuments().then(hotelcount => {
        totalhotel = hotelcount
    })

    await Transport.countDocuments().then(transportcount => {
        totaltransport = transportcount
    })


    res.json({
        status: 200, success: true, total_packages: totalpackage, total_citys: totalcity, total_hotels: totalhotel, total_transports: totaltransport,
    })
}
module.exports = {
    dashboard,
    dashboarduser
}