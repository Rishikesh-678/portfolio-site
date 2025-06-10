function toggleMenu() {
    const menu = documentquerySelector('.menu-links');
    const icon = documentquerySelector('.hamburger-icon');
    menu.classlist.toggle('open');
    icon.classlist.toggle('open');
}