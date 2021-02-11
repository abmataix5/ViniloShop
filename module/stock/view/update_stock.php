

<div id="contenido1">
    <form autocomplete="on" method="post" name="update_user" id="update_user">

        <h1>Modificar producto</h1>
        <table border='1'>
            <tr>
                <td>Codigo de grupo: </td>
                <td><input type="text" id="cod_grupo" name="cod_grupo" placeholder="Codigo de grupo" value="<?php echo $cod_producto['cod_grupo'];?>"/></td>
                <td><font color="red">
                    <span id="e_cod_grupo" class="error">
                        <?php
                            echo "$e_cod_grupo";
                        ?>
                    </span>
                </font></font></td>
            </tr>
        
            <tr>
                <td>Fecha estreno: </td>
                <td><input type="text" id="fecha_estreno" name="fecha_estreno" placeholder="Fecha estreno" value="<?php echo $cod_producto['fecha_estreno'];?>"/></td>
                <td><font color="e_fecha_estreno">
                    <span id="e_fecha_estreno" class="error">
                        <?php
                            echo "$e_fecha_estreno";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
            <tr>
                <td>Nombre del grupo: </td>
                <td><input type="text" id="nombre_grupo" name="nombre_grupo" placeholder="Nombre del grupo" value="<?php echo $cod_producto['nombre_grupo'];?>"/></td>
                <td><font color="red">
                    <span id="e_nombre_grupo" class="error">
                        <?php
                            echo "$e_nombre_grupo";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
            <tr>
                <td>Nombre del disco: </td>
                <td><input type="text" id= "nombre_disco" name="nombre_disco" placeholder="Nombre del disco" value="<?php echo $cod_producto['nombre_disco'];?>"/></td>
                <td><font color="red">
                    <span id="e_nombre_disco" class="error">
                        <?php
                            echo "$e_nombre_disco";
                        ?>
                    </span>
                </font></font></td>
            </tr>

            <tr>
                <td>Estilo musical: </td>
                <td>
                <select id="estilo_musical" type="text" name="estilo_musical"  name="estilo"  value="<?php echo $cod_producto['estilo_musical'];?>">

                        <option>Rock</option>

                        <option>Rap</option>

                        <option>Clasica</option>

                        <option>Pop</option>

                        <option>Electronica</option>

                        </select>
                </td>
                <td><font color="red">
                    <span id="e_estilo_musical" class="error">
                        <?php
                            echo "$e_estilo_musical";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
            <tr>
                <td>Codigo de compra: </td>
                <td><input id="cod_compra" type="text" name="cod_compra" placeholder="Codigo de compra" value="<?php echo $cod_producto['cod_compra'];?>"/></td>
                <td><font color="red">
                    <span id="e_cod_compra" class="error">
                        <?php
                            echo "$e_cod_compra";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
       
            
            <tr>
                <td><input type="button" name="update" id="update" value = "Editar" onclick="validate_userUP()"/></td>
                <td align="right"><a href="index.php?page=controller_stock&op=list">Volver</a></td>
            </tr>
        </table>
    </form>
</div>