/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

  $('#alertMe').click(function(e) {

    e.preventDefault();

    $('#successAlert').slideDown();

  });

  //disable default function of a link
  $('a.pop').click(function(e) {
    e.preventDefault();
  });

  $('a.pop').popover();

  //selecting attributes
  $('[rel="tooltip"]').tooltip();

});
