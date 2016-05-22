var express=require('express');
var app=express();
var handlebar="";
handlebars=require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
app.use('/app',express.static(__dirname+ '/app'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));

app.set('port',process.env.PORT||3000);
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.render('home');
});

app.get('/sale',function(req,res){
    res.render('sale');
});

app.get('/contact',function(req,res){
    res.render('contact');
});
app.get('/Post_Sale',function(req,res){
    res.render('Post_Sale');
});
app.listen(app.get('port'),function(){
   console.log('listening in port'); 
}); 