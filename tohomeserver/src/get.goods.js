const mock = require('mockjs')
module.exports = (req, res) => {
    let text = req.query.ctgtext
    res.set('Access-Control-Allow-Origin', '*')
    res.json(
        mock.mock({
            errcode: 0,
            msg: 'ok',
            ctgText: text,
            'count|10-18': 0,
            'data|10': [{
                guid: '@guid',
                text: '@cword(2,5)',
                srtit: '@cword(10,15)',
                'price|6-15.2': 0,
                'delpri|16-30.2': 0,
                'store|1-10': 1,
                'img|1': [
                    '/static/img/shopimg/sr-logo(1).jpg',
                     '/static/img/shopimg/sr-logo (2).jpg', '/static/img/shopimg/sr-logo (3).jpg',
                    '/static/img/shopimg/sr-logo (4).jpg', '/static/img/shopimg/sr-logo (5).jpg', '/static/img/shopimg/sr-logo (6).jpg',
                    '/static/img/shopimg/sr-logo (7).jpg', '/static/img/shopimg/sr-logo (8).jpg', '/static/img/shopimg/sr-logo (9).jpg',
                    '/static/img/shopimg/sr-logo (10).jpg', '/static/img/shopimg/sr-logo (11).jpg', '/static/img/shopimg/sr-logo (12).jpg',
                    '/static/img/shopimg/sr-logo (13).jpg', '/static/img/shopimg/sr-logo (14).jpg', '/static/img/shopimg/sr-logo (15).jpg',
                    '/static/img/shopimg/sr-logo (16).jpg', '/static/img/shopimg/sr-logo (17).jpg', '/static/img/shopimg/sr-logo (18).jpg',
                    '/static/img/shopimg/sr-logo (19).jpg', '/static/img/shopimg/sr-logo (20).jpg', '/static/img/shopimg/sr-logo (21).jpg',
                    '/static/img/shopimg/sr-logo (22).jpg', '/static/img/shopimg/sr-logo (23).jpg', '/static/img/shopimg/sr-logo (24).jpg',
                    '/static/img/shopimg/sr-logo (25).jpg', '/static/img/shopimg/sr-logo (26).jpg', '/static/img/shopimg/sr-logo (27).jpg',
                    '/static/img/shopimg/sr-logo (28).jpg', '/static/img/shopimg/sr-logo (29).jpg', '/static/img/shopimg/sr-logo (30).jpg',
                    '/static/img/shopimg/sr-logo (31).jpg', '/static/img/shopimg/sr-logo (32).jpg', '/static/img/shopimg/sr-logo (33).jpg',
                    '/static/img/shopimg/sr-logo (34).jpg', '/static/img/shopimg/sr-logo (35).jpg', '/static/img/shopimg/sr-logo (36).jpg',
                    '/static/img/shopimg/sr-logo (37).jpg', '/static/img/shopimg/sr-logo (38).jpg', '/static/img/shopimg/sr-logo (39).jpg',
                    '/static/img/shopimg/sr-logo (40).jpg', '/static/img/shopimg/sr-logo (41).jpg', '/static/img/shopimg/sr-logo (42).jpg',
                    '/static/img/shopimg/sr-logo (43).jpg', '/static/img/shopimg/sr-logo (44).jpg', '/static/img/shopimg/sr-logo (45).jpg',
                    '/static/img/shopimg/sr-logo (46).jpg', '/static/img/shopimg/sr-logo (47).jpg', '/static/img/shopimg/sr-logo (48).jpg',
                    '/static/img/shopimg/sr-logo (49).jpg', '/static/img/shopimg/sr-logo (50).jpg'

                ],
            }],
        })
    )
}