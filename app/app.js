var itemList = new ItemList();
itemList.fetch().then(function(){
  var itemListView = new ItemListView({model: itemList});
  itemListView.render();
  $('#list-body').replaceWith(itemListView.el);
});