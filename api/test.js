module.exports = (req,res) => {
    if(req.method === 'GET'){
        res.send('EMAIL SECTION HITTING with GET')
    } else {
        res.send('INVALID 404')
    }
}