// we laten het initieren van de applicatie over aan een functie.
// deze functie geeft de applicatie terug, voor bv debugging.
function init() {
    return new Application();
}

function Application() {
    this.element = document.getElementById('application');
    var startMenu = this.startMenu = new StartMenu();

    document.getElementById('start-button').addEventListener('click', function() {
        startMenu.toggle();
    });
}

function StartMenu() {
    this.element = document.getElementById('start-menu');
    var shutDownMenu = this.shutDownMenu = new ShutDownMenu();
    this.close();

    document.getElementById('options-button').addEventListener('click', function() {
        shutDownMenu.toggle();
    });
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
    this.element = document.getElementById('shutdown-menu');
    this.close();
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