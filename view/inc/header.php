
 
 
 <div id = "header">
 <div class="header-bar">
           
            <div class="container-fluid">
               <div class="hedder-up row">
                  <div class="col-lg-3 col-md-3 logo-head">
                     <h1><a class="navbar-brand" href="index.php?page=controller_home&op=list".html">ViniloShop</a></h1>
                
                  </div>
                  						
                  <div class="col-lg-5 col-md-6 search-right">

                        <form class="search">
                        <div class="autocomplete">
                           <form class="form-inline my-lg-0">
                           
                              <input id="autocom" class="form-control mr-sm-2" type="search" placeholder="Busca tu producto">
                              <div id="opauto"></div>
                            
                           </form>
                        </div> 
                           <select id="search_catego">
                              <option value="0">Categoria?</option>
                           </select>
                           <select id="search_estilo">
                              <option value="0">Estilo</option>
                           </select>
                           <a id="searchlist" class="btn" type="submit">Search</a>
                        </form>
                  </div>
                  <div class="col-lg-4 col-md-3 right-side-cart">
                     <div class="cart-icons">
                        <ul id="menu_bar_login">
                        <li>
                              <a class = "españa">........</a>
                           </li>
                           <li>
                           <a class = "engl">.........</a>
                           </li>
                           <li>
                              <span class="far fa-heart"></span>
                           </li>
                           <li id="log_op">
                            <a  href="index.php?page=controller_login&op=login_list"><span id="icon_login" class="far fa-user"></span></a>                          
                          </li>
                         
                           <li class="toyscart toyscart2 cart cart box_1">
                              <form action="#" method="post" class="last">
                                 <input type="hidden" name="cmd" value="_cart">
                                 <input type="hidden" name="display" value="1">
                                 <button class="top_toys_cart" type="submit" name="submit" value="">
                                 <span class="fas fa-cart-arrow-down"></span>
                                 </button>
                              </form>
                           </li>
                           <li id="p_l">
                              0                   
                          </li>  
                        <!--   <li> <a type="button"  href="index.php?page=controller_cart&op=cart_list" class="btn btn-dark" >Cart</a></li> -->
                           <li> <a type="button" class="btn btn-dark" onclick="cambiarModo()">Modo oscuro</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light">
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                  <ul class="navbar-nav" id="menu_barr">
                     <li class="nav-item ">
                        <a class="nav-link" href="index.php?page=controller_home&op=list" data-tr="Inicio"> Home<span class="sr-only">(current)</span></a>
                     </li>
                     <li class="nav-item" id="op_stock" >
                        <a href="index.php?page=controller_stock&op=list"class="nav-link"  id="stock_li" data-tr="Stock">Stock</a>
                     </li>
                     <li class="nav-item">
                        <a href="index.php?page=controller_order&op=list"class="nav-link" data-tr="DataTable">DataTable</a>
                     </li>
                     <li class="nav-item">
                        <a href="index.php?page=controller_shop&op=list" class="nav-link" data-tr="Tienda">Shop</a>
                     </li>
                   
                   
                     <li class="nav-item">
                        <a  href="index.php?page=controller_contact&op=list"class="nav-link" data-tr="Contacto">Contact</a>
                     </li>
                  </ul>
               </div>
            </nav>
         </div>

        </div>

       
   