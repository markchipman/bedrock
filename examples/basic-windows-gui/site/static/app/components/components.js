/*!
 * Components module.
 *
 * Copyright (c) 2014 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Dave Longley
 */
define([
  'angular',
  'app/components/example/example',
  'bedrock/app/components/fade/fade',
  'bedrock/app/components/feedback/feedback',
  'bedrock/app/components/modal/modal',
  'bedrock/app/components/placeholder/placeholder',
  'bedrock/app/components/popover-template/popover-template',
  'bedrock/app/components/spinner/spinner',
  'bedrock/app/components/submit-form/submit-form',
  'bedrock/app/components/tabs/tabs',
  'bedrock/app/components/util/util'
], function(angular) {

'use strict';

angular.module('app.components', [
  'app.example',
  'app.fade',
  'app.feedback',
  'app.modal',
  'app.placeholder',
  'app.popoverTemplate',
  'app.spinner',
  'app.submitForm',
  'app.tabs',
  'app.util'
]);

});
