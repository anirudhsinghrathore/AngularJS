function SidebarController(){
    var ctrl = this;
}

app.component("sidebarComponent",{
    templateUrl: "sidebar/sidebar.html",
    controller: SidebarController,
    bindings:{
        people:"="
    }
});