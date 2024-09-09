'use strict';

var Terminal = (function () {

    // Variables
    var commands = ['help', 'hint', 'spot', 'xyz', 'abc'],
        history = [],
        historyIndex = 0,
        $window = $('.window'),
        $input = $('.input');

    // Binding
    $input.on('keydown', handleKeypress);

    // Let's start!
    //appendNewLine('cmd>');
    $input.focus();

    // Function that is fired when the user hits a key
    function handleKeypress(e) {
        if (e.which === 13) {
            runGameLogic();
        } else if (e.which === 38) {
            commandHistory(-1);
        } else if (e.which === 40) {
            commandHistory(1);
        }
    }

    // Main game logic
    function runGameLogic(string) {
        var playerInput = $input.val() || string;

        history.push(playerInput);
        historyIndex = history.length;

        //clear command
        if (playerInput.toLowerCase() === 'clear') {
            clearScreen();
            appendNewLine('<br>');
            return;
        }

        appendNewLine(playerInput);
        $input.val('');
        playerInput = playerInput.toLowerCase();

        //invalid command
        if (!validInput(playerInput) && !playerInput.includes('hint')) {
            appendNewLine('<br>');
            appendNewLine('<span class="red">command not found:</span> <span>' + playerInput + '</span>');
            appendNewLine('<br>');
            return;
        }
        //help command
        if (playerInput === 'help') {
            appendNewLine('<br>');
            appendNewLine('You can enter any available system commands or any key that you\'ve received from a drop');
            appendNewLine('<br>');
            appendNewLine('<span class="yellow">available commands:</span> help, hint, clear, [key]')
            appendNewLine('<br>');
            return;
        }
        //hint command
        if (playerInput.includes('hint')) {
            var params = playerInput.split(" ");
            console.log(params[1]);
            if (!params[1]) {
                appendNewLine('<br>');
                appendNewLine('<span class="yellow">usage:</span> hint [key] (ex. hint 123)')
                appendNewLine('<br>');
            }
            if (!validInput(params[1]) && params[1] !== undefined && params[1] !== '123') {
                appendNewLine('<br>');
                appendNewLine('<span class="red">invalid key</span>')
                appendNewLine('<br>');
            } else {
                if (params[1] === '123') {
                    appendNewLine('<br>');
                    appendNewLine('<span class="yellow">hint: </span>This is an example hint. Next time, use a valid key');
                    appendNewLine('<br>');
                }
                if (params[1] === 'spot') {
                    appendNewLine('<br>');
                    appendNewLine('<span class="yellow">hint: </span>The trees are beautiful this time of year');
                    appendNewLine('<br>');
                }
            }
            return;
        }

        if (playerInput === 'spot') {
            appendNewLine('<br>');
            appendNewLine('<span class="yellow">Message:</span>')
            appendNewLine('<span class="yellow">-----------------------------------------</span>');
            appendNewLine('We\'re glad to hear from you agent! We thought we\'d lost you - and ever since they invaded Sheridan, we\'re never sure who we can trust.');
            appendNewLine('<br>');
            appendNewLine('Now that you\'re back, we want to get you up to speed, but we don\'t have time for that yet. Every move is being clocked.');
            appendNewLine('<br>');
            appendNewLine('<span class="red">BE CAREFUL</span>');
            appendNewLine('<br>');
            appendNewLine('We will be in touch soon. You will now be given coordinates to your next mission.');
            appendNewLine('<br>');
            appendNewLine('Enter these into your GPS and they\'ll put you in range of the next drop.');
            appendNewLine('<br>');
            appendNewLine('Enter <span class="red">hint spot</span> to get a hint.');
            appendNewLine('<br>');
            appendNewLine('<span class="green"><a href="https://www.google.com/maps" target="_blank">44.7977795, -106.9580565</a></span>');
            appendNewLine('<span class="yellow">-----------------------------------------</span>');
            appendNewLine('<br>');
            return;
        }

    }

    // Go through previous commands like a real terminal
    function commandHistory(number) {
        if (number < 0) {
            if (historyIndex >= 0) {
                historyIndex += number;
            }
        } else {
            if (historyIndex < history.length) {
                historyIndex += number;
            }
        }
        $input.val(history[historyIndex] || '');
    }

    // Appends a new line to the terminal
    function appendNewLine(content) {
        $input.before('<div>' + content + '</div>');
        $window.scrollTop($window[0].scrollHeight);
    }

    // Checks if the input is valid
    function validInput(input) {
        if (commands.includes(input)) {
            return true;
        }
        return false;
    }


    // Clears the terminal
    function clearScreen() {
        $('.window > div').remove();
        $input.val('');
    }

    // Public methods
    return {
        insert: runGameLogic,
        clear: clearScreen
    };

})();