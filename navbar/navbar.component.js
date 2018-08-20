function NavbarController(){
    var ctrl = this;
    ctrl.expression = "";
    ctrl.search = function(){
        var newPeople = [];
        for(var i = 0;i < ctrl.peopleBak.length;i++)
        {
            var person = ctrl.peopleBak[i];
            if(ctrl.expression !== "")
            {
                if(person.name.toLowerCase().indexOf(ctrl.expression) === -1)
                    continue;
            }

            newPeople.push(person);
        }

        ctrl.people = newPeople;
    };
    ctrl.$onInit = function(){
        setTimeout(function(){
            ctrl.peopleBak = ctrl.people;
        },500);
    }

    ctrl.clear = function(){
        ctrl.people = ctrl.peopleBak;
        ctrl.expression = "";
    }
}

app.component("navbarComponent",{
    templateUrl: "navbar/navbar.html",
    controller: NavbarController,
    bindings:{
        people:"="
    }
});