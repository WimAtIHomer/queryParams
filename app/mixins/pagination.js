import Ember from 'ember';

var PaginationMixin = Ember.Mixin.create({
  queryParams: ['page', 'sort', 'direction'],
  page: 1,
  actions: {
    nextPage: function () {
      if (!this.get('isLastPage')) {
        this.goToPage(this.get('meta')['number'] + 2);
      }
    },
    previousPage: function () {
      if (!this.get('isFirstPage')) {
        this.goToPage(this.get('meta')['number']);
      }
    },
    sortColumn: function (column, direction) {
      this.set('sort', column);
      this.set('direction', direction);
    },
    goToPage: function(page){
      this.goToPage(page);
    },
    goToSelectedPage: function(){
      this.goToPage(this.page);
    }
  },
  goToPage: function (pageNumber) {
    this.set('page', pageNumber);
  },
  currentPage: function () {
    if (typeof this.get('meta') !== 'undefined') {
      return this.get('meta')['number'] + 1;
    }
  }.property('meta.number'),
  totalPages: function () {
    if (typeof this.get('meta') !== 'undefined') {
      return this.get('meta').totalPages;
    }
  }.property('meta.totalPages'),
  isFirstPage: function () {
    if (typeof this.get('meta') !== 'undefined') {
      return this.get('meta').firstPage;
    }
  }.property('meta.firstPage'),
  isLastPage: function () {
    if (typeof this.get('meta') !== 'undefined') {
      return this.get('meta').lastPage;
    }
  }.property('meta.lastPage'),
  pages: function() {
    var pages = [];
    if (typeof this.get('meta') !== 'undefined') {
      var number = this.get('meta')['number'];
      var totalPages = this.get('meta')['totalPages'];
      if ((number - 2) >= 0) {
        pages.push(number - 1);
      }
      if ((number - 1) >= 0) {
        pages.push(number);
      }
      pages.push(number + 1);
      if ((number + 1) <= (totalPages - 1)) {
        pages.push(number + 2);
      } else if ((number - 3) >= 0) {
        pages.unshift(number - 2);
      }
      if ((number + 2) <= (totalPages - 1)) {
        pages.push(number + 3);
      } else if ((number - 4) >= 0) {
        pages.unshift(number - 3);
      }
      if (pages.length < 5 && (number + 3) <= (totalPages - 1)) {
        pages.push(number + 4);
      }
      if (pages.length < 5 && (number + 4) <= (totalPages - 1)) {
        pages.push(number + 5);
      }
    }
    return pages;
  }.property('meta.totalPages', 'meta.number')
});

export default PaginationMixin;
