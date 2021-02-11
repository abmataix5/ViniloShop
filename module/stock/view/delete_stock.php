

<div id="contenido1">
    <form autocomplete="on" method="post" name="delete_user" id="delete_user" action="index.php?page=controller_stock&op=delete&id=<?php echo $_GET['id']; ?>">
        <table border='0'>
            <tr>
                <td align="center"  colspan="2"><h3>¿Desea seguro borrar el producto <?php echo $_GET['id']; ?>?</h3></td>
                
            </tr>
<tr>
            <td><h3>El nombre del disco es:   <?php
                    echo $cod_producto['nombre_disco'];
                ?></h3></td> 
            </tr>
            <tr>    
                   <td><h3>El codigo de compra es el:   <?php
                    echo $cod_producto['cod_compra'];
                ?></h3></td>
                </tr>
            <tr>
                <td align="center"><button type="submit" class="Button_green"name="delete" id="delete">Aceptar</button></td>
                <td align="center"><a class="Button_red" href="index.php?page=controller_stock&op=list">Cancelar</a></td>
            </tr>
        </table>
    </form>
</div>