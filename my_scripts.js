function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function toggleContent() {
            var image = document.getElementById("featureImage");
            image.style.display = (image.style.display === "none" || image.style.display === "") ? "block" : "none";
        }
function toggleContent2() {
    var initialContent = document.getElementById('init_content_for_where_am_from');
    var alternateContent = document.getElementById('alt_content_for_where_am_from');

    initialContent.classList.toggle('hidden');
    alternateContent.classList.toggle('hidden');
}
function toggleContent3() {
    var initialContent = document.getElementById('init_content_for_music');
    var alternateContent = document.getElementById('alt_content_for_music');

    initialContent.classList.toggle('hidden');
    alternateContent.classList.toggle('hidden');
}