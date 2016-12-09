(function () {
    var slugify = (function () {

        // Based on from http://dense13.com/blog/2009/05/03/converting-string-to-slug-javascript/
        function createSlug(str) {
            str = str.replace(/^\s+|\s+$/g, ''); // trim
            str = str.toLowerCase();

            // Remove accents, swap ñ for n, etc
            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to = "aaaaeeeeiiiioooouuuunc------";
            for (var i = 0, l = from.length; i < l; i++) {
                str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
            }

            str = str.replace(/[^a-z0-9 -]/g, '') // Remove invalid chars
                .replace(/\s+/g, '-') // Collapse whitespace and replace by -
                .replace(/-+/g, '-'); // Collapse dashes

            return str;
        }

        return {
            createSlug: createSlug
        }
    })();

    if (typeof window.slugify === "undefined") {
        window.slugify = slugify;
    }
})();