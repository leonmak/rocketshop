Router.configure({
    layoutTemplate: 'layout', //layout.html
    loadingTemplate: 'loading',
    notfFoundTemplate:'notFound'
})

Router.route("/",{ // yield checks url then displays layout
    name:"homeIndex",
    data: function(){
        return{
            message:"Welcome to Rocket Shop"
        }
    }
})
// pass message from router to template


Router.route("/about",{
    name:"homeAbout",
    data: function(){
        return{
            message:"About Rocket Shop"
        }
    }
})

Router.route("/contact",{
    name:"homeContact",
    data: function(){
        return{
            message:"Contact Rocket Shop"
        }
    }
})
