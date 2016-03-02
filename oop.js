// we laten het initieren van de applicatie over aan een functie.
// deze functie geeft de applicatie terug, voor bv debugging.
function init() {
    return new Application();
}

// Dit is de applicatie, de groter doos om alle onderdelen, zo moet je hem zien.
// Hij doet niets behalve de boel bij elkaar houden.
function Application() {
    this.element = document.getElementById('application');
    this.startMenu = new StartMenu();
    this.startButton = new MenuButton('start-button', this.startMenu);
}

// Dit is een algemene menu button. Het vereist een HTML id en een menu.
// Het bind een click event listener aan het HTML element en toggled het menu..
function MenuButton(id, menu) {
    this.element = document.getElementById(id);
    this.element.addEventListener('click', function() {
        menu.toggle();
    });
}

function StartMenu() {
    this.shutDownMenu = new ShutDownMenu();
    this.shutDownButton = new MenuButton('options-button', this.shutDownMenu);
    Menu.apply(this, ['start-menu']);
}

StartMenu.prototype.open = function() {
    this.element.style.display = 'block';
    this.opened = true;
};

StartMenu.prototype.close = function() {
    this.element.style.display = 'none';
    this.shutDownMenu.close();
    this.opened = false;
};

StartMenu.prototype.toggle = function() {
    if(this.opened) {
        this.close();
    } else {
        this.open();
    }
};

function ShutDownMenu() {
    Menu.apply(this, ['shutdown-menu']);
}

ShutDownMenu.prototype.open = function() {
    this.element.style.display = '';
    this.opened = true;
};

ShutDownMenu.prototype.close = function() {
    this.element.style.display = 'none';
    this.opened = false;
};

ShutDownMenu.prototype.toggle = function() {
    if(this.opened) {
        this.close();
    } else {
        this.open();
    }
};

function Menu(id) {
    this.element = document.getElementById(id);
    this.close();
}