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
/*  events: {
    'change input':'toggleStatus'
  },*/
  template: _.template(
    '<td><a href="/<%= type %>/<%= name %>"><%= name %></a></td>'+
    '<td><%= description %></td>'+
    '<td><%= type %></td>'
  ),
  initialize: function(){
    this.model.on('change', this.render, this);
  },
/*  toggleStatus: function () {
    if (this.model.get('status') === 'incomplete') {
      this.model.set({"status":"complete"});
    } else {
      this.model.set({"status":"incomplete"});
    }
    this.model.save();
  },*/
  render: function () {
    this.$el
      .html(this.template(this.model.toJSON()));
  }
});