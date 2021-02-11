

<div id="contenido1">
    <form autocomplete="on" method="post" name="alta_user" id="alta_user">
        <h1>Crear nuevo producto</h1>
        <table border='1'>
            <tr>
                <td>CODIGO DEL GRUPO: </td>
                <td><input type="text" id="cod_grupo" name="cod_grupo" placeholder="Elija el codigo del producto" value=""/></td>
                <td><font color="red">
                    <span id="e_cod_grupo" class="error">
                        <?php
                            echo "$e_cod_grupo";
                        ?>
                    </span>
                </font></font></td>
            </tr>
        
            <tr>
                <td>FECHA ESTRENO: </td>
                <td><input type="text" id="fecha_estreno" name="fecha_estreno" placeholder="Fecha estreno del disco" value=""/></td>
                <td><font color="red">
                    <span id="e_fecha_estreno" class="error">
                        <?php
                            echo "$e_fecha_estreno";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
            <tr>
                <td>NOMBRE GRUPO: </td>
                <td><input type="text" id="nombre_grupo" name="nombre_grupo" placeholder="Inidca el nombre del grupo" value=""/></td>
                <td><font color="red">
                    <span id="e_nombre_grupo" class="error">
                        <?php
                            echo "$e_nombre_grupo";
                        ?>
                    </span>
                </font></font></td>
            </tr>
            
            <tr>
                <td>NOMBRE DISCO: </td>
                <td><input type="text" id= "nombre_disco" name="nombre_disco" placeholder="Indica el nombre del disco" value=""/></td>
                <td><font color="red">
                    <span id="e_nombre_disco" class="error">
                        <?php
                            echo "$e_nombre_disco";
                        ?>
                    </span>
                </font></font></td>
            </tr>

            <tr>
                <td>ESTILO MUSICAL: </td>
                <td>
                    <select id="estilo_musical" type="text" name="estilo_musical"  name="estilo" value="">

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
                <td>CODIGO DE COMPRA: </td>
                <td><input type="text" id="cod_compra" name="cod_compra" placeholder="Elija el codigo de compra de su producto" value=""/></td>
                <td><font color="red">
                    <span id="e_cod_compra" class="error">
                        <?php
                            echo "$e_cod_compra";
                        ?>
                    </span>
                </font></font></td>
            </tr>
           
            
           
            
            <tr>
                <td><input type="button" class="Button_green" name="create" id="create" value="Crear" onclick="validate_user()"/></td>
                <td align="right"><a class="Button_red" href="index.php?page=controller_stock&op=list">Cancelar</a></td>
            </tr>
        </table>
    </form>
</div>