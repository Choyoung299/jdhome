const mock = require('mockjs')

module.exports = (req, res) => {

    res.set('Access-Control-Allow-Origin', '*')
    var result = mock.mock({
        errcode: 0,
        msg: 'ok',
        'data|5': [{
            'guid': '@guid',

        }],
        'sgsc|2-5': [{
            'sgsctit|1': [
                '水果', '蔬菜',
                '牛羊猪禽','水产海鲜','蛋类','奶制品','进口乳制品',
                '低温速食','常温速食','休闲零食','饼干/糕点','进口休闲食品',
                '酒','饮料','冲调类','进口冲饮','进口酒水饮料',
                '米面杂粮','油','调味品','干货','进口粮油副食',
                '面部护理','身体护理','洗发护发','口腔洗浴','衣物护理','厨卫清洁','进口个人洗护',
                '家用电器','厨具','宠物生活','纸品湿巾','一次性用品',
                '鲜花','绿植多肉','蛋糕','礼品',
                '中西药品','营养保健','家用器械','计生用品'
            ],
            'sgimg|6': [
                {
                    'img|1': [
                        '/static/img/cla/cla (1).jpg', '/static/img/cla/cla (2).jpg', '/static/img/cla/cla (3).jpg',
                        '/static/img/cla/cla (4).jpg', '/static/img/cla/cla (5).jpg', '/static/img/cla/cla (6).jpg',
                        '/static/img/cla/cla (7).jpg', '/static/img/cla/cla (8).jpg', '/static/img/cla/cla (9).jpg',
                        '/static/img/cla/cla (10).jpg', '/static/img/cla/cla (11).jpg', '/static/img/cla/cla (12).jpg',
                        '/static/img/cla/cla (13).jpg', '/static/img/cla/cla (14).jpg', '/static/img/cla/cla (15).jpg',
                        '/static/img/cla/cla (16).jpg', '/static/img/cla/cla (17).jpg', '/static/img/cla/cla (18).jpg',
                        '/static/img/cla/cla (19).jpg', '/static/img/cla/cla (20).jpg', '/static/img/cla/cla (21).jpg',
                        '/static/img/cla/cla (22).jpg', '/static/img/cla/cla (23).jpg', '/static/img/cla/cla (24).jpg',
                        '/static/img/cla/cla (25).jpg', '/static/img/cla/cla (26).jpg', '/static/img/cla/cla (27).jpg',
                        '/static/img/cla/cla (28).jpg', '/static/img/cla/cla (29).jpg', '/static/img/cla/cla (30).jpg',
                        '/static/img/cla/cla (31).jpg', '/static/img/cla/cla (32).jpg', '/static/img/cla/cla (33).jpg',
                        '/static/img/cla/cla (34).jpg', '/static/img/cla/cla (35).jpg', '/static/img/cla/cla (36).jpg',
                        '/static/img/cla/cla (37).jpg', '/static/img/cla/cla (38).jpg', '/static/img/cla/cla (39).jpg',
                        '/static/img/cla/cla (40).jpg', '/static/img/cla/cla (41).jpg', '/static/img/cla/cla (42).jpg',
                        '/static/img/cla/cla (43).jpg', '/static/img/cla/cla (44).jpg', '/static/img/cla/cla (45).jpg',
                        '/static/img/cla/cla (46).jpg', '/static/img/cla/cla (47).jpg', '/static/img/cla/cla (48).jpg',
                        '/static/img/cla/cla (49).jpg', '/static/img/cla/cla (50).jpg', '/static/img/cla/cla (51).jpg',
                        '/static/img/cla/cla (52).jpg', '/static/img/cla/cla (53).jpg', '/static/img/cla/cla (54).jpg',
                        '/static/img/cla/cla (55).jpg', '/static/img/cla/cla (56).jpg', '/static/img/cla/cla (57).jpg',
                        '/static/img/cla/cla (58).jpg', '/static/img/cla/cla (59).jpg', '/static/img/cla/cla (60).jpg',
                        '/static/img/cla/cla (61).jpg', '/static/img/cla/cla (62).jpg', '/static/img/cla/cla (63).jpg',
                        '/static/img/cla/cla (64).jpg', '/static/img/cla/cla (65).jpg', '/static/img/cla/cla (66).jpg',
                        '/static/img/cla/cla (67).jpg', '/static/img/cla/cla (68).jpg', '/static/img/cla/cla (69).jpg',
                        '/static/img/cla/cla (70).jpg', '/static/img/cla/cla (71).jpg', '/static/img/cla/cla (72).jpg',
                        '/static/img/cla/cla (73).jpg', '/static/img/cla/cla (74).jpg', '/static/img/cla/cla (75).jpg',
                        '/static/img/cla/cla (76).jpg', '/static/img/cla/cla (77).jpg', '/static/img/cla/cla (78).jpg',
                        '/static/img/cla/cla (79).jpg', '/static/img/cla/cla (80).jpg', '/static/img/cla/cla (81).jpg',
                        '/static/img/cla/cla (82).jpg', '/static/img/cla/cla (83).jpg', '/static/img/cla/cla (84).jpg',
                        '/static/img/cla/cla (85).jpg', '/static/img/cla/cla (86).jpg', '/static/img/cla/cla (87).jpg',
                        '/static/img/cla/cla (88).jpg', '/static/img/cla/cla (89).jpg', '/static/img/cla/cla (90).jpg',
                        '/static/img/cla/cla (91).jpg', '/static/img/cla/cla (92).jpg', '/static/img/cla/cla (93).jpg',
                        '/static/img/cla/cla (94).jpg', '/static/img/cla/cla (95).jpg', '/static/img/cla/cla (96).jpg',
                        '/static/img/cla/cla (97).jpg', '/static/img/cla/cla (98).jpg', '/static/img/cla/cla (99).jpg',
                        '/static/img/cla/cla (100).jpg', '/static/img/cla/cla (101).jpg', '/static/img/cla/cla (102).jpg',
                        '/static/img/cla/cla (103).jpg', '/static/img/cla/cla (104).jpg', '/static/img/cla/cla (105).jpg',
                        '/static/img/cla/cla (106).jpg', '/static/img/cla/cla (107).jpg', '/static/img/cla/cla (108).jpg',
                        '/static/img/cla/cla (109).jpg', '/static/img/cla/cla (110).jpg', '/static/img/cla/cla (111).jpg',
                        '/static/img/cla/cla (112).jpg', '/static/img/cla/cla (113).jpg', '/static/img/cla/cla (114).jpg',
                        '/static/img/cla/cla (115).jpg', '/static/img/cla/cla (116).jpg', '/static/img/cla/cla (117).jpg',
                        '/static/img/cla/cla (118).jpg', '/static/img/cla/cla (119).jpg', '/static/img/cla/cla (120).jpg',
                        '/static/img/cla/cla (121).jpg', '/static/img/cla/cla (122).jpg', '/static/img/cla/cla (123).jpg',
                        '/static/img/cla/cla (124).jpg', '/static/img/cla/cla (125).jpg', '/static/img/cla/cla (126).jpg',
                        '/static/img/cla/cla (127).jpg', '/static/img/cla/cla (128).jpg', '/static/img/cla/cla (129).jpg',
                        '/static/img/cla/cla (130).jpg', '/static/img/cla/cla (131).jpg', '/static/img/cla/cla (132).jpg',
                        '/static/img/cla/cla (133).jpg', '/static/img/cla/cla (134).jpg', '/static/img/cla/cla (135).jpg',
                        '/static/img/cla/cla (136).jpg', '/static/img/cla/cla (137).jpg', '/static/img/cla/cla (138).jpg',
                        '/static/img/cla/cla (139).jpg', '/static/img/cla/cla (140).jpg', '/static/img/cla/cla (141).jpg',
                        '/static/img/cla/cla (142).jpg', '/static/img/cla/cla (143).jpg', '/static/img/cla/cla (144).jpg',
                        '/static/img/cla/cla (145).jpg', '/static/img/cla/cla (146).jpg', '/static/img/cla/cla (147).jpg',
                        '/static/img/cla/cla (148).jpg', '/static/img/cla/cla (149).jpg', '/static/img/cla/cla (150).jpg',
                        '/static/img/cla/cla (151).jpg', '/static/img/cla/cla (152).jpg', '/static/img/cla/cla (153).jpg',
                        '/static/img/cla/cla (154).jpg', '/static/img/cla/cla (155).jpg', '/static/img/cla/cla (156).jpg',
                        '/static/img/cla/cla (157).jpg', '/static/img/cla/cla (158).jpg', '/static/img/cla/cla (159).jpg',
                        '/static/img/cla/cla (160).jpg', '/static/img/cla/cla (161).jpg', '/static/img/cla/cla (162).jpg',
                        '/static/img/cla/cla (163).jpg', '/static/img/cla/cla (164).jpg', '/static/img/cla/cla (165).jpg',
                        '/static/img/cla/cla (166).jpg', '/static/img/cla/cla (167).jpg', '/static/img/cla/cla (168).jpg',
                        '/static/img/cla/cla (169).jpg', '/static/img/cla/cla (170).jpg', '/static/img/cla/cla (171).jpg',
                        '/static/img/cla/cla (172).jpg', '/static/img/cla/cla (173).jpg', '/static/img/cla/cla (174).jpg',
                        '/static/img/cla/cla (175).jpg', '/static/img/cla/cla (176).jpg', '/static/img/cla/cla (177).jpg',
                        '/static/img/cla/cla (178).jpg', '/static/img/cla/cla (179).jpg', '/static/img/cla/cla (180).jpg',
                        '/static/img/cla/cla (181).jpg', '/static/img/cla/cla (182).jpg', '/static/img/cla/cla (183).jpg',
                        '/static/img/cla/cla (184).jpg', '/static/img/cla/cla (185).jpg', '/static/img/cla/cla (186).jpg',
                        '/static/img/cla/cla (187).jpg',
                    ],
                    'sgtit|1': [
                        '苹果', '梨', '瓜类', '猕猴桃', '柑桔柚', '更多水果','根茎类','叶菜类','瓜果类','菇菌类','调味类','半成品净菜',
                        '牛肉','羊肉','猪肉','内脏','禽类','鱼类','虾蟹贝类','其他水产','鸡蛋','鸭蛋','其他蛋类','牛奶','酸奶','乳酪类','加味奶','豆浆/豆奶','进口牛奶','进口酸奶','其他乳制品',
                        '火锅丸类','汤圆','水饺/馄饨','速食肉类','冷藏米面制品','速食蛋类','方便面、粉','酱菜类','常温火腿肠','罐头','八宝粥','果酱',
                        '膨化食品','果干蜜饯','肉干肉脯','坚果','巧克力','果冻','硬糖','软糖','口香糖','面包','饼干/威化','传统糕点','饼干/曲奇','进口膨化食品','糖果/巧克力','进口坚果炒货','进口蜜饯果干','其他休闲食品',
                        '啤酒','白酒','洋酒','红酒','黄酒','其他酒','水','碳酸饮料','功能性饮料','茶饮料','果汁','其他饮料','茶叶','咖啡','麦片谷物类','成人奶粉','果珍','其他冲调类','进口茶/蜂蜜','进口咖啡','其他进口冲饮','进口葡萄酒','饮料/矿泉水','其他进口酒',
                        '大米','面粉','挂面','杂粮','调和油','花生油','大豆油','橄榄油','葵花油','其他油','盐/糖/味精','其他调味','酱料、醋','南北干货','水产干货','粉丝/粉条','进口食用油','进口罐头','其他进口速食',
                        '洁面','护肤','面膜','剃须','美妆','沐浴露','身体保养','身体清洁','洗发','护发','染发定型','牙膏','牙刷','牙齿护理','洗衣液','洗衣粉','柔顺剂','洗衣皂','其他助洗用品','衣物除菌剂','消毒液','杀虫用品','地板清洁','洗洁精','油烟净','其他清洁工具','进口面部护理','进口口腔护理','进口沐浴','洗发/护发','其他进口洗护',
                        '家居电器','电池','餐具','锅具/刀具','水杯/水壶','狗粮','猫粮','卫生纸','湿巾','抽纸','垃圾袋','纸杯','一次性餐具',
                        '礼品鲜花','家庭用花','永生花','进口鲜花','婚庆用花','花篮','庆典用花','创意鲜花','花瓶花盆','绿植','多肉','奶油蛋糕','水果蛋糕','其他蛋糕','创意礼品','礼品卡',
                        '感冒用药','补益安神','儿科用药','呼吸道药','男科用药','胃肠用药','耳鼻喉科','外科骨科','心血管药','眼科用药','皮肤用药','妇科用药','肝胆胰类','泌尿科','精神抑郁','女性健康','中老年健康','青少儿童健康','日常检测','辅助器械','日常护理','特殊护理','轮椅拐杖','避孕用品','幸福辅助',
                    ],
                }],
        }],



    })

    res.send(result)
}