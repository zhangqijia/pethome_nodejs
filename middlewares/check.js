/**
 * @author Sicong Teng
 */
module.exports = {

    checkAdminLogin: function checkAdminLogin(req, res, next) {
        checkRoleLogin('admin', req, res, next);
    },

    checkIsAdminLogin: function checkAdminLogin(req, res, next) {
        checkIsAdmin(req, res, next);
    },

    /**
     * check if already log
     * @param req
     * @param res
     * @param next
     */
    checkIsLogin: function checkIsLogin (req, res, next) {
        if (req.session.role == "admin") {
            res.redirect('/admin/pet_list_waiting');
        } else if (req.session.role == "user") {
            res.redirect('/');
        } else {
            next();
        }
    }
};

/**
 * check if already login in,
 * if not, redirect to login in page.
 * @param role
 * @param req
 * @param res
 * @param next
 * @returns {void|*|Response}
 */
function checkRoleLogin(role, req, res, next) {
    if (req.session.role !== role) {
        return res.redirect('/login');
    }
    next();
}

/**
 * check if already login as admin,
 * if so, redirect to admin homepage.
 * @param req
 * @param res
 * @param next
 * @returns {void|*|Response}
 */
function checkIsAdmin(req, res, next) {
    if (req.session.role == "admin") {
        return res.redirect('/admin/pet_list_waiting');
    } else {
        next();
    }
}
