/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 17-10-28
 * Time: 下午9:02
 * To change this template use File | Settings | File Templates.
 */

var BlogDao = require("../dao/BlogDao"),
    Blog = require("../models");
exports.list = function (req, res) {
//    BlogDao.create(new Blog({title:"njblog"+Math.random()*1000,content:"miao love node"}),function(error){
//        console.log(error);
//    })
//    BlogDao.getAll(function(err,data){
//        console.log(data[1].title);
//    })
    BlogDao.getAll(function (err, blogs) {
        res.send(blogs);
    });
};