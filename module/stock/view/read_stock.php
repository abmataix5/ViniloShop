<section class="banner_inner" id="home">
	<div class="banner_inner_overlay">
	</div>
</section>

<div id="contenido">
    <h1>Informacion del producto</h1>
    <p>
    <table border='2'>
        <tr>
            <td>Codigo viaje: </td>
            <td>
                <?php
                    echo $codviaje['codviaje'];
                ?>
            </td>
        </tr>
    
        <tr>
            <td>Destino: </td>
            <td>
                <?php
                    echo $codviaje['destino'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Numero personas: </td>
            <td>
                <?php
                    echo $codviaje['numpers'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Fecha inicio: </td>
            <td>
                <?php
                    echo $codviaje['fechainicio'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Fecha fin: </td>
            <td>
                <?php
                    echo $codviaje['fechafin'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Comentarios: </td>
            <td>
                <?php
                    echo $codviaje['comentarios'];
                ?>
            </td>
        </tr>
        
        <tr>
            <td>Numero de reserva: </td>
            <td>
                <?php
                    echo $codviaje['numreserva'];
                ?>
            </td>
            
        </tr>
        
      
    </table>
    </p>
    <p><a href="index.php?page=controller_user&op=list">Volver</a></p>
</div>