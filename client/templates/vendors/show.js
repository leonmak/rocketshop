Template.vendorsShow.helpers({
    products: function(){
        return Products.find({"vendor.id": this.id});
        //this is scoped to vendor object returned from routes data call
    }
});
