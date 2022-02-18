<!DOCTYPE html>
<html lang="en">

<head>
    <?php include 'partials/_head.php' ?>
    <title>Michael Sabado</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

        body {
            font-family: 'Quicksand', sans-serif;
        }

        #myBg {
            background-image: url("images/blur.jpg");
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
        }

        #profilepic {
            height: 200px;
            width: auto;
            border-radius: 100%;
        }

        .nav-item {
            border-bottom: 3px solid transparent;
        }

        .nav-item:hover {
            border-bottom: 3px solid #ddd;
        }

        .nav-link.active {
            border-bottom: 3px solid white;
        }

        #btnUp:hover {
            background-color: white;
            color: black;
            cursor: pointer;
        }

        .mygrid {
            height: 100px;
            border-radius: 5px;
        }

        .zambezi {
            background-color: #705B5F;
        }

        .swirl {
            background-color: #D4CAC2;
        }

        .myDark {
            background-color: rgba(0, 0, 0, 0.5);
        }

        .myCard {
            border-radius: 10px;
        }
    </style>
</head>

<body id="myBg">


    <nav class="navbar myDark navbar-expand-lg navbar-light fixed-top shadow-0 " id="mynav">
        <div class="container">
            <a class="navbar-brand font-weight-bold text-white" href="#"><img src="images/mylogo.png" alt="" height=50></a>
            <button id="btnnav" class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars text-white"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-3">
                        <a class="nav-link  text-white" aria-current="page" href="/">HOME</a>
                    </li>
                    <li class="nav-item  me-3">
                        <a class="nav-link active text-white" href="about.php">ABOUT ME</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link text-white" href="activities.php">ACTIVITIES</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div style="padding-top: 0px; height: 300vh;">

        <div class="container">
            <div class="d-flex align-items-center vh-100">
                <div class="row mx-auto" style="max-width: 1000px;">
                    <div class="col-md-6">
                        <div class="text-center animated zoomIn">
                            <img src="images/profile.jpg" alt="" style="height: 200px; width: 200px; border-radius: 100%; border: 4px solid white;">

                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-center text-sm-center text-md-start mt-3 animated slideInRight">
                            <div class="h1 text-white">"Nice to see you again! Let me show you around."</div>
                            <div class="h5 text-white"><i>-michael</i></div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="mx-auto pt-5 mb-5 " style="max-width: 1000px;">
                <div class="h3 text-white font-weight-bold mb-5 wow zoomIn" style="padding-left: 20px; border-left: 4px solid white;">My Educational Background</div>

                <div class="row">
                    <div class="col-md-4 col-6">
                        <div class="card myCard bg-transparent shadow-0 wow zoomIn">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/ccs.jpg" alt="" style="width: 150px; object-fit: contain; border-radius: 100%;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Calepaan Community School</div>
                                <div class="h6 text-white">2006 - 2012</div>
                                <div class="h6 text-white">Class Valedictorian</div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-6">
                        <div class="card myCard bg-transparent shadow-0 wow zoomIn">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/eca.jpg" alt="" style="width: 150px; object-fit: contain; border-radius: 100%;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Eylim Christian Academy</div>
                                <div class="h6 text-white">2012 - 2018</div>
                                <div class="h6 text-white ">Accountancy & Business Management</div>
                                <div class="h6 text-white">Class Valedictorian</div>

                            </div>
                        </div>
                    </div>

                    <div class="col-md-4 col-12">
                        <div class="card myCard bg-transparent shadow-0 wow zoomIn">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/psu.png" alt="" style="width: 150px; object-fit: contain; border-radius: 100%;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Pangasinan State University</div>
                                <div class="h6 text-white">2018 - Present</div>
                                <div class="h6 text-white">BS Information Technology</div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div class="mx-auto pt-5 mt-5" style="max-width: 1000px;">
                <div class="h3 text-white font-weight-bold mb-5 wow zoomIn" style="padding-left: 20px; border-left: 4px solid white;">My Certificates</div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="card myCard bg-transparent shadow-0 wow fadeInUp">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/php.jpg" alt="" style="width: 250px; object-fit: contain; border-radius: 5px;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">SOLO-LEARN</div>
                                <div class="h5 font-weight-bold  text-white">PHP Course</div>
                                <div class="h6 text-white">March 2021 </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="card myCard bg-transparent shadow-0 wow fadeInUp">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/sql.png" alt="" style="width: 250px; object-fit: contain; border-radius: 5px;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">SOLO-LEARN</div>
                                <div class="h5 font-weight-bold  text-white">SQL Course</div>
                                <div class="h6 text-white">March 2021 </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="card myCard bg-transparent shadow-0 wow fadeInUp">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/2place.png" alt="" style="width: 250px; object-fit: contain; border-radius: 5px;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Synergy UP-EEE</div>
                                <div class="h5 font-weight-bold  text-white">Standford IT Learning's Software Solutions</div>
                                <div class="h6 text-white">5th of March 2021 </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="card myCard bg-transparent shadow-0 wow fadeInUp">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/talk.png" alt="" style="width: 250px; object-fit: contain; border-radius: 5px;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Synergy UP-EEE</div>
                                <div class="h5 font-weight-bold  text-white">Technological Talk</div>
                                <div class="h6 text-white">3rd of March 2021 </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="card myCard bg-transparent shadow-0 wow fadeInUp">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/ss.png" alt="" style="width: 250px; object-fit: contain; border-radius: 5px;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Synergy UP-EEE</div>
                                <div class="h5 font-weight-bold  text-white">Software Solutions</div>
                                <div class="h6 text-white">5th of March 2021 </div>
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6">
                        <div class="card myCard bg-transparent shadow-0 wow fadeInUp">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/site.png" alt="" style="width: 250px; object-fit: contain; border-radius: 5px;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">SITE</div>
                                <div class="h5 font-weight-bold  text-white">IT Innovations Amidst Global Pandemic</div>
                                <div class="h6 text-white">12th of March 2021 </div>
                            </div>
                        </div>

                    </div>
                </div>




            </div>
            <div class="mx-auto pt-5 mb-5 " style="max-width: 1000px;">
                <div class="h3 text-white font-weight-bold mb-5 wow zoomIn" style="padding-left: 20px; border-left: 4px solid white;">References</div>

                <div class="row">
                    <div class="col-md-4 col-12">
                        <div class="card myCard bg-transparent shadow-0 wow zoomIn">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/rp.jpg" alt="" style="width: 150px; object-fit: contain; border-radius: 100%;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Mrs.Rubyan Gaspar-Plamo</div>
                                <div class="h6 text-white">School Principal ECA</div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card myCard bg-transparent shadow-0 wow zoomIn">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/nb.jpg" alt="" style="width: 150px; object-fit: contain; border-radius: 100%;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Mrs.Narcisa Bernabe</div>
                                <div class="h6 text-white">SH Department Head ECA</div>

                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div class="card myCard bg-transparent shadow-0 wow zoomIn">
                            <div class="card-body text-center">
                                <div class="w-100">
                                    <img src="images/ka.jpg" alt="" style="width: 150px; object-fit: contain; border-radius: 100%;">
                                </div>
                                <div class="h5 font-weight-bold mt-4 text-white">Mr.Kristan Afos</div>
                                <div class="h6 text-white">JH Department Head ECA</div>

                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
        <div class="swirl">

            <div class="h6 text-center mb-0 py-3 text-dark">This webpage is Designed by Michael Sabado. </div>

        </div>






        <script>
            $(document).ready(function() {
                new WOW().init();
            });


            function myFunction() {
                if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
                    $("#mynav").addClass("myDark");
                } else {
                    $("#mynav").removeClass("myDark");
                }
            }
        </script>

</body>

</html>