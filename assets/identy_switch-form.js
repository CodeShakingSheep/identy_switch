/*
 * 	Identy switch RoundCube Bundle
 *
 *	@copyright	(c) 2024 Forian Daeumling, Germany. All right reserved
 * 	@license 	LGPL-3.0-or-later
 */

$(function() {

	// Reformat tables
    var fld = $('table[class="propform"]');
    fld.attr('class', 'propform cols-sm-6-6');
    var fld = $('td[class="title col-sm-4"]');
    fld.attr('class', 'title col-sm-6');
    var fld = $('td[class="col-sm-8"]');
    fld.attr('class', 'col-sm-6');
    
	identy_switch_processPreconfig(); 
});

function identy_switch_processPreconfig() {
	
	var fld = $('input[name="_idsw_enabled"]');
	
	if (fld.prop('value') == undefined)
		return;
		
	if (fld.is(':checked')) {
		var val = 1;
		var dis = false;
	} else {
		var val = '';
		var dis = true;
		
	}
	fld.prop('value', val);
	$('input[name="_idsw_label"]').attr('disabled', dis);
	$('input[name="_imap_host"]').attr('disabled', dis);
	$('input[name="_imap_port"]').attr('disabled', dis);
	$('select[name="_imap_auth"]').attr('disabled', dis);
	$('input[name="_imap_user"]').attr('disabled', dis);
	$('input[name="_imap_pwd"]').attr('disabled', dis);
	$('input[name="_imap_delim"]').attr('disabled', dis);
	$('input[name="_smtp_host"]').attr('disabled', dis);
	$('input[name="_smtp_port"]').attr('disabled', dis);
	$('select[name="_smtp_auth"]').attr('disabled', dis);
	$('input[name="_check_all_folder"]').attr('disabled', dis);
	$('input[name="_notify_basic"]').attr('disabled', dis);
	$('input[name="_notify_desktop"]').attr('disabled', dis);
	$('select[name="_notify_timeout"]').attr('disabled', dis);
	$('input[name="_notify_sound"]').attr('disabled', dis);
	$('select[name="_refresh_interval"]').attr('disabled', dis);
	// Disable all links
	$('a[name^="_notify"]').each(function(i, obj) {
		if (dis) {
	  		obj.setAttribute('save', obj.getAttribute('onclick'));
	   		obj.removeAttribute('href');
	   		obj.removeAttribute('onclick');
	   	} else {
  			if (obj.getAttribute('save'))	
  				obj.setAttribute('onclick', obj.getAttribute('save'));
   			obj.setAttribute('href', '#');
		}
	});
	
    var fld = $('input[name="_idsw_readonly"]');
	if (fld.val() > 0) {
        $('input[name="_imap_host"]').prop('disabled', true);
        $('input[name="_imap_port"]').prop('disabled', true);
        $('select[name="_imap_auth"]').prop('disabled', true);

        $('input[name="_smtp_host"]').prop('disabled', true);
        $('input[name="_smtp_port"]').prop('disabled', true);
        $('select[name="_smtp_auth"]').prop('disabled', true);
    }
    if (fld.val() == 2)
        $('input[name="_imap_user"]').prop('disabled', true);
}
 
function identy_switch_enabled() {
    var $enFld = $('input[name="_idsw_enabled"], input[name="_imap_host"], input[name="_smtp_host"]');
    $('input[name!="_idsw_enabled"]', $enFld.parents('fieldset')).prop('disabled', !$enFld.is(':checked'));
    identy_switch_processPreconfig();
}

