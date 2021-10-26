/** 
 *  @fileOverview Search and Render Results.
 *
 *  @author       KAMINO
 *
 *  @requires     none
 * 
 */

/* Term input */
const search_terms_input = document.getElementById("search-terms-input");

/* Checkbox to select fields */
const activity_chckbx = document.getElementById("activity_chckbx");
const subactivity_chckbx = document.getElementById("subactivity_chckbx");
const task_chckbx = document.getElementById("task_chckbx");
const method_chckbx = document.getElementById("method_chckbx");
const keywords_chckbx = document.getElementById("keywords_chckbx");
const syntax_chckbx = document.getElementById("syntax_chckbx");
const sources_chckbx = document.getElementById("sources_chckbx");

/* Checkbox for advanced options */
const prefix_chckbx = document.getElementById("prefix_chckbx");
const fuzzy_chckbx = document.getElementById("fuzzy_chckbx");

/* Get term input */
var get_search_terms = function() {
    return search_terms_input.value;
}

// Get state of checkboxes
var get_search_fields = function() {

    let fields = [];

    if (activity_chckbx.checked) { fields.push('ACTIVITY') };
    if (subactivity_chckbx.checked) { fields.push('SUBACTIVITY') };
    if (task_chckbx.checked) { fields.push('TASK') };
    if (method_chckbx.checked) { fields.push('TITLE') };
    if (keywords_chckbx.checked) { fields.push('KEYWORDS') };
    if (syntax_chckbx.checked) { fields.push('SYNTAX') };
    if (sources_chckbx.checked) { fields.push('SOURCES') };

    return fields;

}

var get_prefix = function() {

    return prefix_chckbx.checked;

}

var get_fuzzy = function() {

    return fuzzy_chckbx.checked;

}

/* Radio for boolean parameter */
var search_boolean = "AND"; // default
var set_boolean = function(boolean) {
    search_boolean = boolean;
}

var get_boolean = function() {
    return search_boolean;
}


/* Search submit button */
const search_submit = document.getElementById("search-submit");
/* Event handler for click */
search_submit.addEventListener("click", function() { 

    let terms = get_search_terms();
    let fields = get_search_fields();

    let pre = get_prefix()
    let bool = get_boolean();
    let fuz = get_fuzzy();
    
    console.log('Searching for: ' + get_search_terms());
    console.log(' in fields: ' + get_search_fields());

    console.log('Prefix: ' + get_prefix());
    console.log('Boolean: ' + get_boolean());
    console.log('Fuzzy: ' + get_fuzzy());

    run_search(terms, fields, pre, bool, fuz);

});

/* Reset submit button */
const reset_submit = document.getElementById("reset-submit");
search_submit.addEventListener("click", function() { 


});

/* Radio for boolean parameter */
var search_view = "table"; // default
var set_view = function(view) {
    search_view = view;
}

var get_view = function() {
    return search_view;
}

const search_info = document.getElementById("search-info");