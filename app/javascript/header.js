function stickyNavbar()
{
    let header = document.getElementsByTagName("header")[0];
    let position = header.getBoundingClientRect();
    let stickyNavbar = document.getElementsByClassName("navbar-sticky")[0];
    
    console.log(position.top)
    if (position.bottom <= 0)
    {
        stickyNavbar.style.display = "block";
    }
    else
    {
        stickyNavbar.style.display = "none";
    }
}