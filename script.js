function removeLoader() {
    setTimeout(() => {
        let loader = document.getElementById('loader');

        loader.style.transition = 'opacity 1s ease-out';
        loader.style.opacity = '0';
    
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 1000)
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#pageOne").forEach(card => {
        card.addEventListener("click", function(event) {
            event.preventDefault();

            let itemStyle = document.querySelector('link[href="./css/item.css"]');
            if (!itemStyle) {
                let newStyle = document.createElement("link");
                newStyle.rel = "stylesheet";
                newStyle.href = "./css/item.css";
                document.head.appendChild(newStyle);
            }

            setTimeout(() => {
                let styleSheet = document.querySelector('link[href="./css/style.css"]');
                if (styleSheet) {
                    styleSheet.disabled = true;
                }
            }, 1000);

            removeLoader();
            document.body.innerHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="./css/item.css">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
                    <title>Fine Dining Restaurant</title>
                </head>
                <body>
                    <div id="loader"><p id="loader-content"></p></div>
                    
                    <!-- navbar -->
                    <ul>
                        <h1 style="text-align: center; color: aliceblue; margin: 1vh 0 0 0; cursor: default;">RESTAURANT GUIDE</h1>
                        <li><a href="./"><p>MENU</p></a></li>
                    </ul>

                    <!-- cards -->
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <img src="./img/items/1.jpg" alt="">
                                    <div class="card-text">
                                        <h1 id="items">Gabel Loffel</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec velit interdum tempus. Etiam vel urna at ligula volutpat venenatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptatibus, nam reiciendis quod sapiente deleniti similique nihil nobis facilis nostrum, ipsum eveniet eius ut officiis dolorum exercitationem animi consequuntur mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit repellat laborum quam, assumenda eaque consequuntur nesciunt ea explicabo nostrum corrupti enim veniam consequatur eveniet molestiae blanditiis consectetur illum! Neque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </body>
                </html>
            `;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#pageTwo").forEach(card => {
        card.addEventListener("click", function(event) {
            event.preventDefault();

            let itemStyle = document.querySelector('link[href="./css/item.css"]');
            if (!itemStyle) {
                let newStyle = document.createElement("link");
                newStyle.rel = "stylesheet";
                newStyle.href = "./css/item.css";
                document.head.appendChild(newStyle);
            }

            setTimeout(() => {
                let styleSheet = document.querySelector('link[href="./css/style.css"]');
                if (styleSheet) {
                    styleSheet.disabled = true;
                }
            }, 1000);

            removeLoader();
            document.body.innerHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="./css/item.css">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    <title>Fine Dining Restaurant</title>
                </head>
                <body onload="removeLoader();">
                    <div id="loader"><p id="loader-content"></p></div>
                    <!-- navbar -->
                    <ul>
                        <h1 style="text-align: center; color: aliceblue; margin: 1vh 0 0 0; cursor: default;">RESTAURANT GUIDE</h1>
                        <li><a href="./"><p>MENU</p></a></li>
                    </ul>

                    <!-- cards -->
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <img src="./img/items/2.jpg" alt="">
                                    <div class="card-text">
                                        <h1 id="items">Gary Gari</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec velit interdum tempus. Etiam vel urna at ligula volutpat venenatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptatibus, nam reiciendis quod sapiente deleniti similique nihil nobis facilis nostrum, ipsum eveniet eius ut officiis dolorum exercitationem animi consequuntur mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit repellat laborum quam, assumenda eaque consequuntur nesciunt ea explicabo nostrum corrupti enim veniam consequatur eveniet molestiae blanditiis consectetur illum! Neque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <script src="./script.js"></script>
                </body>
                </html>

            `;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#pageThree").forEach(card => {
        card.addEventListener("click", function(event) {
            event.preventDefault();

            let itemStyle = document.querySelector('link[href="./css/item.css"]');
            if (!itemStyle) {
                let newStyle = document.createElement("link");
                newStyle.rel = "stylesheet";
                newStyle.href = "./css/item.css";
                document.head.appendChild(newStyle);
            }

            setTimeout(() => {
                let styleSheet = document.querySelector('link[href="./css/style.css"]');
                if (styleSheet) {
                    styleSheet.disabled = true;
                }
            }, 1000);

            removeLoader();
            document.body.innerHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="./css/item.css">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    <title>Fine Dining Restaurant</title>
                </head>
                <body onload="removeLoader();">
                    <div id="loader"><p id="loader-content"></p></div>
                    <!-- navbar -->
                    <ul>
                        <h1 style="text-align: center; color: aliceblue; margin: 1vh 0 0 0; cursor: default;">RESTAURANT GUIDE</h1>
                        <li><a href="./"><p>MENU</p></a></li>
                    </ul>

                    <!-- cards -->
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <img src="./img/items/3.jpg" alt="">
                                    <div class="card-text">
                                        <h1 id="items">Il Platto</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec velit interdum tempus. Etiam vel urna at ligula volutpat venenatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptatibus, nam reiciendis quod sapiente deleniti similique nihil nobis facilis nostrum, ipsum eveniet eius ut officiis dolorum exercitationem animi consequuntur mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit repellat laborum quam, assumenda eaque consequuntur nesciunt ea explicabo nostrum corrupti enim veniam consequatur eveniet molestiae blanditiis consectetur illum! Neque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <script src="./script.js"></script>
                </body>
                </html>
            `;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("#pageFour").forEach(card => {
        card.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default navigation

            // Add item.css immediately
            let itemStyle = document.querySelector('link[href="./css/item.css"]');
            if (!itemStyle) {
                let newStyle = document.createElement("link");
                newStyle.rel = "stylesheet";
                newStyle.href = "./css/item.css";
                document.head.appendChild(newStyle);
            }

            // Delay before disabling style.css
            setTimeout(() => {
                let styleSheet = document.querySelector('link[href="./css/style.css"]');
                if (styleSheet) {
                    styleSheet.disabled = true;
                }
            }, 1000); // 1-second delay

            // Replace the page content with new HTML structure
            removeLoader();
            document.body.innerHTML = `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="./css/item.css">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">    <title>Fine Dining Restaurant</title>
                </head>
                <body onload="removeLoader();">
                    <div id="loader"><p id="loader-content"></p></div>
                    <!-- navbar -->
                    <ul>
                        <h1 style="text-align: center; color: aliceblue; margin: 1vh 0 0 0; cursor: default;">RESTAURANT GUIDE</h1>
                        <li><a href="./"><p>MENU</p></a></li>
                    </ul>

                    <!-- cards -->
                    <div class="row">
                        <div class="column">
                            <div class="card">
                                <div class="card-content">
                                    <img src="./img/items/4.jpg" alt="">
                                    <div class="card-text">
                                        <h1 id="items">Il Platto</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna nec velit interdum tempus. Etiam vel urna at ligula volutpat venenatis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptatibus, nam reiciendis quod sapiente deleniti similique nihil nobis facilis nostrum, ipsum eveniet eius ut officiis dolorum exercitationem animi consequuntur mollitia. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab odit repellat laborum quam, assumenda eaque consequuntur nesciunt ea explicabo nostrum corrupti enim veniam consequatur eveniet molestiae blanditiis consectetur illum! Neque?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <script src="./script.js"></script>
                </body>
                </html>
            `;
        });
    });
});