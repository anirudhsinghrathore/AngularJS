function MainContentController(){
    var ctrl = this;
    ctrl.ratePerson = function(person)
    {
        // Here will go API call to increment rate
        alert("Person named " + person.name + " with current rate of " + person.rating +
            " will increment to " + (++person.rating));
    }
}

app.component("mainContentComponent",{
    templateUrl: "main-content/mainContent.html",
    controller : MainContentController,
    bindings:{
        people : "="
    }
});
app.filter('range', function() {
    return function(input, total) {
        total = parseInt(total);

        for (var i=0; i<total; i++) {
            input.push(i);
        }

        return input;
    };
});