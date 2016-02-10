var AppRouter = Backbone.Router.extend({
  routes: {"chart/:name":"showChart"},
  showChart: function(name){
    name = decodeURIComponent(name);
/*    this.itemList.buildGraph(name);*/
  }
});