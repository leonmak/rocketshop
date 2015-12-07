Router.configure({
    layoutTemplate: 'layout', //layout.html
    loadingTemplate: 'loading',
    notfFoundTemplate:'notFound'
})

Router.route("/",{
    name:"homeIndex",
    data: function(){
        return{
            message:"Welcome to the Rocket Shop"
        }
    }
})
// pass message from router to template


Router.route("/about",{
    name:"homeAbout",
    data: function(){
        return{
            message:"Welcome to the Rocket Shop"
        }
    }
})

Router.route("/contact",{
    name:"homeContact",
    data: function(){
        return{
            message:"Welcome to the Rocket Shop"
        }
    }
})
