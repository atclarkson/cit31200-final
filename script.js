//Retrieve the template data from the HTML .
let template = $('#handlebars-demo').html();

//let context = { "name" : "Adam Clarkson", "occupation" : "developer" };

// let context = JSON.parse(data);

(async () => {
    const context = await (await fetch("data.json")).json();
    console.log(context.header);
    //Compile the template data into a function
    let templateScript = Handlebars.compile(template);

    let html = templateScript(context);
    $(document.body).append(html);
})();

