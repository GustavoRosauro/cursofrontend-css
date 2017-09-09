//create a Browsersync instance
var bs = require("browser-sync").create();
const exec = require("child_process").exec
//listen to change enevent on  HTML and reload
bs.watch("*html").on("change",bs.reload);
//Provide a callback to capture ALL events to CSS
//files - then filter for 'change' and reload all
//css files on the page.
bs.watch("css/*.css", function (event, file)
{
    if(event === "change")
        {
            bs.reload("*.css");
        }
} );
    bs.watch("scss/*.scss", function(event, file){
        if(event === "change")
            {
                console.log('build css...');
                exec('npm run build-css').unref()
            }
    });
    //Now init the Browsersync server
    bs.init({
        server:{
        baseDir:"./",
        serverStaticOptions:{
            extensions:["html"]
        }    
    }
    },()=>{
        console.log('inited');
      
    });