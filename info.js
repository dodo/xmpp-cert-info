var Connection = require('node-xmpp-client/lib/session');

module.exports = function (domain, callback) {
    var conn = new Connection({
        jid:"noname@" + domain,
        rejectUnauthorized:false,
        requestCert: true,
    });

    conn.once('error', function (err) {
        if (callback) callback(err);
        callback = null;
        conn.end();
    });
    conn.on('connect', function (socket) {
        if (!socket.encrypted) return;
        if (callback) callback(null, socket.getPeerCertificate());
        callback = null;
        conn.end();
    });
};
