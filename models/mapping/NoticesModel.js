/**
 * Created with Sublime Text3.
 * User: 李霖
 * Date: 17-10-28
 * Time: 下午4:54
 * To change this template use File | Settings | File Templates.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    notice_id: {
        type: Schema.ObjectId
    },
    title: String,
    content: String
});

mongoose.model('Notices', schema);