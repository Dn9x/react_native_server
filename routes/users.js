var express = require('express');
var router = express.Router();

var users = require('./data.json');

router.get('/users', function(req, res, next) {
    var page = 1;
    var limit = 100;
    var sort = 'name';
    var keyword = '';

    if (req.query.page) {
        page = req.query.page;
    }

    if (req.query.sort) {
        sort = req.query.sort;
    }

    if (req.query.q) {
        keyword = req.query.q;
    }

    var _users = users;

    //过滤
    if (keyword) {
        _users = users.filter(function(item, index) {
        	var name = item.name.toLowerCase();
        	keyword = keyword.toLowerCase();

            return name.indexOf(keyword) != -1;
        });
    }

    //排序
    if (sort) {
        _users.sort(function(a, b) {
            return (a[sort] < b[sort]) ? -1 : 1;
        });
    }

    //分页
    var result = _users.slice((page - 1) * limit, page * limit);

    res.status(200).json(result);
});

module.exports = router;
