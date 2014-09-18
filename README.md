## install

```bash
npm install xmpp-cert-info -g
```

## usage

```
$ xmpp-cert-info -h
Usage:
  xmpp-cert-info [OPTIONS] [xmpp-server-domain]

Options:
  -d, --domain STRING    xmpp server domain
  -p, --port [NUMBER]    xmpp server port (Default is 5222)
      --color STRING     colorize output (auto,yes,no)
      --debug BOOL       debug mode
  -h, --help             Display help and usage details
```

## example

```bash
xmpp-cert-info jabber.org
```

## informations

* subject, issuer, subjectaltname, modulus, exponent, valid_from, valid_to, fingerprint, ext_key_usage
