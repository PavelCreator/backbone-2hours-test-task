var Item = Backbone.Model.extend({
  defaults: function () {
    return {
      name: "Report",
      description: "Very cool report",
      type: "tabular",
      data: []
    }
  }
});

var ItemView = Backbone.View.extend({
  tagName: 'tr',
  template: _.template(
    '<td><a href="#<%= type %>/<%= data[0] %>&<%= data[1] %>&<%= data[2] %>&<%= data[3] %>&<%= data[4] %>"><%= name %></a></td>'+
    '<td><%= description %></td>'+
    '<td><%= type %></td>'
  ),
  initialize: function(){
    this.model.on('change', this.render, this);
  },
  render: function () {
    this.$el
      .html(this.template(this.model.toJSON()));
  }
});