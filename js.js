



function noweOkno() {
    var noweOkno = window.open('', 'okno', 'toolbar=no,location=no,width=200,height=200');
    with (noweOkno) {
        document.writeln('<html>');
        document.writeln('<head>');
        document.writeln('<title>Tytuł okienka</title>');
        document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />');
        document.writeln('</head>');
        document.writeln('<body>');
        document.writeln('<p>To jest okno utworzone dynamicznie <strong>On-The-Fly</strong></p>');
        document.writeln('</body>');
        document.writeln('</html>');
        document.close() //kończymy zapis do dokumentu
    }
}

document.getElementById('guzikOkna').onclick = function() {
    noweOkno('strona.html');
}