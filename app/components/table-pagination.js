import Ember from 'ember';

Ember.Application.TablePagination = Ember.Component.extend({
  classNames: ["pagination"],
  pages: null,
  currentPage: null,
  isFirstPage: false,
  isLastPage: false,
  meta: null,
  selectedPage: 0,
  didInsertElement: function(){
    $(document).on('keyup', { _self: this }, this.paginate);
  },
  willDestroyElement() {
    this._super(...arguments);
    $(document).off('keyup.erado_pagination');
  },
  paginate: function(event) {
    var self = event.data._self;
    switch(event.keyCode) {
      case 37:
        self.sendAction('onPreviousPageClicked');
        break;
      case 39:
        self.sendAction('onNextPageClicked');
        break;
    }
  },
  actions: {
    firstPage: function() {
      this.sendAction('onFirstPageClicked');
    },
    lastPage: function() {
      this.sendAction('onLastPageClicked');
    },
    nextPage: function() {
      this.sendAction('onNextPageClicked');
    },
    previousPage: function() {
      this.sendAction('onPreviousPageClicked');
    },
    goToPage: function(page) {
      this.set('selectedPage', page);
      this.sendAction('onGoToPageClicked');
    }
  }
});

export default Ember.Application.TablePagination;
