var OrdersModel = require("./../models").Orders;

exports.show = function(req, res) {

	OrdersModel.find({},
		function(err, orders) {
			if (err)
				return res.json({
					err: err
				});
			if (!orders) {
				return res.json({
					err: '该电影票未录入'
				});
			}
			console.log(orders);
			res.json(orders);
		});
	//    res.render('index', { title:'NJBlog.' });

};

exports.create = function(req, res) {
	var createOrder = new OrdersModel(req.body);
	OrdersModel.findOne({
		ticket_id: req.body.ticket_id
	}, function(err, order) {
		if (err)
			return res.json({
				err: err
			});
		if (order) {
			return res.json({
				err: "订单已经存在"
			});
		}
		createOrder.save(function(err, order) {
			if (err) {
				return res.json({
					err: err
				});
			}
			//req.session["user"] = user;
			console.log("购买成功！");
			res.json();
		});
	});

}