var account = null;
    
function onDialogLoad(sender)
{
	account = window.arguments[0]["SieveAccount"];
    
  // get the custom Host settings
  document.getElementById('txtHostname').value
  	= account.getHost(1).getHostname();
  document.getElementById('txtPort').value
  	= account.getHost(1).getPort();
  document.getElementById('cbxTLS').checked
  	= account.getHost(1).isTLS();

  var cbxHost = document.getElementById('cbxHost');  
  if (account.getHost().getType() == 1)
  	cbxHost.checked = true;
  else 
   	cbxHost.checked = false;   	
  enableHost(cbxHost.checked);
    
  // Login field.
  document.getElementById('txtUsername').value
  	= account.getLogin(2).getUsername();
        
  var cbxPassword = document.getElementById('cbxPassword');
  if (account.getLogin(2).hasPassword() == true)
  {
  	cbxPassword.checked = true;
   	document.getElementById('txtPassword').value = account.getLogin(2).getPassword();
  }
  else
  	cbxPassword.checked = false;

  var rgLogin = document.getElementById('rgLogin');
  rgLogin.selectedIndex = account.getLogin().getType();
  enableLogin(rgLogin.selectedIndex);
    
  document.getElementById('txtKeepAlive').value
  	= account.getSettings().getKeepAliveInterval();
    
  var cbxKeepAlive = document.getElementById('cbxKeepAlive');
  cbxKeepAlive.checked = account.getSettings().isKeepAlive();
  enableKeepAlive(cbxKeepAlive.checked);

  document.getElementById('txtCompile').value
  	= account.getSettings().getCompileDelay();
            
 	var cbxCompile = document.getElementById('cbxCompile');
  cbxCompile.checked = account.getSettings().hasCompileDelay();
  enableCompile(cbxCompile.checked);	
  
  var cbxDebugRequest = document.getElementById('cbxDebugRequest');
  cbxDebugRequest.checked = account.getSettings().hasDebugFlag(0);
  
  var cbxDebugResponse = document.getElementById('cbxDebugResponse');
  cbxDebugResponse.checked = account.getSettings().hasDebugFlag(1);  
  
  var cbxAuthMechanism = document.getElementById('cbxAuthMechanism');
  cbxAuthMechanism.checked = account.getSettings().hasForcedAuthMechanism();
  enableAuthMechanism(cbxAuthMechanism.checked);
   
  var list = document.getElementById('mlAuthMechanism');
  var items = list.getElementsByTagName('menuitem');
  
  var mechanism = account.getSettings().getForcedAuthMechanism();
  
  for (var i = 0; i < items.length; i++)
  {
    if (list.getItemAtIndex(i).value != mechanism)
      continue;
    
    list.selectedIndex = i;
    break;
  }
  
}

function onDialogAccept(sender)
{
	// Do nothing since there should be only valid entries...
}

// Function for the custom authentication
function onLoginSelect(sender)
{
  var type = 0;
  if (sender.selectedItem.id == "rbNoAuth")
  	type = 0;
  else if (sender.selectedItem.id == "rbImapAuth")
  	type = 1;
  else if (sender.selectedItem.id == "rbCustomAuth")
  	type = 2;

  account.setActiveLogin(type);        
  enableLogin(type);
}

function enableLogin(type)
{
	switch (type)
	{
		case 0:
		case 1: document.getElementById('txtUsername').setAttribute('disabled','true');
        		document.getElementById('txtPassword').setAttribute('disabled','true');
		        document.getElementById('cbxPassword').setAttribute('disabled','true');

		        break;
		case 2: document.getElementById('txtUsername').removeAttribute('disabled');                
		        document.getElementById('cbxPassword').removeAttribute('disabled');
		        
		        var cbxPassword = document.getElementById('cbxPassword');
        		if (cbxPassword.checked)
		          document.getElementById('txtPassword').removeAttribute('disabled');
        		else
		          document.getElementById('txtPassword').setAttribute('disabled','true');
	}
}

function onLoginChange(sender)
{
  var cbx = document.getElementById('cbxPassword');
	if (cbx.checked == false)
	  account.getLogin(2).setLogin(document.getElementById('txtUsername').value);
  else
	  account.getLogin(2).setLogin(document.getElementById('txtUsername').value,
	  		document.getElementById('txtPassword').value);   	
}

function onPasswordFocus(sender)
{
  //  document.getElementById('txtPassword').value = "";
}


function onPasswordCommand(sender)
{
	onLoginChange(sender);    
  enablePassword(sender.checked); 
}

function enablePassword(enabled)
{
  if (enabled)
    document.getElementById('txtPassword').removeAttribute('disabled');
  else
    document.getElementById('txtPassword').setAttribute('disabled','true');
}

// Function for the custom server settings
function onHostCommand(sender)
{   
  if (sender.checked)
    account.setActiveHost(true);
  else
    account.setActiveHost(false);    
     
  enableHost(sender.checked);
}

function enableHost(enabled)
{
  if (enabled)
  {
    document.getElementById('txtHostname').removeAttribute('disabled');
    document.getElementById('txtPort').removeAttribute('disabled');
    document.getElementById('cbxTLS').removeAttribute('disabled');
  }
  else
  {
    document.getElementById('txtHostname').setAttribute('disabled','true');    
    document.getElementById('txtPort').setAttribute('disabled','true');        
    document.getElementById('cbxTLS').setAttribute('disabled','true');        
  }
}

function onHostnameChange(sender)
{
  account.getHost(1).setHostname(sender.value);
}

function onPortChange(sender)
{
	account.getHost(1).setPort(sender.value)
}

function onTLSCommand(sender)
{
  account.getHost(1).setTLS(sender.checked);        
}

// Function for the general Settings...
function onKeepAliveCommand(sender)
{   
  account.getSettings().enableKeepAlive(sender.checked);
  enableKeepAlive(sender.checked);    
}

function enableKeepAlive(enabled)
{
  if (enabled)
    document.getElementById('txtKeepAlive').removeAttribute('disabled');
  else
    document.getElementById('txtKeepAlive').setAttribute('disabled','true'); 
}

function onKeepAliveChange(sender)
{
  account.getSettings().setKeepAliveInterval(sender.value)    
}

function onCompileCommand(sender)
{    
  account.getSettings().enableCompile(sender.checked); 
  enableCompile(sender.checked);    
}

function enableCompile(enabled)
{
  if (enabled)
    document.getElementById('txtCompile').removeAttribute('disabled');
  else
    document.getElementById('txtCompile').setAttribute('disabled','true'); 
}

function onCompileChange(sender)
{
  account.getSettings().setCompileDelay(sender.value)    
}

function onDebugRequestCommand(sender)
{
  account.getSettings().setDebugFlag(0,sender.checked);
}

function onDebugResponseCommand(sender)
{    
  account.getSettings().setDebugFlag(1,sender.checked);
} 

function onAuthMechanismCommand(sender)
{
  account.getSettings().enableForcedAuthMechanism(sender.checked);
  enableAuthMechanism(sender.checked);
}

function enableAuthMechanism(enabled)
{
  if (enabled)
    document.getElementById('mlAuthMechanism').removeAttribute('disabled');
  else
    document.getElementById('mlAuthMechanism').setAttribute('disabled','true'); 
}

function onAuthMechanismSelect(sender)
{
  // on startup it will happen that select is called before the account object exists...
  if (account == null)
    return;
 
  account.getSettings().setForcedAuthMechanism(sender.selectedItem.value);
}
