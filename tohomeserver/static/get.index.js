module.exports = (req,res) =>{ 
    var result = mock.mock({
        'data|5':[{
            'id|+1':1,
            'guid':'@guid',
            'title':'@ctitle',
            
        }]
    })
}