var ItemList = Backbone.Collection.extend({
  model: Item,
  url: 'server/data.json'
});

var ItemListView = Backbone.View.extend({
  tagName: 'tbody',
  render: function () {
    this.$el
      .append('');
    this.model.models.forEach(this.addOne, this);
  },
  addOne: function (model) {
    var itemView = new ItemView({model: model});
    itemView.render()
    this.$el
      .append(itemView.el);
  }
});