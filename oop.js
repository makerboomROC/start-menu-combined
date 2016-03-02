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

    document.getElementById('options-button').addEventListener('click', function() {
        shutDownMenu.toggle();
    });

    this.open = function() {
        this.element.style.display = 'block';
        this.opened = true;
    };

    this.close = function() {
        this.element.style.display = 'none';
        this.shutDownMenu.close();
        this.opened = false;
    };

    this.toggle = function() {
        if(this.opened) {
            this.close();
        } else {
            this.open();
        }
    };

    this.close();
}

function ShutDownMenu() {
    this.element = document.getElementById('shutdown-menu');

    this.open = function() {
        this.element.style.display = '';
        this.opened = true;
    };

    this.close = function() {
        this.element.style.display = 'none';
        this.opened = false;
    };

    this.toggle = function() {
        if(this.opened) {
            this.close();
        } else {
            this.open();
        }
    };

    this.close();
}