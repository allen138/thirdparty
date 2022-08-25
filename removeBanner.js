(function() {
    const root = document.querySelector("[class*='SplashHeader_root']");
    const parent = root && root.parentElement;
    parent && parent.removeChild(root);
})();
