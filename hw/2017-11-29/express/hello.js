module.exports = function(req, res){
    res.write(req.info + "\n");
    res.write(req.mid + "\n");
    res.end('Hello\n');
}
