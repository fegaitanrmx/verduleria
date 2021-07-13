<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Verdulería Rodriguez - La mejor fruta desde 1988</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/fruta2.ico" />
        <!-- Font Awesome icons (free version)-->
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        <!-- Simple line icons-->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.5.5/css/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <!-- JavaScript Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Pattaya&display=swap" rel="stylesheet">
    </head>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-light static-top" style="background-color: rgba(219, 255, 179, 1);">
            <div class="container">
                <a class="navbar-brand" href="index.html" id="logoverduleria">Verdulería Rodriguez</a>
                <a class="btn btn-primary btn-lg" href="portalproveedores.html" id="botonproveedores">Proveedores</a>
            </div>
        </nav>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" style="font-weight: bold;">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="verduleriacarrito.html">Haga su pedido</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="nosotros.html">Quienes somos</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contacto.html">Contacto</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <main>
        <?php
                $conexion = mysqli_connect('localhost','id17094893_feg','3={-2D6&b31e7fHW','id17094893_base1') or
                die('No se pudo establecer la conexión');

                $stock = mysqli_query($conexion, "select producto,stock,precioconsumidor,preciomayorista from stock") or
                die("Problemas en el select: " . mysqli_error($conexion));

                while($sto = mysqli_fetch_array($stock)){
                  echo "Producto:".$sto['producto']."<br>";
                  echo "Stock:".$sto['stock']."<br>";
                  echo "Precio Consumidor Final:".$sto['precioconsumidor']."<br>";
                  echo "Precio Mayorista:".$sto['preciomayorista']."<br>";
                  echo "<hr>";
                }

                mysqli_close($conexion);
            ?>
        </main>
        <!-- Footer-->
        <footer class="footer" style="background-color: rgba(219, 255, 179, 1);">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="legal.html">Legal</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="contacto.html">Contacto</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">© 2021 Verdulería Rodriguez. Todos los derechos reservados</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item mr-3">
                                <a href="#!"><i class="fab fa-facebook fa-2x fa-fw"></i></a>
                            </li>
                            <li class="list-inline-item">
                                <a href="#!"><i class="fab fa-instagram fa-2x fa-fw"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Bootstrap core JS-->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
    </body>
</html>