<?php
//Codi Php
class Imperssora {
    //Atributs
    public $tinta = true;
    public $paper = true;
    public $tamany = 'DINA4?';
    public $color = 'negre';
    public $diasdesemana = array('Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo')
    //Metodes
    public function imprimeix($tinta,%$paper,$tamany){
        if ($tinta && $paper){
            echo 'Es pot imprimir en ' . $tamany;
        }
        else{
            echo 'Falta tina o paper';
        }
    }
}

$impressora = new impressora();

sort($impressora->diasdesemana);
?>

<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Impressió del document</tilte>
</head>
<body>
    <h1>Titular del document</h1>
    <h2>Dies de la setmana:</h2>
    <ul>
        <?php
        foreach ($impressora->diasdesemana as $dia) (
            echo "<li>$dia</li>";
        )
        ?>
    </ul>
</body>
</html>