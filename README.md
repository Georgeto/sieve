# About

Sieve is a powerful script language for server-side mail filtering. It is 
intended to be used with IMAP and thus it is widely spread. Many IMAP Server 
are capable of running sieve filters. Sieve stores and runs all script on the 
server-side.

Now there is the dilemma - you have access to a server supporting sieve but, 
how do you manage your scripts on this server?

You can use telnet for this purpose, but that is fair to uncomfortable, not 
applicable for a normal user and almost impossible with secure connections. 
Wouldn't it be great to activate, edit, delete and add sieve scripts with a 
convenient interface? That is exactly what the Sieve Extension offers...

# Status

The extension is an implementation of the [sieve management protocol (RFC 5804)](https://wiki.tools.ietf.org/html/rfc5804).
Currently only "SASL Plain", "SASL Login", "SASL CRAM MD5" and "SASL SCRAM SHA1" 
Authentication mechanisms are supported, others may be implemented on request. 
Since there have not been any major Bugs, the project can be considered as 
rather stable.

# Bugs

Please report bugs via the [issue tracker](https://github.com/thsmi/sieve/issues) 
or send an email to schmid-thomas at gmx.net

Give me 1-2 weeks time for a reply. If you did not receive a reply at all, it 
might be a good idea to check your spam filter. 

# License

The extension is free and open source software, it is made available to you 
under the terms of the [GNU Affero General Public License (AGPLv3)](http://www.fsf.org/licensing/licenses/agpl-3.0.html).

Refer to [Licensing information](LICENSE.md) for details.

# How to Install in Thunderbird

1. Right-Click on the link below and choose "Save Link As..." to Download and 
   save the file to your hard disk.
2. In Mozilla Thunderbird, open the addon manager (Tools Menu/Addons) 
3. Click the Install button, and locate/select the file you downloaded and click "OK"


# Releases

The most [recent release](https://addons.mozilla.org/downloads/latest/2548/addon-2548-latest.xpi?src=external-mozdev) 
can be downloaded from [addons.mozilla.org](https://addons.mozilla.org/downloads/latest/2548/addon-2548-latest.xpi?src=external-mozdev).

# Developments Builds

You are looking for the latest "bleeding edge" features and willing to risk more instability?
Or you might even want to test out newly added code to help identify and debug problems?

Just go to the download section:

https://github.com/thsmi/sieve/downloads

Use these development builds at your own risk, and please report bugs! The builds 
don't use special version numbers, but they should automatically upgrade to stable 
builds upon release of the next version.
