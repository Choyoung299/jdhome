const mock = require('mockjs')
module.exports = (req, res) => {
    res.set('Access-Control-Allow-Origin', '*')
    res.json(
        mock.mock({
            errcode: 0,
            msg: 'ok',
            'data|10-18': [
                {
                    guid: '@guid',
                    'text': '@cword(4)',
                    'childrens|5': [
                        {
                            guid: '@guid',
                            'text': '@cword(2,4)',
                        }
                    ]
                }

            ]
        })
    )
}