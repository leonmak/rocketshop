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
// pass message from router to template. used as {{message}}


Router.route("/about",{
    name:"homeAbout",
})

Router.route("/contact",{
    name:"homeContact",
})

Router.route("/products/:sku",{
    name:"productsShow",
// in products/show.html
    data:function(){
        return Products.findOne({sku: this.params.sku});
// findOne returns the product object from the databse, like {message:'..'}
// findOne is defined in products.js
    }
});
Router.route("/vendors/:slug",{
    name:"vendorsShow",
    data:function(){
        return Vendors.findOne({slug: this.params.slug});
    }
});

Router.route("/cart",{
    name:"cartShow"
    // data:function(){
    //     return Carts.getCard(userkey);// WARNING usekey is GLOBAL VAR
    // }
});
