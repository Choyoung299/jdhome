const mock = require('mockjs')

module.exports = (req, res) => {

    res.set('Access-Control-Allow-Origin', '*')
    var result = mock.mock({
        errcode: 0,
        msg: 'ok',
        'data|5': [{
            'id|+1': 1,
            'guid': '@guid',
            'title': '@ctitle',
            'star|3-5': '★',
            'src|1': [
                'static/img/varimg01.png',
                'static/img/varimg02.png',
                'static/img/varimg03.png',
                'static/img/varimg04.jpg',
                'static/img/varimg05.jpg',
                'static/img/varimg06.png',
                'static/img/varimg07.jpg',
                'static/img/varimg08.jpg',
                'static/img/varimg09.jpg',
                'static/img/varimg10.jpg',
            ],
            'cps|1-10': [{
                'cpa|1': [
                    '满减', '满赠', '折扣', '首单', '运费', '返券'
                ],
                'cpb|1': [
                    '蓝月亮爆款满50减10',
                    '高露洁个护满40减10',
                    '立白洗衣液满50减10',
                    '益海米面油满100减10',
                    '榄菊防蚊满30减5',
                    '满120减60,满69减30,满60减30,满40减20,满40减18',
                    '8.8折劵,7.0折劵,7.0折劵,满40减12,满59减12  ',
                    '满69减30,满49减20,满39减20,满39减15,满28减8',
                    '满79减30,满39减20,满59减20,满39减15',
                    '满99减30,满68减20,满68减20,满30减15,满39减15'
                ],
                'color|1': [
                    'background:#5FBC65', 'background:#FF6C57', 'background:#FFA800', 'background:#5FBC65', 'background:#5CA7FF'
                ]
            }],
            'qfs|2000-8000': 2589
        }],
        'sear|1': [
            '零食', '酸奶', '饼干', '饮料', '牛奶', '巧克力', '薯片', '可乐', '火腿肠', '方便面', '面包', '卫生巾'
        ],
        'list|1': [{
            'list_tit|1': '@ctitle',
            'list_text|1': '@cword(4,8)',
            'list_price|6-15.2': 0,
            'list_img|1': [{
                'limg1': [
                    'static/img/list1.png',
                    'static/img/list2.png',
                    'static/img/list3.png',
                    'static/img/list4.png',
                    'static/img/list5.png'
                ]
            }
            ],

        }]


    })

    res.send(result)
}