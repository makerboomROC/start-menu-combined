// we laten het initieren van de applicatie over aan een functie.
// deze functie geeft de applicatie terug, voor bv debugging.
function init() {
    return new Application();
}

function extend(target, source) {
    Object.keys(source).forEach(function (key) {
        target[key] = source[key];
    });
}

// Dit is de applicatie, de groter doos om alle onderdelen, zo moet je hem zien.
// Hij doet niets behalve de boel bij elkaar houden.
function Application() {
    this.element     = document.getElementById('application');
    this.startMenu   = new StartMenu();
    this.startButton = new MenuButton('start-button', this.startMenu);
}

// Dit is een algemene menu button. Het vereist een HTML id en een menu.
// Het bind een click event listener aan het HTML element en toggled het menu..
function MenuButton(id, menu) {
    this.element = document.getElementById(id);
    this.element.addEventListener('click', function () {
        menu.toggle();
    });
}

function Menu(id) {
    this.element = document.getElementById(id);
    this.close();
}

Menu.prototype.close = function () {
    this.element.style.display = 'none';
    this.opened                = false;
};

Menu.prototype.open = function () {
    this.element.style.display = '';
    this.opened                = true;
};

Menu.prototype.toggle = function () {
    if (this.opened) {
        this.close();
    } else {
        this.open();
    }
};

function StartMenu() {
    //this.menu = new Menu('start-menu');
    this.shutDownMenu   = new Menu('shutdown-menu');
    this.shutDownButton = new MenuButton('options-button', this.shutDownMenu);
    Menu.apply(this, ['start-menu']);
}

StartMenu.prototype.toggle = Menu.prototype.toggle;
StartMenu.prototype.open = Menu.prototype.open;

StartMenu.prototype.close = function () {
    this.shutDownMenu.close();
    Menu.prototype.close.apply(this);
};