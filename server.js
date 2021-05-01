const http=require('http');
const fs=require('fs');
/*var myCss = {
    style : fs1.readFileSync('./style.css','utf8');
}*/
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    const html=fs.readFileSync('index.html');
    const cat=fs.readFileSync('style.css');
    res.end(cat);
    res.end(html);
    app.use(express.static(__dirname + '/public'));
}).listen(3000,()=>{
    console.log('running on 3000');
});