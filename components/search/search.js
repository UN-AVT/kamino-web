/** 
 *  @fileOverview Search and Render Results.
 *
 *  @author       KAMINO
 *
 *  @requires     Lodash
 *  @requires     MiniSearch
 * 
 */

/* Search index definition */
// "id","ACTIVITY","SUBACTIVITY","TASK","METHODS","TITLE","URL","KEYWORDS","COMMANDS","SOURCES","ICON","LAST_UPDATE"
let search_index = new MiniSearch({
    fields: ["ACTIVITY", "SUBACTIVITY", "TASK", "METHODS", "TITLE", "KEYWORDS","SYNTAX","SOURCES"], // fields to index for full-text search
    storeFields: ["ACTIVITY", "SUBACTIVITY", "TASK", "METHODS", "TITLE", "URL","KEYWORDS","SYNTAX","SOURCES","LAST_UPDATE"] // fields to return with search results
})

/* Take in the entire catalog and make search index */
var index_results = function(res) {
    
    search_index.addAll(res)

}

var render_result = function (catalog) {
    
    // "id","ROOT","ACTIVITY","SUBACTIVITY","TASK","FILE","TITLE","ICON","URL","KEYWORDS","SYNTAX","SOURCES","LAST_UPDATE"
    var parent = document.getElementById("search-result");
    let view = get_view();

    let table_template_header = `
        <div>
            <table class="table table-striped table-hover table-bordered" >
            <tr>
                <th></th>
                <th>TITLE</th>
                <th>METHODS</th>
                <th>TASK</th>
                <th>SUBACTIVITY</th>
                <th>ACTIVITY</th>
                <th>CONTENT</th>
            </tr>
        `

    // Records will be appended in loop
    let table_template_data = ``

    let table_template_footer = `
            </table>
        </div>
    `

    let i = 0;
    const len = catalog.length;
    for (i; i < len; i++) {

        let content_url = catalog[i].URL;
        
        let activity = catalog[i].ACTIVITY.toLowerCase();
        let subactivity = catalog[i].SUBACTIVITY.toLowerCase();
        
        let icon = 'assets/symbols/'+ activity + '-' + subactivity + '.svg';
        
        let task = catalog[i].TASK.toLowerCase();
        // let method = catalog[i].METHOD;
        let method = catalog[i].METHODS.toLowerCase();

        let title = _.truncate(_.startCase(catalog[i].TITLE), {
            'length': 48,
            'separator': ' '
        });

        // let keywords = catalog[i].KEYWORDS;
        let keywords = catalog[i].KEYWORDS.toLowerCase();
        let keyword_array = keywords.split(" ");

        // let syntax = catalog[i].SYNTAX;
        let syntax = catalog[i].SYNTAX.toLowerCase();
        let syntax_array = syntax.split(" ");
        
        // let sources = catalog[i].SOURCES;
        let sources = catalog[i].SOURCES.toLowerCase();
        let sources_array = sources.split(" ");

        table_template_data += `
            <tr>
                <td style="text-align: center"><img src="${icon}" alt="" height="28"></td>
                <td>${title}</td>
                <td>${method}</td>
                <td>${task}</td>
                <td>${subactivity}</td>
                <td>${activity}</td>
                <td style="text-align: center"><a href="${content_url}" title="GO" target="_blank" rel="noopener noreferrer">🔗</a></td>
            </tr>
        `

        let card_template = `
        <div>
            <p style="margin-bottom: 5px; float: right;"><img src="${icon}" alt="" height="28"></p>
            <p class="fnt-norm-r italic card-text fnt-medium border-bottom-thick">✱ ${title}</p>
            <p class="fnt-semcon-m card-text fnt-large border-bottom-thin">${method}</p>
            <p class="fnt-semcon-m card-text fnt-large border-bottom-thin">${activity} ↦ ${subactivity} ↦ ${task}</p>
            <details class="tip" style="margin-top: 10px;">
            <summary class="italic">keywords</summary>
            <p class="fnt-norm-r">
                ${keyword_array.map(l => `
                <span class="badge bg-secondary fnt-norm-r"> ${l} </span>
            `).join("\n")}
            </p>
            </details>
            <details class="reminder">
            <summary class="italic">syntax</summary>
            <p class="fnt-norm-r">
                ${syntax_array.map(l => `
                <span class="badge bg-secondary fnt-norm-r"> ${l} </span>
            `).join("\n")}
            </p>
            </details>
            <details class="technical">
            <summary class="italic">sources</summary>
            <p class="fnt-norm-r">
                ${sources_array.map(l => `
                <span class="badge bg-secondary fnt-norm-r"> ${l} </span>
            `).join("\n")}
            </p>
            </details>
            <p><span style="float: right"><a href="${content_url}" title="GO" target="_blank" rel="noopener noreferrer">🔗</a></span></p>
        </div>`;

        var card = document.createElement("div");
        
        if ( view === "card" ) {
            parent.classList.remove('table-view');
            parent.classList.add('card-view');
            card.classList.remove('table-item');
            card.setAttribute("class", "card-item");
            card.innerHTML = card_template;
        
        }

        parent.appendChild(card);
    }

    let table_template = table_template_header + table_template_data + table_template_footer;
    if (view === 'table') {
        parent.classList.remove('card-view');
        parent.classList.add('table-view');
        parent.innerHTML = table_template;
    }
}

var run_search = function(terms, fields, prfx, bool, fuz) {

    clear_div('search-result');
    console.log("running search");

    // Create search query
    let idx_search = search_index.search(terms, { fields: fields, prefix: prfx, combineWith: bool, fuzzy: 0.2 })
    console.log(idx_search);
    
    if (idx_search.length > 0 ) {
        search_info.setAttribute("class", "alert alert-success");
    } else {
        search_info.setAttribute("class", "alert alert-warning");
    }

    search_info.innerHTML = '<p class="fnt-norm-r">Searching for <strong><u>' 
                            + terms 
                            + '</u></strong> in <strong><u>' 
                            + fields 
                            + "</u></strong> with prefix <strong><u>" 
                            + prfx.toString().toUpperCase() 
                            + '</u></strong> using the boolean <strong><u>' 
                            + bool 
                            + '</u></strong> operator and including <i><u>fuzzy</u></i> matches.</p>' 
    search_info.innerHTML += '<p class="fnt-norm-r">The search returned <strong>' + idx_search.length + '</strong><u> matches.</u></p>'

    render_result(idx_search);
}

var run_sort = function() {

}

/* Initial load of catalog */
d3.csv("models/kamino-content-index.csv").then(function(db) {

    console.log("database loaded")
    index_results(db);
    render_result(db);

    if (db.length > 0 ) {
        search_info.setAttribute("class", "alert alert-success");
        search_info.innerHTML += '<p class="fnt-norm-r">The catalog is loaded with <strong>' + db.length + '</strong> mind-bending articles!</p>'
    } else {
        search_info.setAttribute("class", "alert alert-warning");
        search_info.innerHTML += '<p class="fnt-norm-r">Ut oh, the catalog did not load.</p>'
    }
    
});