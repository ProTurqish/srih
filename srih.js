
         function checkCode() {
            var code = document.getElementById('code').value;
            var terminal = document.getElementById('terminal');

            var regex = /"([^"]+)"/g;
            var matches = code.match(regex);

            if (matches && matches.length > 0) {
                terminal.innerHTML = "\n";
                matches.forEach(function(match) {
                    terminal.innerHTML += match.slice(1, -1) + "\n";
                });
            } else {
                terminal.innerHTML = "\n";
            }
        
            var code = document.getElementById('code').value;
            var terminal = document.getElementById('terminal');
    
            // Toplama işlemi için regular expression tanımlıyoruz
            var regex = /(\d+)\s*\+\s*(\d+)/g;
            var matches = code.matchAll(regex);
            var sum = 0;
    
            // Her eşleşmeyi al ve topla
            for (const match of matches) {
                var num1 = parseInt(match[1]);
                var num2 = parseInt(match[2]);
                var result = num1 + num2;
                sum += result;
                terminal.innerHTML += + result + "\n";
            }
    
            // Sonucu terminal bölgesine yazdır
            terminal.innerHTML + result ;
        }

//SriH 1.5
