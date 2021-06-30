var elTabsFeatures = document.querySelector(".tabs-features");
var elsTabsFeaturesItem = document.querySelectorAll(".tabs-features__item");
var elsTabsFeaturesLink = document.querySelectorAll(".tabs-features__link");
var elsPanel = document.querySelectorAll(".panel");

if (elsTabsFeaturesLink.length > 0){
    elsTabsFeaturesLink.forEach(function(link){
        link.addEventListener('click', function(evt){
            evt.preventDefault();

            elsTabsFeaturesItem.forEach(function (item){
                item.classList.remove("tabs-features__item--active");
            });
            link.parentElement.classList.add("tabs-features__item--active");


            elsPanel.forEach(function (panel){
                panel.classList.remove("features__panel--active");
            });

            document.querySelector(link.getAttribute('href')).classList.add("features__panel--active");
            
            console.log(link.getAttribute('href'));
        });
    });
}