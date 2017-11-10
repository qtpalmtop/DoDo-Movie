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
    comment_id: {
        type: Schema.ObjectId
    },
    user_id: {
        type: Schema.ObjectId,
        ref: 'Users'
    },
    comment: String,
    film_id: {
        type: Schema.ObjectId,
        ref: 'Films'
    },
    pub_time: {
        type: Date,
        default: Date.now
    },
    pub_author: String
});

mongoose.model('Comments', schema);