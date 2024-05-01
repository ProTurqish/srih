       function checkCode() {
            var code = document.getElementById('code').value;
            var terminal = document.getElementById('terminal');

            var regex = /"([^"]+)"/g;
            var matches = code.match(regex);

            if (matches && matches.length > 0) {
                terminal.innerHTML = "Terminal Çıktısı:\n";
                matches.forEach(function(match) {
                    terminal.innerHTML += match.slice(1, -1) + "\n";
                });
            } else {
                terminal.innerHTML = "Terminal Çıktısı:\n";
            }
        }
