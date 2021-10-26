/** 
 *  @fileOverview Clone a collection.
 *
 *  @author       UNITED NATIONS
 *  @author       BTA-AVT
 *
 *  @requires     Vanilla
 * 
 */

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})