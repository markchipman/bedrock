/*!
 * Submit Form directive.
 *
 * Copyright (c) 2012-2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([], function() {

'use strict';

/* @ngInject */
function factory() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // manually prevent form default action
      element.closest('form').bind('submit', function(e) {
        e.preventDefault();
      });

      // submit form on button click or enter press
      element.bind('click', function(e) {
        e.preventDefault();
        element.closest('form').submit();
      });
      $(':input', element.closest('form')).bind('keypress', function(e) {
        if(e.which === 13) {
          e.preventDefault();
          element.closest('form').submit();
        }
      });
    }
  };
}

return {submitForm: factory};

});